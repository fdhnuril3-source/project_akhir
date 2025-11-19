import React from "react";
import { useNavigate } from "react-router-dom";

import vitC from "../assets/img/vitamin c.jpg";
import obatDemam from "../assets/img/obat demam.webp";
import cekTekanan from "../assets/img/cek tekanan.webp";

function Produk() {
  const navigate = useNavigate();

  function goTambahData() {
    navigate("/produk/add");
  }

  const dataProduk = [
    {
      nama: "Vitamin C",
      deskripsi: "Suplemen kesehatan untuk meningkatkan daya tahan tubuh.",
      gambar: vitC,
    },
    {
      nama: "Obat Demam",
      deskripsi: "Obat untuk meredakan demam dan nyeri.",
      gambar: obatDemam,
    },
    {
      nama: "Cek Tekanan Darah",
      deskripsi: "Alat untuk mengukur tekanan darah secara mandiri.",
      gambar: cekTekanan,
    },
  ];

  return (
    <div className="container mt-5">

      <div className="p-4 bg-primary text-white rounded shadow-sm text-center">
        <h2 className="fw-bold">Daftar Produk</h2>
        <p className="mt-2">
          Kelola data produk kesehatan Anda dengan mudah
        </p>
        <button
          className="btn btn-light btn-sm mt-3 fw-bold"
          onClick={goTambahData}
        >
          + Tambah Produk
        </button>
      </div>

      {/* Card Produk */}
      <div className="row mt-4">
        {dataProduk.map((item, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm border-0 h-100">
              <img
                src={item.gambar}
                className="card-img-top"
                alt={item.nama}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title fw-bold">{item.nama}</h5>
                <p className="card-text text-muted">{item.deskripsi}</p>
                <button className="btn btn-primary btn-sm w-100">
                  Detail Produk
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Produk;
