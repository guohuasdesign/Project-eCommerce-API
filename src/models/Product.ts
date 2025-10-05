import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required']
        },
        description: { type: String },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: 0
        },
        categoryId: {
            type: Types.ObjectId, 
            ref: 'Category', 
            required: true 
        }
    },
    { timestamps: true }
)

const Product = model('Product', productSchema);
export default Product;