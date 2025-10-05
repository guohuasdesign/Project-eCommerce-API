import { Schema, model, Types } from "mongoose";

const orderSchema = new Schema(
    {
        userId: {
            type: Types.ObjectId,
            ref: "User",
            required: true
        },
        products: [
            {
                productId: { type: Types.ObjectId, ref: "Product", required: true },
                quantity: { type: Number, required: true, min: 1 }
            }
        ],
        total: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const Order = model("Order", orderSchema);
export default Order;