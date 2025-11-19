import React from "react";

function AddProduk() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-success">Daftar Produk Kesehatan</h2>

      <div className="row">

        {/* Produk 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Vitamin C Imunitas</h5>
              <p className="card-text">
                Suplemen harian untuk membantu meningkatkan daya tahan tubuh,
                menjaga energi, dan melindungi dari radikal bebas.
              </p>
              <button className="btn btn-primary w-100">Lihat Detail</button>
            </div>
          </div>
        </div>

        {/* Produk 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Masker Medis Premium</h5>
              <p className="card-text">
                Masker 3 lapis dengan filtrasi tinggi, nyaman digunakan dan aman
                untuk aktivitas harian atau kebutuhan medis.
              </p>
              <button className="btn btn-primary w-100">Lihat Detail</button>
            </div>
          </div>
        </div>

        {/* Produk 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Hand Sanitizer Aloe Vera</h5>
              <p className="card-text">
                Pembersih tangan antibakteri dengan formula lembut dan aroma
                menyegarkan. Praktis dibawa kemana saja.
              </p>
              <button className="btn btn-primary w-100">Lihat Detail</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AddProduk;
