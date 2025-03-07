import "./OurTeam.css";
import { OurTeamDatas } from "../../constants/ourteam";

const OurTeam = () => {
  return (
    <div className="ourteam">
      <div className="container">
        <div className="ourteamtitle">
          <p>Our Experts</p>
        </div>

        <div className="ourteammaintitle">
          <h2>Meet Our Highly Specialized Experts</h2>

          <span>View all</span>
        </div>

        <div className="ourteamcards">
          
          {OurTeamDatas.map((teamdata, index) => {
            return (
              <div key={index} className="ourteamcard">
                <div className="teamimage">
                  <img src={teamdata.image} alt=""
                   className="imgteam" />
                </div>

                <div className="ourteamdetails">

                  <div className="ourteamtitle">
                    <strong>
                      <p>{teamdata.title}</p>
                    </strong>
                  </div>

                  <div className="teamspecialization">
                    <p>
                      {teamdata.speciality}
                      </p>
                    <span> 5 year exp.</span>
                  </div>

                  <div>
                    <hr />
                  </div>

                  <div className="socialsteam">
                    <p>
                      <span>{teamdata.facebook}</span>
                      <span>{teamdata.twitter}</span>
                      <span>{teamdata.instagram}</span>
                      </p>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
