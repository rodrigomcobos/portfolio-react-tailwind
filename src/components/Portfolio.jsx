import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiPostgresql, SiNodedotjs, SiAdobexd, SiRedux, SiSequelize } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import GraphicDesign from "./GraphicDesign";
import Frontend from "./Frontend";
import UxUiDesign from "./UxUiDesign";

export default function Qualification() {
    return (
        <div id="portfolio" className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
            <p className="text-sm flex justify-center items-center font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> PORTFOLIO</p>
            <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-8">FrontEnd Dev Portfolio</h2>
            <Frontend />
            {/* Separation line */}
            <hr className="border-gray-300 my-20" />
            <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-8">Graphic Design Portfolio</h2>
            <GraphicDesign />
            {/* Separation line */}
            <hr className="border-gray-300 my-20" />
            <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-8">UX/UI Design Portfolio</h2>
            <UxUiDesign />
        </div>
    );
}
