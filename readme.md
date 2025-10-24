## Proyek Mini UTS: REST API Dosen & Mata Kuliah

Ini adalah proyek REST API sederhana yang dibuat menggunakan Express.js dan PostgreSQL. Proyek ini mengimplementasikan fungsionalitas CRUD (Create, Read, Update, Delete) penuh untuk dua resource yang saling berelasi: Dosen dan Mata Kuliah.

### Fitur Utama

RESTful API: Menyediakan endpoint API untuk mengelola data dosen dan mata kuliah.

Arsitektur MVC: Kode diorganisir dengan jelas menggunakan pola Model-View-Controller.

Relasi Database: Mengimplementasikan relasi One-to-Many (satu Dosen bisa mengajar banyak Mata Kuliah).

Middleware: Menggunakan middleware kustom untuk:

Logger: Mencatat setiap request yang masuk ke konsol.

Validator: Memvalidasi data input agar tidak kosong.

ErrorHandler: Menangani error secara terpusat.

Konfigurasi .env: Menggunakan file .env untuk menyimpan kredensial database dan port server.

### Struktur Proyek

Proyek ini mengikuti struktur folder MVC standar untuk memisahkan tanggung jawab:

src/config: Berisi konfigurasi koneksi database PostgreSQL.

src/models: Bertanggung jawab untuk semua query dan logika database (SQL).

src/controllers: Bertindak sebagai "otak" yang mengelola alur request dan response.

src/routes: Mendefinisikan semua endpoint (URL) API.

src/middleware: Berisi file-file untuk logger, validator, dan errorHandler.

### Hasil Uji Coba (Screenshots)

Berikut adalah penjelasan untuk hasil uji coba yang dilakukan menggunakan Postman.

*Output Logger* 
![alt text](screenshot\image.png)
Ini adalah output dari logger.js di terminal. Sesuai ketentuan, middleware ini berhasil mencatat ([LOG]) setiap request yang masuk ke server, lengkap dengan metode HTTP (POST, GET, PUT, DELETE) dan URL endpoint-nya.

*CRUD Dosen (Resource /api/dosen)*

Ini adalah tabel utama (sisi "One") yang memiliki 8 atribut.

1. POST /api/dosen (Create)

![alt text](screenshot\d_image.png)

Hasil pembuatan data dosen baru. Server merespons dengan status 201 Created dan mengembalikan data lengkap dosen yang baru dibuat berkat RETURNING *.

2. GET /api/dosen (Read All)

![alt text](screenshot\d2_image.png)

Hasil pengambilan semua data dosen. Server merespons dengan 200 OK dan mengembalikan sebuah array JSON yang berisi semua objek dosen yang ada di database.

3. GET /api/dosen/:nidn (Read By ID)

![alt text](screenshot\d3_image.png)

Hasil pencarian satu dosen berdasarkan nidn. Server merespons dengan 200 OK dan mengembalikan satu objek JSON dari data dosen yang dicari.

4. PUT /api/dosen/:nidn (Update)

![alt text](screenshot\d4_image.png)

Hasil pembaruan data dosen. Kita mengirim data baru di body, dan server merespons dengan 200 OK serta data dosen yang telah diperbarui.

5. DELETE /api/dosen/:nidn (Delete)

![alt text](screenshot\d5_image.png)

Hasil penghapusan data dosen berdasarkan nidn. Server merespons dengan 200 OK dan sebuah pesan konfirmasi "Dosen berhasil dihapus".

*CRUD Mata Kuliah (Resource /api/matakuliah)*

Ini adalah tabel relasi (sisi "Many") yang terhubung ke dosen.

1. POST /api/matakuliah (Create)

![alt text](screenshot\mt_image.png)

Hasil pembuatan mata kuliah baru. Kita mengirim dosen_nidn sebagai foreign key. Server merespons dengan 201 Created dan data lengkap mata kuliah baru, termasuk id-nya.

2. GET /api/matakuliah (Read All)

![alt text](screenshot\mt_image2.png)

Hasil pengambilan semua data mata kuliah. Output ini menunjukkan keberhasilan JOIN di model, di mana setiap mata kuliah juga menampilkan nama_dosen yang mengajar.

3. GET /api/matakuliah/:id (Read By ID)

![alt text](screenshot\mt_image3.png)

Hasil pencarian satu mata kuliah. Sama seperti Read All, ini membuktikan LEFT JOIN berhasil, menampilkan data mata kuliah beserta data dosen pengajarnya.

4. PUT /api/dosen/:nidn (Update)

![alt text](screenshot\mt_image4.png)

5. DELETE /api/dosen/:nidn (Delete)

![alt text](screenshot\d5_image5.png)

(Catatan: Endpoint PUT dan DELETE untuk mata kuliah mengikuti pola yang sama dengan Dosen)