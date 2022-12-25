import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="aboutUs">
        <h3>What is sad fridge? </h3>
        <div>
          New studies show that Americans throw away an average of 103 pounds of
          spoiled food every year. We believe a source of this food waste occurs
          when ingredients sit unused due to people simply not knowing how to
          use them. Sadfridge.com aims to solve this issue by providing people
          with a selection of potential recipes using the ingredients currently
          available in their refrigerators and pantries. Sadfridge.com provides
          over 100,000 available recipes to choose from, with the aim of
          striking a bargain: nutritious home-made foods reduced grocery
          shopping costs and increased sustainability, and the prevention of
          food spoilage for the price of a fraction of an hour of your day.
        </div>
        <h3>Sources</h3>
      </div>

      <div className="teamMembers">
        <h3 style={{ textAlign: "center" }}>Team Members</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span>
            <a href="https://www.linkedin.com/in/gus-rosales/ " className="us">
              <BsLinkedin />
            </a>
            <a href=" https://github.com/okGus/" className="us">
              <BsGithub />
            </a>
            <span className="us">Gus</span>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/yashaswe-amatya/"
              className="us"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/Yashaswe" className="us">
              <BsGithub />
            </a>
            <span className="us">Yashaswe Amatya</span>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/gabeguzman/" className="us">
              <BsLinkedin />
            </a>
            <a href="https://github.com/sirplantman" className="us">
              <BsGithub />
            </a>
            <span className="us">Gabriel Guzman</span>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/yashaswe-amatya/"
              className="us"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/Yashaswe" className="us">
              <BsGithub />
            </a>
            <span className="us">Vinsen</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
