import "./Services.css";
import { OurServicesPageDatas } from "../../constants/servicespage";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="ourservicestitle">
          <p>Our Services</p>
        </div>

        <div className="ourservicescards">
          {OurServicesPageDatas.map((servicespage, index) => {
            return (
              <div ckey={index} lassName="servicescard">
                <div className="servicesimage">
                  <img src={servicespage.image} alt="" className="serviceimg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
