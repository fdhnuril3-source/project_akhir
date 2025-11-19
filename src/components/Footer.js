import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 py-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Tentang Kami</h5>
            <p className="mt-2">
              Kami menyediakan berbagai informasi dan layanan kesehatan untuk
              membantu Anda menjalani hidup yang lebih sehat dan seimbang.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Tautan Cepat</h5>
            <ul className="list-unstyled mt-2">
              <li><a href="/" className="text-white text-decoration-none">Beranda</a></li>
              <li><a href="/produk" className="text-white text-decoration-none">Produk</a></li>
              <li><a href="/kategori" className="text-white text-decoration-none">Kategori</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Kontak</h5>
            <p className="mt-2 mb-1">📍 Indonesia</p>
            <p className="mb-1">📞 +62 812-3456-7890</p>
            <p className="mb-1">✉️ info@kesehatan.com</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          © {new Date().getFullYear()} Kesehatan • All rights reserved
        </div>
      </div>
    </footer>
  );
}


export default Footer;
