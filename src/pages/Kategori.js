import React from "react";
function Kategori(){
    return (
        <div class="row margin-bottom-20">
            <div class="col display-4 text-center text-white bg-primary">
            <h1>Ini adalah halaman kategori di web Kesehatan</h1>
           
<button type="button" class="btn btn-primary-subtle" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Jenis Kesehatan
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Jenis Kesehatan </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Kesehatan Global</h5>

        <h5>Kesehatan Mental</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
}

export default Kategori;