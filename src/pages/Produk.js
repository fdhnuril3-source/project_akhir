import React from "react";
import { useNavigate } from "react-router-dom";

function Produk(){
    const navigate = useNavigate();

    function goTambahData(){
        navigate('/produk/add');
    }
    return (
        <div class="row margin-bottom-20">
            <div class="col display-4 text-center text-white bg-primary">Ini adalah halaman tentang produk Kesehatan</div>

            <button class="btn btn-sm btn-primary" onClick={goTambahData}>Klik</button>
            
        </div>
        
    );
}

export default Produk;