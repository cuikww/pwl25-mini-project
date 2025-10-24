import { Router } from 'express';
import {
  createMataKuliah,
  getAllMataKuliah,
  getMataKuliahById,
  updateMataKuliah,
  deleteMataKuliah,
} from '../controllers/mataKuliahController.js';
import { validateMataKuliah } from '../middleware/validator.js';

const router = Router();

router.post('/', validateMataKuliah, createMataKuliah);
router.get('/', getAllMataKuliah);
router.get('/:id', getMataKuliahById);
router.put('/:id', validateMataKuliah, updateMataKuliah);
router.delete('/:id', deleteMataKuliah);

export default router;
