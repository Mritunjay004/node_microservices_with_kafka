import express, { NextFunction, Response, Request } from "express";

const router = express.Router();

//endpoints
router.post(
  "/product",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({});
  }
);

export default router;
