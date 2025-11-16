import React from "react";
import myImage from'../assets/img/my-image.jpg';



function Home(){
    return (
        
        <div class="row margin-bottom-20">
             <div className="container mt-4">
                <img src={myImage} className="img-fluid rounded shadow-sm" 
                alt="Deskripsi gambar"
                style={{width: '300px'}}
                />
            </div>
            <div class="col display-4 text-center text-white bg-primary">
            <h1>Selamat datang di halaman web kesehatan</h1>
            <h4>Kesehatan, keafiatan, atau kewarasan adalah kondisi kesejahteraan fisik, mental, dan sosial yang lengkap dan bukan sekadar tidak adanya penyakit atau kelemahan</h4>
            </div>  
           
        </div>
        
    );
}

export default Home;