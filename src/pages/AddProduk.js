import React from "react";

function AddProduk() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Daftar Produk</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Produk 1</h5>
              <p className="card-text">Deskripsi singkat produk 1.</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Produk 2</h5>
              <p className="card-text">Deskripsi singkat produk 2.</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduk;