import React from "react";
import "../Stylesheets/Home.css";
import Product from "./Product";
const Home = () =>
{
    return(
      <div className="home">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="test" className="home__image"/>
          <div className="home__row">
               <Product
                  id="1"
                  title="DJ & C by FBB Graphic Print T-Shirt"
                  price={174.00}
                  ratings={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/71E5B3ztLPL._UL1500_.jpg"
               />
                <Product
              id="2"
              title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
              price={62990}
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
              price={120000.00}
              ratings={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
                />
                 <Product
              id="5"
              title="NPLASH FASHION Women's Net Semi-stitched Lehenga Choli (roop yellow-a_Blue & Yellow_Free Size)"
              price={24999.00}
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
    );
}
export default Home