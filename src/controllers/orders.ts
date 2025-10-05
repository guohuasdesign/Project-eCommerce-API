import type { Request, Response } from "express";
import { Order, Product, User } from "#models";

export const getOrders = async (_req: Request, res: Response) => {
    const orders = await Order.find()
        .populate("userId", "firstName lastName email")
        .populate("products.productId", "name price");
    res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
    const { userId, products } = req.body;

    // 确认用户存在
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ message: "Invalid userId" });


    // 检查产品并计算总价
    let total = 0;
    for (const item of products) {
        const product = await Product.findById(item.productId);
        if (!product)
            return res.status(400).json({ message: `Invalid productId: ${item.productId}` });
        total += product.price * item.quantity;
    }

    const order = new Order({ userId, products, total });
    await order.save();
    res.status(201).json(order);
};

export const getOrderById = async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id)
      .populate("userId", "firstName lastName")
      .populate("products.productId", "name price");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  };
  
  export const deleteOrder = async (req: Request, res: Response) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  };