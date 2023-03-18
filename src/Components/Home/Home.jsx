import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { BsFacebook } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import CheckBox from "../CheckBox/CheckBox";
import SideBarCheckbox from "../SideBarCheckbox/SideBarCheckbox";
import searchIcon from "../../../public/searchIcon.png";
import SearchProperties from "../SearchProperties/SearchProperties";
// import SideBarCheckbox from "../SideBarCheckbo/SideBarCheckbox";
import Image from "next/image";
import style from "./Home.module.css";

const Home = () => {
  // Our States
  const [value, setValue] = useState([1000000, 100000000]);
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(100000000);

  const [destination, setDestination] = useState(false);
  const [unit, setUnit] = useState(false);
  const [projects, setProjects] = useState(false);
  const [range, setRange] = useState(false);

  const [user, setUser] = useState("");

  const getUser = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => [inputValue, "20000000"]);
  };
  const getUserMax = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => ["2000000", inputValue]);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDestination = () => {
    setDestination(!destination);
    setUnit(false);
    setProjects(false);
    setRange(false);
  };
  const handleUnit = () => {
    setDestination(false);
    setUnit(!unit);
    setProjects(false);
    setRange(false);
  };
  const handleProjects = () => {
    setDestination(false);
    setUnit(false);
    setProjects(!projects);
    setRange(false);
  };
  const handleRange = () => {
    setDestination(false);
    setUnit(false);
    setProjects(false);
    setRange(!range);
  };

  // Destination state Value
  const [checkedValue, setCheckedValue] = useState([]);
  // End Destination Value
  // Unit state Value
  const [checkedUnit, setCheckedUnit] = useState([]);
  // End Unit Value
  // Projects state Value
  const [checkedProjects, setCheckedProjects] = useState([]);
  // End Projects Value

  const getDestinationValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValue([...checkedValue, value]);
    } else {
      setCheckedValue(checkedValue.filter((item) => item !== value));
    }
  };
  const getUnitValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedUnit([...checkedUnit, value]);
    } else {
      setCheckedUnit(checkedUnit.filter((item) => item !== value));
    }
  };
  const getProjectsValue = (e) => {
    // to get the checked value
    const { value, checked } = e.target;

    if (checked) {
      setCheckedProjects([...checkedProjects, value]);
    } else {
      setCheckedProjects(checkedProjects.filter((item) => item !== value));
    }
  };

  return (
    <>
      {/* Home Page for Desktop */}

      <section className="position-relative">
        <div className="wrapper">
          <div className="frame-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vGF22tNJoRI?playlist=vGF22tNJoRI&loop=1&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              allowFullScreen="allowfullscreen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        <div className={`bg-white rounded-4 py-4  ${style.search}`}>
          <div className="container-fluid ">
            <div className="row ">
              <div className="col-md-10    p-0 m-0">
                <div className="d-flex  h-100 p-0 m-0 w-100 align-items-center">
                  <div className={`col-3 ${style.borderEnd}  w-auto px-5`}>
                    <div className="text-center">
                      <h6
                        className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                        onClick={handleDestination}
                      >
                        Destination
                      </h6>

                      {checkedValue.length === 0 ? (
                        <span>Any</span>
                      ) : (
                        <>
                          {checkedValue.length > 1
                            ? checkedValue.map((item, idx) => (
                                <span key={idx}> {idx == 0 ? item : "/" + item}</span>
                              ))
                            : checkedValue.map((item , key) => <span key={key}>{item}</span>)}
                        </>
                      )}
                      <span></span>
                    </div>
                  </div>
                  <div className={`col-3 ${style.borderEnd}`}>
                    <div className="text-center">
                      <h6
                        className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                        onClick={handleUnit}
                      >
                        Type of Unit
                      </h6>

                      {checkedUnit.length === 0 ? (
                        <span>Any</span>
                      ) : (
                        <>
                          {checkedUnit.length > 1
                            ? checkedUnit.map((omar, idx) => (
                                <span key={idx}> {idx == 0 ? omar : "/" + omar}</span>
                              ))
                            : checkedUnit.map((omar , key) => <span key={key}>{omar}</span>)}
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`col-3 ${style.borderEnd}`}>
                    <div className="text-center">
                      <h6
                        className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                        onClick={handleProjects}
                      >
                        Projects
                      </h6>
                      {checkedProjects.length === 0 ? (
                        <span>Any</span>
                      ) : (
                        <>
                          {checkedProjects.length > 1
                            ? checkedProjects.map((omar, idx) => (
                                <span key={idx}> {idx == 0 ? omar : "/" + omar}</span>
                              ))
                            : checkedProjects.map((omar , key) => (
                                <span key={key}>{omar}</span>
                              ))}
                        </>
                      )}{" "}
                    </div>
                  </div>
                  <div className={`col-3 ${style.borderEnd}`}>
                    <div className="text-center">
                      <h6
                        className={`colorBlue fs-5 lh-1 ${style.pointer}`}
                        onClick={handleRange}
                      >
                        Price Range
                      </h6>
                      {/* Error: Text content does not match server-rendered HTML. */}
                      <div className={`${style.numberSize}`}>
                        {`${value[0]}  to 
                          ${value[1]}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2  p-0 m-0">
                <div className=" text-end  pt-3 ">
                  <button className={`rounded-3 border-0 ${style.btnSearch} `}>
                    <Image
                      src={searchIcon}
                      alt="searchIcon"
                      className="me-2"
                      width={24}
                    />
                    Search Properties
                  </button>
                  <button
                    className={`rounded-3 border-0 d-none mob-show `}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <BsFacebook className="me-3" /> Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.bgGrey} rounded`}>
            {unit && (
              <>
                <div className="container py-2">
                  <div className="row">
                    <div className="col-md-4">
                      <CheckBox title="Residential" click={getUnitValue} />
                    </div>
                    <div className="col-md-4">
                      <CheckBox title="Offices" click={getUnitValue} />
                    </div>
                    <div className="col-md-4">
                      <CheckBox title="Medical" click={getUnitValue} />
                    </div>
                  </div>
                </div>
              </>
            )}
            {destination && (
              <>
                <div className="container py-2 ">
                  <div className="row">
                    <div className="col-md-4">
                      <CheckBox
                        title=" North Cost "
                        click={getDestinationValue}
                      />
                    </div>
                    <div className="col-md-4">
                      <CheckBox
                        title=" New Cairo "
                        click={getDestinationValue}
                      />
                    </div>
                    <div className="col-md-4">
                      <CheckBox
                        title=" West Cairo "
                        click={getDestinationValue}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {projects && (
              <>
                <div className="container py-3">
                  <div className="row ">
                    <div className="col-md-4">
                      <CheckBox
                        title="District-5 residences"
                        click={getProjectsValue}
                      />
                    </div>
                    <div className="col-md-4">
                      <CheckBox
                        title="district-5 work"
                        click={getProjectsValue}
                      />
                    </div>
                    <div className="col-md-4">
                      <CheckBox title="Aeon" click={getProjectsValue} />
                    </div>
                  </div>
                </div>
              </>
            )}
            {range && (
              <>
                <div className="py-2 pb-3">
                  <Slider
                    value={value}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    valueLabelDisplay="auto"
                    className={`colorBlue ${style.rangeWidth} ms-3`}
                  />
                  <div className="d-flex justify-content-between px-3">
                    <div className="min d-flex flex-row">
                      <input
                        type="text"
                        className={`rounded  border-end-0 ${style.price}`}
                        id="min"
                        value={value[0].toLocaleString()}
                        onChange={getUser}
                      />
                      <div className={` ${style.bord} p-1  rounded-end-0`}>
                        EGP
                      </div>
                    </div>

                    <div className="min d-flex flex-row  me-3">
                      <input
                        type="text"
                        className={`rounded  border-end-0 ${style.price}`}
                        id="max"
                        onChange={getUserMax}
                        value={value[1].toLocaleString()}
                      />
                      <div className={` ${style.bord} p-1  rounded-end-0 `}>
                        EGP
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* End Home Page for Desktop */}

      {/* mop */}
      <div className={`text-center mt-2 `}>
        <button
          className={`rounded-3 border-0 w-75 ${style.searchPropertiesButton} px-5`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <Image
            src={searchIcon}
            alt="searchIcon"
            className={` mb-3 me-2 mt-2`}
            width={20}
          />
          search properties
        </button>
      </div>

      <div
        className={`offcanvas offcanvas-start position-absolute top-0 start-0 d-none overflow-scroll ${style.showSideMenuInMobile} ${style.sideMenuBg}  `}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* Close Button  */}
        {/* <button
            type="button"
            className="btn-close ms-auto mt-2 p-0  "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}

        {/* End Close Button  */}

        <div className=" d-flex w-100  py-5 px-3 flex-column justify-content-start overflow-hidden">
          <div className="side-one  d-flex flex-column   m-0 p-0  ">
            <div className="colorBlue h6 p-0 m-0 fw-bold">Destination</div>
            <ul className="p-0 m-0">
              <SideBarCheckbox
                title="North Coast"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="New Cairo"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="West Cairo"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
            </ul>
          </div>
          <hr className={`${style.margiin}`} />
          <div className={`side-two  d-flex flex-column  `}>
            <div className="colorBlue h6 p-0 m-0 fw-bold">Type of Unit</div>
            <ul className="p-0 m-0">
              <SideBarCheckbox
                title="Residential"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="Offices"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="Medical"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
            </ul>
          </div>
          <hr className={`${style.margiin}`} />
          <div className={`side-two  d-flex flex-column `}>
            <div className="colorBlue h6 p-0 m-0 fw-bold">Projects</div>
            <ul className="p-0 m-0">
              <SideBarCheckbox
                title="Aeon"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="District-5 work"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
              <SideBarCheckbox
                title="District-5 residences"
                sideBarFontSize={style.sideBarFontSize}
                addingMarginNegative={style.addingMarginNegative}
              />
            </ul>
          </div>
          <hr className={`${style.margiin}`} />
          <div className={`side-four `}>
            <h6 className="colorBlue fw-bold">Type Of Unit</h6>

            <Slider
              value={value}
              onChange={handleChange}
              min={min}
              max={max}
              valueLabelDisplay="auto"
              className="colorBlue  w-100 "
            />
            <div className="d-flex flex-row">
              <div
                className={`${style.inputContainer} d-flex align-items-center mx-1`}
              >
                <input
                  type="text"
                  value={value[0]}
                  className={`${style.SideNavbarInput}`}
                  onChange={getUser}
                />
                <div className={`ms-1 ${style.EGP}`}>EGP</div>
              </div>
              <div
                className={`${style.inputContainer} d-flex align-items-center mx-1`}
              >
                <input
                  type="text"
                  value={value[1]}
                  className={`${style.SideNavbarInput}`}
                  onChange={getUserMax}
                />
                <div className={`ms-1 ${style.EGP}`}>EGP</div>
              </div>
            </div>

            {/* <div className="container-fluid w-75 p-0 m-0">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <input
                      type="text"
                      className={`rounded   ${style.price} border-end-0`}
                      id="min"
                      value={value[0]}
                      onChange={getUser}
                    />
                    <div className={` ${style.bord} p-1  rounded-end`}>EGP</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <input
                      type="number"
                      className={`rounded ${style.price} border-end-0`}
                      id="max"
                      onChange={getUserMax}
                      value={value[1]}
                    />
                    <div className={` ${style.bord} p-1 rounded-end`}>EGP</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <button className="btn mt-4 p-3 text-center d-flex justify-content-center w-100 text-white bgBlue">
            <div className="">
              <Image
                src={searchIcon}
                alt="search"
                className="me-2 mb-1"
                width={20}
                height={20}
              />
            </div>
            <div className="fs-6">search properties</div>
          </button>
        </div>
      </div>

      {/* End Mob */}
    </>
  );
};

export default Home;
