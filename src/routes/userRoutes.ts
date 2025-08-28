import { Router, Request, Response } from "express";
import { UserController } from "modules/user/interfaces/controllers/UserController"; 
const router = Router();
const user = new UserController();

router.post("/register",  (req: Request, res: Response) => user.register(req, res));
router.post("/login",     (req: Request, res: Response) => user.login(req, res));
router.get("/:id",        (req: Request, res: Response) => user.getById(req, res));

export default router;
