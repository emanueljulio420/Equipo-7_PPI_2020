import React from 'react';
import './styles.css'

function CosaDocente(params) {

  return (



    <div className="bg-white col-md-8 order-md-1 container my-5">
      <h2 className="mb-3 text-center">Grupos registrados</h2>
      <form className="needs-validation" novalidate="">
        <div className="row">
          <div className="col-md-6 mb-3 text-center">
            <br />
            <button className="btn btn-block my-2 mx-1 btn-danger">   10-1   </button>
            <br />
            <button className="btn btn-block my-2 mx-1 btn-danger">   10-2   </button>
            <br />
            <button className="btn btn-block my-2 mx-1 btn-danger">   10-3   </button>
            <br />
            <button className="btn btn-block my-2 mx-1 btn-danger">   10-4   </button>
            <br />
            <button className="btn btn-block my-2 mx-1 btn-danger">   10-5   </button>
          </div>
        </div>
      </form>

    </div>
  )

}
export default CosaDocente;