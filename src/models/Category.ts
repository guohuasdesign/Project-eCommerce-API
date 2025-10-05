import {Schema, model } from 'mongoose';

const categorySchema = new Schema (
    {
        name: { 
            type: String, 
            required: [true, 'Category name is required'],
            unique: true
        }
    },
    { timestamps: true }
);

const Category = model ('Category', categorySchema);
export default Category;