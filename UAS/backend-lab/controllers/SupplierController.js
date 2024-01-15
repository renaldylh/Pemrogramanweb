// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Initialize PrismaClient
const prisma = new PrismaClient();

// Controller to get the list of suppliers
export const getSuppliers = async (req, res) => {
  try {
    const response = await prisma.supplier.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller to get a supplier by ID
export const getSupplierById = async (req, res) => {
  try {
    const response = await prisma.supplier.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// Controller to create a new supplier
export const createSupplier = async (req, res) => {
  const { name, address } = req.body;
  try {
    const supplier = await prisma.supplier.create({
      data: {
        name: name,
        address: address,
      },
    });
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Controller to update a supplier
export const updateSupplier = async (req, res) => {
  const { name, address } = req.body;
  try {
    const supplier = await prisma.supplier.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        address: address,
      },
    });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Controller to delete a supplier
export const deleteSupplier = async (req, res) => {
  try {
    const supplier = await prisma.supplier.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({ msg: "Supplier deleted successfully", supplier });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
