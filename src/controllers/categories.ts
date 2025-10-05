import type { Request, Response } from "express";
import { Category } from "#models";

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await Category.find();
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
};

export const getCategoryById = async (req: Request, res: Response) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
};

export const updateCategory = async (req: Request, res: Response) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json({ message: "Category deleted successfully" });
};