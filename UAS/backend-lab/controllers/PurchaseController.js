// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Initialize PrismaClient
const prisma = new PrismaClient();

// Controller to get the list of purchases
export const getPurchases = async (req, res) => {
  try {
    const response = await prisma.purchase.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller to get a purchase by ID
export const getPurchaseById = async (req, res) => {
  try {
    const response = await prisma.purchase.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// Controller to create a new purchase
export const createPurchase = async (req, res) => {
  const { supplierId, productId, qty, total } = req.body;
  try {
    const purchase = await prisma.purchase.create({
      data: {
        supplierId: supplierId,
        productId: productId,
        qty: qty,
        total: total,
      },
    });
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Controller to update a purchase
export const updatePurchase = async (req, res) => {
  const { supplierId, productId, qty, total } = req.body;
  try {
    const purchase = await prisma.purchase.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        supplierId: supplierId,
        productId: productId,
        qty: qty,
        total: total,
      },
    });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Controller to delete a purchase
export const deletePurchase = async (req, res) => {
  try {
    const purchase = await prisma.purchase.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({ msg: "Purchase deleted successfully", purchase });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
