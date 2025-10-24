import { Router } from 'express';
import {
  createDosen,
  getAllDosen,
  getDosenByNidn,
  updateDosen,
  deleteDosen,
} from '../controllers/dosenController.js';
import { validateDosen } from '../middleware/validator.js';

const router = Router();

router.post('/', validateDosen, createDosen);
router.get('/', getAllDosen);
router.get('/:nidn', getDosenByNidn);
router.put('/:nidn', validateDosen, updateDosen);
router.delete('/:nidn', deleteDosen);

export default router;
