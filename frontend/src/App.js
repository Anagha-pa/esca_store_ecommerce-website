import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import babyDressImage from './assest/baby_dress1.jpg'


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand fst-italic fs-1 text-capitalize fw-semibold" href="#">Esca Store</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Categories</a>
              </li>
              
            </ul>
          
          </div>
        </div>
      </nav>

      <main className="mt-4">
        <div className="container">
          {/* Latest products */}
          <h2 className="mb-4">Latest Products <a href="#" className="float-end btn btn-dark ">View all Products</a></h2>
          <div className="row mb-4">

            {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">

                <h5 className="card-title">Pantaloons Baby</h5>
                <h6 className="card-title">Price : <span className=" text-danger ">RS.500 </span></h6>
              </div>

            <div className="card-footer">
              <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-shopping " style={{ fontSize: '16px' }}></i></button>
              <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart " style={{ fontSize: '16px' }}></i></button>
            </div>  

            </div>
              </div>
               {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Pantaloons Baby</h5>
                <h6 className="card-title">Price : <span className=" text-danger ">RS.500 </span></h6>
              </div>

            <div className="card-footer">
              <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-shopping " style={{ fontSize: '16px' }}></i></button>
              <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart " style={{ fontSize: '16px' }}></i></button>
            </div>  

            </div>
              </div>
              {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Pantaloons Baby</h5>
                <h6 className="card-title">Price : <span className=" text-danger ">RS.500 </span></h6>
              </div>

            <div className="card-footer">
              <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-shopping " style={{ fontSize: '16px' }}></i></button>
              <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart " style={{ fontSize: '16px' }}></i></button>
            </div>  

            </div>
              </div>
              {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Pantaloons Baby</h5>
                <h6 className="card-title">Price : <span className=" text-danger ">RS.500 </span></h6>
              </div>

            <div className="card-footer">
              <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-shopping " style={{ fontSize: '16px' }}></i></button>
              <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart " style={{ fontSize: '16px' }}></i></button>
            </div>  

            </div>
              </div>
              {/* product box ends */}

          </div>
          {/* Latest products */}
        </div>

          

{/*New*/}<div className="container">
          {/* Latest products */}
          <h2 className="mb-4">Popular Categories <a href="#" className="float-end btn btn-dark ">View all Products</a></h2>
          <div className="row mb-4">

            {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">

                <h5 className="card-title">Category title</h5>
                
              </div>

            <div className="card-footer">
              Product Downloads:2356
            </div>  

            </div>
              </div>
               {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Category title</h5>
               
              </div>

            <div className="card-footer">
            Product Downloads:2356
            </div>  

            </div>
              </div>
              {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Category title</h5>
                
              </div>

            <div className="card-footer">
            Product Downloads:2356
            </div>  

            </div>
              </div>
              {/* product box ends */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
              <div className="card" >
              <img src={babyDressImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Category title</h5>
                
              </div>

            <div className="card-footer">
            Product Downloads:2356
            </div>  

            </div>
              </div>
              {/* product box ends */}

          </div>
          {/* Latest products */}
        </div>

          




          
      </main>

    </>
    
  );
}

export default App;
