import React from "react";
import "../Stylesheets/Home.css";
import Product from "./Product";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Amazon Clone-Home Page</title>
      </Helmet>
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/2_Desktop-Hero_Rec_1500x600._CB419213952_.jpg"
          alt="test"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="DJ & C by FBB Graphic Print T-Shirt"
            price={174.0}
            ratings={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71E5B3ztLPL._UL1500_.jpg"
          />
          <Product
            id="2"
            title="HP Pavilion Gaming 15.6-inch Laptop Shadow Black"
            price={62990.0}
            ratings={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nokia 5.3 Android One Smartphone with Quad Camera, 4 GB RAM and 64 GB Storage - Charcoal"
            price={12999}
            ratings={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg"
          />
          <Product
            id="4"
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={120000.0}
            ratings={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="NPLASH FASHION Women's Net Semi-stitched Lehenga Choli (roop yellow-a_Blue & Yellow_Free Size)"
            price={24999.0}
            ratings={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61en9kN-fsL._UL1176_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
            price={94990}
            ratings={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tt%2BZeOw%2BL._SL1500_.jpg"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
