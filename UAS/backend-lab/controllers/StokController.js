import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export const getStocks = async (req, res) => {
    try {
      const response = await prisma.stock.findMany();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
  // Controller untuk mendapatkan stok berdasarkan ID
  export const getStockById = async (req, res) => {
    try {
      const response = await prisma.stock.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  };
  
  // Controller untuk membuat stok baru
  export const createStock = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
      const stock = await prisma.stock.create({
        data: {
          productId: productId,
          quantity: quantity,
        },
      });
      res.status(201).json(stock);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  // Controller untuk mengupdate stok
  export const updateStock = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
      const stock = await prisma.stock.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          productId: productId,
          quantity: quantity,
        },
      });
      res.status(200).json(stock);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  // Controller untuk menghapus stok
  export const deleteStock = async (req, res) => {
    try {
      const stock = await prisma.stock.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json({ msg: "Stok berhasil dihapus", stock });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };


  export const getSuppliers = async (req, res) => {
    try {
      const response = await prisma.supplier.findMany();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };