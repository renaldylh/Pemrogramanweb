import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import SaleRoute from "./routes/SaleRoute.js";
import StokRoute from "./routes/StokRoute.js";
import SupplierRoute from "./routes/SupplierRoute.js";
import PurchaseRoute from "./routes/PurchaseRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(SaleRoute);
app.use(StokRoute);
app.use(SupplierRoute);
app.use(PurchaseRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server Sudah Running...');
});