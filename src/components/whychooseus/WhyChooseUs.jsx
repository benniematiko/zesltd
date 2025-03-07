import { Fa1, FaClock, FaRightLong, FaTicket, FaXmark } from "react-icons/fa6";
import "./WhyChooseUs.css";
import { FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus">
      <div className="container">
        <div className="whychooseustitle">
          <p>Why work with us?</p>
        </div>

        <div className="whychooseusmaintitle">
          <h2>We have qualified experts for all industry needs</h2>
        </div>

        <div className="whychooseussection">
          <div className="left">
            <div className="leftone">
              <span className="lefticon">
                <FaTicket />
              </span>
              <div className="leftonedetails">
                <h4>100% Successful Results</h4>
                <p>
                  We always ensure that we meet datelines no matter what the
                  amount of challenges we face
                </p>
              </div>
            </div>

            <div className="leftone">
              <span className="lefticon">
                <FaClock />
              </span>
              <div className="leftonedetails">
                <h4>Working Within Schedule</h4>
                <p> Working within schedule enables us meet datelines always</p>
              </div>
            </div>


            <div className="leftone">
              <span className="lefticon">
                <FaSmile />
              </span>
              <div className="leftonedetails">
                <h4>Free After Sale Services</h4>
                <p> Any after-sale-services are <strong>FREE</strong></p>
              </div>
            </div>

          </div>

          <div className="right">
            <img src="./p5.jpg" alt="" className="rightphoto" />
            <div className="dotted-shapes-holder">
              <img src="./dotted-shapes.svg" alt="" />
            </div>

            <div className="added-points">
              <span><FaRightLong /></span>
              <p>2k+</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
