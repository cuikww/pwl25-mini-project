import { query } from '../config/db.js';

export const findAll = async () => {
  const { rows } = await query('SELECT * FROM dosen ORDER BY nama_lengkap ASC');
  return rows;
};

export const findById = async (nidn) => {
  const { rows } = await query('SELECT * FROM dosen WHERE nidn = $1', [nidn]);
  return rows[0];
};

export const create = async (data) => {
  const { nidn, nama_lengkap, email, gelar_akademik, gaji_pokok, tanggal_bergabung, status_aktif } = data;
  const sql = `
    INSERT INTO dosen (nidn, nama_lengkap, email, gelar_akademik, gaji_pokok, tanggal_bergabung, status_aktif)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
  `;
  const params = [nidn, nama_lengkap, email, gelar_akademik, gaji_pokok, tanggal_bergabung, status_aktif];
  const { rows } = await query(sql, params);
  return rows[0];
};

export const update = async (nidn, data) => {
  const { nama_lengkap, email, gelar_akademik, gaji_pokok, tanggal_bergabung, status_aktif } = data;
  const sql = `
    UPDATE dosen SET nama_lengkap = $1, email = $2, gelar_akademik = $3, 
    gaji_pokok = $4, tanggal_bergabung = $5, status_aktif = $6
    WHERE nidn = $7 RETURNING *
  `;
  const params = [nama_lengkap, email, gelar_akademik, gaji_pokok, tanggal_bergabung, status_aktif, nidn];
  const { rows } = await query(sql, params);
  return rows[0];
};

export const remove = async (nidn) => {
  const { rows } = await query('DELETE FROM dosen WHERE nidn = $1 RETURNING *', [nidn]);
  return rows[0];
};
