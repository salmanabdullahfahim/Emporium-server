import express, { NextFunction, Request, Response } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { shopValidation } from "./shop.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { ShopController } from "./shop.controller";

const router = express.Router();
router.get("/all-shops", ShopController.getAllShops);
router.post(
  "/create",
  auth(UserRole.VENDOR),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = shopValidation.createShop.parse(JSON.parse(req.body.data));
    return ShopController.createShop(req, res, next);
  }
);
router.get("/:shopId", ShopController.getAShopForShopDetailPage);
router.get("/", auth(UserRole.VENDOR), ShopController.getAShop);

export const ShopRoutes = router;
