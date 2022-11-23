import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      
      {/* portfolio items */}
      <div className="box-items portfolio-items">

        <div className="box-item f-social-media">
          <div className="image">
          <a
              href="images/work1.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work1.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">CINVESCO</span>
                      <span className="name">Web development</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/work2.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work2.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Restaurant</span>
                      <span className="name">Web development</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-image">
          <div className="image">
            <a
              href="images/work3.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work3.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">AGUEDA</span>
                      <span className="name">Web development</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-image">
          <div className="image">
            <a
              href="images/work6.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work6.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">ScienceTube</span>
                      <span className="name">Web Development</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-design">
          <div className="image">
          <a
              href="images/work4.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work4.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">CUMBRE</span>
                      <span className="name">Web Development</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-image">
          <div className="image">
            <a
              href="images/work5.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work5.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Restaurant</span>
                      <span className="name">Brand Design</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-design">
          <div className="image">
          <a
              href="images/work7.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work7.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Social Media Management</span>
                      <span className="name">& Digital Marketing</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-design">
          <div className="image">
          <a
              href="images/work8.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work8.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">CINVESCO</span>
                      <span className="name">Brand Design</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-design">
          <div className="image">
          <a
              href="images/work9.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work9.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Web3</span>
                      <span className="name">NFT Store </span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </Fragment>
  );
};
export default ItemIsotope;
