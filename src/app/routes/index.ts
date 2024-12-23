import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { ShopRoutes } from "../modules/Shop/shop.route";
import { ProductRoutes } from "../modules/Product/product.route";

import { FollowRoutes } from "../modules/Follows/follow.route";
import { ReviewRoutes } from "../modules/Reviews/reviews.route";
import { RecentProductRoutes } from "../modules/RecentProduct/recentProduct.route";
import { FlashSaleRoutes } from "../modules/FlashSale/flashSale.route";
import { OrderRoutes } from "../modules/Order/order.route";
import { PaymentRoutes } from "../modules/Payment/payment.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/shop",
    route: ShopRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/flash-sale",
    route: FlashSaleRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/follows",
    route: FollowRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
  {
    path: "/recent-products",
    route: RecentProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
