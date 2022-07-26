import { Router } from "express";
import ctrls from "../../../controllers/books";
import { ctrlTryCatchWrapper } from "../../../helpers";

const router = Router();

router.get('/', ctrlTryCatchWrapper(ctrls.getAll));

router.post('/', ctrlTryCatchWrapper(ctrls.add));

router.get('/:bookId', ctrlTryCatchWrapper(ctrls.getById))

router.put("/:bookId", ctrlTryCatchWrapper(ctrls.put));

router.delete('/:bookId', ctrlTryCatchWrapper(ctrls.remove));

router.patch('/:bookId/favorite', ctrlTryCatchWrapper(ctrls.patch));

export default router;