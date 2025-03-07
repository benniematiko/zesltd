import "./Portfolio.css";
import { PortfolioDatas } from "../../constants/ourportfolio";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfoliotitle">
          <p>Our Portfolio</p>
        </div>

        <div className="portfoliocards">
          {PortfolioDatas.map((portfoliodata, index) => {         
              return (
              <div key={index} className="portfoliocard">
                <div className="portfolioimage">
                  <img
                    src={portfoliodata.image}
                    alt=""
                    className="portfolioimg"
                  />
                </div>

                {/* <div className="ptext">
                  <p>{portfoliodata.desc}</p>
                </div> */}
              </div>
              )
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
