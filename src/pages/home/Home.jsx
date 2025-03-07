import "./Home.css";
import OurService from "../../components/ourservice/OurService";
import Stats from "../../components/stats/Stats";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import OurTeam from "../../components/ourteam/OurTeam";
import ActionSection from "../../components/actionsection/ActionSection";

const Home = () => {
  return (
    <div className="home">
      <OurService />
      <Stats />
      <WhyChooseUs />
      <ActionSection />
      <OurTeam />
    </div>
  );
};

export default Home;
