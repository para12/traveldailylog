import React from "react";
import "./output.css";
import { text } from "./text";
import { ArrowLeft, ArrowRight } from "./Icons";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

function App() {
  // const cl = Cloudinary.new();
  // const url = cl.image("leeleelee");
  // console.log(url);
  // const result = cl.url().type("list").generate("hehe.json");
  // console.log(result);

  return (
    <div className="App ">
      <div className="w-screen flex flex-col content-center">
        <div className="fixed w-screen mt-5 pl-10 bg-transparent text-3xl hover:font-medium z-20 text-gray-800 ">
          RECORD
        </div>
        <div className="w-screen">
          {/* <Image cloudName="dnkvykbeq/dailytravellog" publicId="leelee" /> */}
          <img
            // crossOrigin="anonymous"
            src="https://cors-anywhere.herokuapp.com/http://res.cloudinary.com/dnkvykbeq/image/upload/v1601643961/leeleelee.jpg"
          />
          <img
            crossorigin=""
            src="http://res.cloudinary.com/dnkvykbeq/image/upload/v1601643778/leeleelee.jpg"
          />
        </div>
        <div className="w-screen bg-gray-100">
          <div className="w-1/2 mx-auto my-20 flex flex-col content-center">
            <div className="ml-4 text-lg">
              <span className="mr-3 hover:font-bold">#볼리비아</span>
              <span className="mr-3 hover:font-bold">#호수</span>
              <span className="mr-3">2016. 1. 1.</span>
            </div>
            <div id="ani" className="ml-4 mt-8 text-xl">
              사막 속 호수
            </div>
            <div className="mt-8 text-base leading-loose tracking-wider text-left antialiased text-opacity-75">
              {text}
            </div>
            <div className="mt-10 text-base flex justify-between">
              <span className="flex group">
                <span className="transition duration-500 ease-in-out transform group-hover:-translate-x-5">
                  <ArrowLeft />
                </span>
                <span className="ml-4 group-hover:font-bold">이전</span>
              </span>
              <div className="flex group">
                <div className="mr-4 group-hover:font-bold">다음</div>
                <div className="transition duration-500 ease-in-out transform group-hover:translate-x-5">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
