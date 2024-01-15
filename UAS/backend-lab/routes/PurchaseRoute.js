import express from "express";
import {
  getPurchases,
  getPurchaseById,
  createPurchase,
  updatePurchase,
  deletePurchase
} from "../controllers/PurchaseController.js";

const router = express.Router();

router.get('/purchases', getPurchases);
router.get('/purchases/:id', getPurchaseById);
router.post('/purchases', createPurchase);
router.patch('/purchases/:id', updatePurchase);
router.delete('/purchases/:id', deletePurchase);

export default router;
