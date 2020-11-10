import React from "react";
import "../Stylesheets/Home.css";
import Product from "./Product";
import banner from "../banner.png"
const Home = () =>
{
    return(
      <div className="home">
          {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="test" className="home__image"/> */}
          <img src={banner} alt="test" className="home__image"/>
          <div className="home__row">
               <Product
                  id="1"
                  title="Medium Sized Onions 1kg"
                  price={74}
                  ratings={5}
                  image="https://www.bigbasket.com/media/uploads/p/xxl/10000148_28-fresho-onion.jpg"
               />
                <Product
              id="2"
              title="Fresh Bottle Gourd / Lauki ~500g"
              price={17.50}
              ratings={4}
              image="https://www.bigbasket.com/media/uploads/p/l/20000745_5-fresho-bottle-gourd.jpg"
                />
          </div>
          <div className="home__row">
               <Product
                  id="3"
                  title="Fresho Turmeric - Fresh 250g"
                  price={25}
                  ratings={4}
                  image="https://www.bigbasket.com/media/uploads/p/l/40004374_12-fresho-turmeric-fresh.jpg"
               />
                <Product
              id="4"
              title="Fresh Spine Gourd / Kakrol 250g"
              price={21}
              ratings={5}
              image="https://www.bigbasket.com/media/uploads/p/l/40042988_1-fresho-spine-gourd.jpg"
                />
                 <Product
              id="5"
              title="Fresh Mushrooms - Button 200g"
              price={79}
              ratings={3}
              image="https://www.bigbasket.com/media/uploads/p/l/10000273_13-fresho-mushrooms-button.jpg"
                />
          </div>
          <div className="home__row">
                 <Product
              id="6"
              title="Amul Butter - Pasteurised, 200 g Tub"
              price={97.02}
              ratings={4}
              image="https://www.bigbasket.com/media/uploads/p/xxl/40045943_1-amul-butter-pasteurised.jpg"
                />
          </div>
          <div className="home__row">
                 <Product
              id="6"
              title="Amul Taaza Homogenised Toned Milk, 1 L Carton"
              price={63.36}
              ratings={4}
              image="https://www.bigbasket.com/media/uploads/p/xxl/306926_2-amul-taaza-homogenised-toned-milk.jpg"
                />
          </div>
      </div>
    );
}
export default Home