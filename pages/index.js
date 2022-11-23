import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import { Downloading } from "@mui/icons-material";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="downloads/myPortfolio.pdf" download="Portfolio Jeniffer Hurtado C.pdf">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="downloads/myPortfolio.pdf" download="Portfolio Jeniffer Hurtado C.pdf">

              <span className="mask-lnk">
                <Downloading className="" />
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>{/* //TODO: ADD CV PDF */}
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hello, I’m <strong>Jeniffer Hurtado Coronado</strong>, Fullstack Developer,
                  <br />
                  Web Designer & Blockchain Lover ❤️
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">About</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <img src="images/man_r.jpg" alt="" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                Hello! I’m Jeniffer Hurtado Coronado. Web developer from Colombia based in Mendoza - Argentina. I have rich experience in web application design and
                building. I’m passionate about learning from each and every one of the places, people and experiences that I am a part of.
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Age:</strong> 30
                  </li>
                  <li>
                    <strong>Github:</strong> /jennimar17
                  </li>
                  <li>
                    <strong>Based:</strong> Argentina
                  </li>
                  <li>
                    <strong>Linkedin:</strong> /jeniffer-corona
                  </li>
                  <li>
                  </li>
                  <li>
                    <strong>E-mail:</strong> jennimar17@gmail.com
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a href="downloads/myPortfolio.pdf" download="Portfolio Jeniffer Hurtado C.pdf" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Service */}

        {/* Section Pricing */}

        {/* Section Resume */}
        <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box active">
                    <div className="date">2022 - Present</div>
                    <div className="name">Frontend Developer - Zignaly</div>
                    <div className="text">
                      ReactJs | NextJs | Typescript | Storybook | UX/UI Design | Testing UI | Figma | NFT | Cryptoworld | Blockchain Development
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2021 - 2022</div>
                    <div className="name">
                      Frontend Developer - Vaypol.com
                    </div>
                    <div className="text">
                      ReactJs | NextJs | NodeJs | Sass | UI | Figma | Mobile First | Responsive Design | Git | Jira | SCRUM | Ecommerce | Omnichannel | Email Marketing | Email Layout
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">2022</div>
                    <div className="name">EducacionIT</div>
                    <div className="text">
                      Intensive training in blockchain development
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2021</div>
                    <div className="name">Henry</div>
                    <div className="text">
                      Intensive training in Fullstack Development MERN
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2020</div>
                    <div className="name">ADA ITW</div>
                    <div className="text">
                      Intensive training in Frontend Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Design Skills */}
        <Testimonials />
        {/* Section Coding Skills */}

        {/* Section Knowladge Skills */}

        {/* Section Interests */}

        {/* Section Team */}

        {/* Section Testimonials */}

        {/* Section Clients */}
        <div className="section clients" id="section-clients">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">POAP´S Minted</div>
            </div>
            {/* clients items */}
            <div className="content-box">
              <div className="clients-items">
                <div className="clients-col">
                  <div className="clients-item">
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="https://app.poap.xyz/token/5468193">
                      <img src="images/client3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="https://app.poap.xyz/token/5835057">
                      <img src="images/client4.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Custom Text */}

        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeniffer-corona/">
                      <span className="icon fab fa-linkedin" />
                    </a>
                  </div>
                  <div className="name">Linkedin</div>
                  <div className="text">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Jennimar17">
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Jennimar17">
                      <span className="icon fab fa-github" />
                    </a>
                  </div>
                  <div className="name">Github</div>
                  <div className="text">
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <a target="_blank" rel="noreferrer" href="https://www.behance.net/jeniffehurtado">
                      <span className="icon fab fa-behance-square" />
                    </a>

                  </div>
                  <div className="name">Behance</div>
                  <div className="text">
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Available to Hire</div>
                  <div className="text">
                    <a href="mailto:Jennimar17@gmail.com">
                      Jennimar17@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Form */}

        {/* Section Started */}
      </div>
    </Layout>
  );
};
export default IndexOnePage;
