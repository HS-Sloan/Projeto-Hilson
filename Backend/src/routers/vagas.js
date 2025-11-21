import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, titulo: "Desenvolvedor Frontend" }]);
});

export default router;
