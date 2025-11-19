import React from "react";
import myImage from "../assets/img/my-image.jpg";

function Home() {
  return (
    <div className="container mt-5">

      {/* HEADER */}
      <div className="text-center p-5 bg-primary text-white rounded shadow-sm">
        <h1 className="fw-bold mb-3">
          Selamat Datang di Halaman Web Kesehatan
        </h1>

        <h4 className="mt-3 px-3">
          Kesehatan adalah pondasi utama kehidupan kita. 
          Bukan hanya tentang terbebas dari penyakit, tetapi juga tentang bagaimana kita 
          menjaga kesejahteraan tubuh, ketenangan pikiran, dan keharmonisan sosial.
          Dengan informasi yang tepat, setiap orang dapat meningkatkan kualitas hidup
          dan mencapai keseimbangan yang lebih baik setiap hari.
        </h4>

        <p className="mt-4 fs-5">
          Mari mulai perjalanan menuju hidup yang lebih sehat, lebih kuat, dan lebih bahagia.
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="text-center mt-5">
        <img
          src={myImage}
          className="img-fluid rounded shadow-lg"
          alt="Gambar kesehatan"
          style={{ maxWidth: "420px" }}
        />

        <p className="mt-4 text-secondary fs-5">
          "Perubahan kecil hari ini bisa membawa dampak besar bagi kesehatan Anda di masa depan."
        </p>
      </div>

      {/* ADDITIONAL TEXT */}
      <div className="text-center mt-4 mb-5">
        <p className="fs-5 text-muted px-4">
          Di halaman ini, Anda dapat menemukan informasi, tips, serta edukasi seputar gaya hidup sehat 
          yang dapat membantu Anda mengambil langkah positif setiap hari.  
          Kami percaya bahwa setiap orang berhak mendapatkan pengetahuan kesehatan yang mudah, jelas, dan terpercaya.
        </p>

        <p className="fw-bold fs-5 text-primary">
          Jadikan kesehatan sebagai prioritas, karena tubuh Anda adalah investasi paling berharga.
        </p>
      </div>

    </div>
  );
}

export default Home;
