import React from "react";

function Kategori() {
  return (
    <div className="container mt-5">

      <div className="p-4 bg-primary text-white rounded shadow-sm text-center mb-4">
        <h2 className="fw-bold">Kategori Kesehatan</h2>
        <p className="mt-2 fs-5">
          Temukan berbagai kategori kesehatan yang telah disusun untuk membantu Anda 
          memahami layanan, informasi, dan kebutuhan kesehatan dengan lebih mudah.
          Kami menyediakan kategori yang relevan dan bermanfaat untuk menunjang 
          gaya hidup sehat Anda.
        </p>
      </div>

      
      <div className="text-center mb-4">
        <button
          type="button"
          className="btn btn-primary px-4 py-2 shadow-sm fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#kategoriModal"
        >
          Lihat Kategori
        </button>
      </div>

     
      <div
        className="modal fade"
        id="kategoriModal"
        tabIndex="-1"
        aria-labelledby="kategoriModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded shadow">

            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title fw-bold" id="kategoriModalLabel">
                Daftar Kategori Kesehatan
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p className="text-muted">
                Berikut adalah beberapa kategori yang tersedia untuk membantu Anda 
                memilih layanan kesehatan yang sesuai dengan kebutuhan.
              </p>

              <ul className="list-group">
                <li className="list-group-item">🔹 Pemeriksaan Umum</li>
                <li className="list-group-item">🔹 Kesehatan Mental</li>
                <li className="list-group-item">🔹 Obat & Vitamin</li>
                <li className="list-group-item">🔹 Pola Hidup Sehat</li>
                <li className="list-group-item">🔹 Kesehatan Anak & Lansia</li>
              </ul>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Kategori;
