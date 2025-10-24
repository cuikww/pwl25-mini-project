import { Router } from 'express';
import dosenRouter from './dosenRoute.js'
import matkulRouter from './mataKuliahRoute.js'

const router = Router();

router.use('/dosen', dosenRouter);
router.use('/mata_kuliah', matkulRouter)

router.get('/', (req, res) => {
  res.json({ message: 'Selamat Datang di API Akademik Dosen' });
});

export default router;
