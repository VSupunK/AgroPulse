import React from "react";
import right_arrow from "../components/images/right-arrow.png";
import { useStateContext } from "../context/contextProvider";
import { Link } from "react-router-dom";

function BodyContent() {
  const { setTranslations, translations } = useStateContext();

  return (

    <div
      data-aos="fade-up"
      className="flex flex-col px-9 items-center mt-6 leading-[1.35rem] lg:mt-20"
    >
      <h1 className="text-5xl sm:text-6xl lg:text-[80px] text-center">
        <span className="bg-gradient-to-r from-[#014802] to-[#02ae05] text-transparent bg-clip-text font-bold">
          {translations.Home_p1}
        </span>
      </h1>
      <p className="mt-6 text-md text-center text-[#1d5c1e] max-w-6xl font-medium  sm:text-sm lg:text-lg lg:leading-[1.45rem]  ">
        {translations.Home_p2}
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-[#014802] py-4 px-5 mx-3 rounded-md text-white font-medium  lg:text-xl "
        >
          {translations.Home_b1}
        </a>

    <div className="body-content container items-center" data-aos="fade-up">
      <div className="body-text">
        <h1>{translations.Home_p1}</h1>

        <p>{translations.Home_p2}</p>

        <Link to='/detection'>
        <button className="started btn">
          {translations.Home_b1} <img src={right_arrow} alt=""></img>
        </button>
        </Link>

      </div>
    </div>
  );
}

export default BodyContent;
