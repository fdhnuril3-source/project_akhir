import React from "react";
import myImage from "../assets/img/my-image.jpg";

function Home() {
  return (
    <div className="container mt-5">

      
      <div className="text-center p-5 bg-primary text-white rounded-4 shadow">
        <h1 className="fw-bold mb-3">Selamat Datang di Portal Kesehatan</h1>

        <h4 className="mt-3 px-3">
          Kesehatan adalah investasi terbaik dalam hidup.  
          Di sini kami menghadirkan informasi terpercaya untuk membantu Anda
          memahami tubuh, menjaga kesejahteraan mental, dan membangun gaya hidup
          yang seimbang.
        </h4>

        <p className="mt-4 fs-5">
          Mulai perjalanan menuju hidup yang lebih sehat, lebih kuat, dan lebih bahagia
          bersama kami.
        </p>
      </div>

      <div className="text-center mt-5">
        <img
          src={myImage}
          className="img-fluid rounded-4 shadow-lg"
          alt="Gambar kesehatan"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      
      <div className="mt-5 p-4 bg-light rounded-4 shadow-sm">
        <h3 className="fw-bold text-success">Mengapa Kesehatan Itu Penting?</h3>

        <p className="mt-3 fs-5">
          Kesehatan bukan hanya tentang bebas dari penyakit, tetapi tentang bagaimana
          kita merawat tubuh, pikiran, dan emosi. Dengan informasi yang tepat dan
          kebiasaan yang sehat, setiap orang dapat meningkatkan kualitas hidupnya.
        </p>

        <ul className="fs-5">
          <li>💚 Meningkatkan kualitas hidup dan produktivitas.</li>
          <li>💚 Mencegah risiko penyakit kronis sejak dini.</li>
          <li>💚 Menjaga kesehatan mental agar lebih stabil dan bahagia.</li>
          <li>💚 Membantu tubuh tetap bugar dan lebih berenergi.</li>
        </ul>

        <p className="mt-3 fs-5">
          Kami hadir untuk memberikan edukasi, tips gaya hidup sehat, dan berbagai 
          informasi penting lainnya agar Anda dapat menjaga diri dan keluarga setiap hari.
        </p>
      </div>
      
    </div>
  );
}

export default Home;
