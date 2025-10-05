import type { Request, Response } from "express";
import { Product, Category } from "#models";

export const getProducts = async (req: Request, res: Response) => {
  const filter = req.query.categoryId ? { categoryId: req.query.categoryId } : {};
  const products = await Product.find(filter).populate("categoryId", "name");
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { categoryId } = req.body;
  const category = await Category.findById(categoryId);
  if (!category) return res.status(400).json({ message: "Invalid categoryId" });

  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id).populate("categoryId", "name");
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted successfully" });
};
