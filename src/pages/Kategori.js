import React from "react";

function Kategori() {
  return (
    <div className="container mt-5">

      <div className="p-4 bg-primary text-white rounded-4 shadow text-center mb-4">
        <h2 className="fw-bold">Kategori Kesehatan</h2>
        <p className="mt-2 fs-5">
          Temukan berbagai kategori kesehatan yang telah kami siapkan untuk membantu Anda 
          memahami informasi, layanan, dan kebutuhan kesehatan dengan lebih mudah.
          Kami menghadirkan kategori yang relevan, edukatif, dan bermanfaat
          untuk menunjang gaya hidup sehat Anda.
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
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content rounded-4 shadow-lg">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title fw-bold">Daftar Kategori Kesehatan</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">

              
              <div className="list-group">

                <div className="list-group-item list-group-item-action py-3">
                  <h5 className="fw-bold text-primary">
                    🫀 Kesehatan Jantung
                  </h5>
                  <p>
                    Informasi mengenai pencegahan penyakit jantung, gaya hidup sehat,
                    dan cara menjaga kesehatan kardiovaskular.
                  </p>
                </div>

                <div className="list-group-item list-group-item-action py-3">
                  <h5 className="fw-bold text-success">
                    🥗 Nutrisi & Pola Makan
                  </h5>
                  <p>
                    Panduan makanan seimbang, kebutuhan gizi harian, dan tips makan sehat
                    untuk meningkatkan kualitas hidup.
                  </p>
                </div>

                <div className="list-group-item list-group-item-action py-3">
                  <h5 className="fw-bold text-danger">
                    🤒 Penyakit & Pencegahan
                  </h5>
                  <p>
                    Penjelasan mengenai berbagai penyakit umum, gejala, penyebab,
                    serta langkah pencegahan yang dapat dilakukan.
                  </p>
                </div>

                <div className="list-group-item list-group-item-action py-3">
                  <h5 className="fw-bold text-warning">
                    🧘‍♀️ Kesehatan Mental
                  </h5>
                  <p>
                    Edukasi mengenai stres, kecemasan, dan pentingnya menjaga kondisi
                    mental untuk hidup yang lebih tenang dan bahagia.
                  </p>
                </div>

                <div className="list-group-item list-group-item-action py-3">
                  <h5 className="fw-bold text-info">
                    🏋️‍♂️ Kebugaran & Latihan
                  </h5>
                  <p>
                    Tips olahraga, latihan yang cocok untuk semua usia, dan panduan
                    membangun kebiasaan aktif setiap hari.
                  </p>
                </div>

              </div>
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
