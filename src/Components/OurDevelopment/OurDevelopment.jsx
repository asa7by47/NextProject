import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.jpg";
import slide3 from "../../../public/slide3.jpg";
import slide4 from "../../../public/slide4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import style from "./OurDevelopment.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Image from "next/image";

const OurDevelopment = () => {
  return (
    <>
      <section className={`py-3 pt-5 ${style.removePadding}`}>
        <HeaderText
          displayNone={style.displayNone}
          removePadding={style.removePadding}
          text={"OUR DEVELOPMENTS"}
          BgLine={style.BgLine}
          developmentFontSize={style.developmentFontSize}
        />
        {/* PC View */}
        <div className={`container-fluid d-none ${style.pcView}`}>
          <Swiper
            slidesPerView={4}
            spaceBetween={28}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper p-2"
          >
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide1}
                />

                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide2}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide3}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide4}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide3}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide2}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide4}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide1}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End PC View */}

        {/* Mobile View */}
        {/* <div className={`container-fluid ${style.mobileView} `}>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper p-2 px-3 "
          >
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide1}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2 ">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={` mt-3 ${style.fsize} text-center`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  North Coast
                </h5>
                <p className="text-muted p-0 m-0 ">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide2}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide3}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide4}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide3}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide2}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide4}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`w-100 h-100 rounded-4 overflow-hidden ${style.zoomHover}`}
              >
                <Image
                  alt="poster"
                  className={`img-fluid rounded-4 ${style.imgHover}`}
                  src={slide1}
                />
                <div className="position-absolute  top-0 start-0 w-100 h-100">
                  <div
                    className={`hoverCaption d-flex h-100 justify-content-end flex-column p-2 d-none  ${style.hoverShow} `}
                  >
                    <p className={`text-white ${style.fontHoverSize} m-0 mb-2`}>
                      How to take matters to new heights is the question we
                      answered with the first high-residential buildings in West
                      Cairo. Aeon towers were mindfully designed to match the
                      ambition of their residents. 20 floors of high-end & fully
                      serviced apartments/penthouses with the extravagant
                      skyline of Cairo as their view. If shooting for the stars
                      is ambitious, then living above the stars is Aeon.
                    </p>
                    <a href="#" className="text-white fw-bold mb-2">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div className={`text-center mt-3 ${style.fsize}`}>
                <h5 className={`colorBlue p-0 m-0 ${style.fsizeHead}`}>
                  New Cairo
                </h5>
                <p className="text-muted p-0 m-0">Residential</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
        {/* End Mobile View */}
      </section>
    </>
  );
};

export default OurDevelopment;
