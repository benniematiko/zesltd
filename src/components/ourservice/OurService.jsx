import "./OurService.css";

import { OurServicesDatas } from "../../constants/ourservices";
import { FaCrown } from "react-icons/fa";

const OurService = () => {
  return (
    <div className="ourservice">
      <div className="container">
        <div className="ourservicetitle">
          <p>Our Services</p>
        </div>

        <div className="ourservicemaintitle">
          <h2>Different Services We Offer</h2>
        </div>

        <div className="ourservicesviewall">
          <p>View all</p>
        </div>

        <div className="ourservicesection">
          
          <div className="left">
            <div className="leftimage">
              <img src="./p5.jpg" alt="" className="ourservicesleft" />
            </div>

            <div className="leftoverlay">
              <span><FaCrown /></span>
              <p>100% customer satisfaction</p>
            </div>
          </div>

          <div className="right">
            {OurServicesDatas.map((ourworkdata, index) => {
              return (
                <div key={index} className="ourworkcard">
                  <div className="ourworkimage">
                    <img src={ourworkdata.image} alt="" className="imgcard" />
                  </div>

                  <div className="details">
                    <div className="ourworkcardtitle">
                      <p>{ourworkdata.title}</p>
                    </div>

                    <div className="ourworkdesc">
                      <p>{ourworkdata.description}</p>
                    </div>
                    <div className="morebtn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
