import React from "react";
import LangageSelector from "./LangageSelector";
import "../Style/style.css"

function Header({lang, changeLang}) {
    return (
        <div id="header">
            <g xmlns="http://www.w3.org/2000/svg" stroke="null" id="svg_10">
   <circle stroke="null" transform="matrix(0.19335385911828232,0,0,0.19335385911828232,-2005.5116750017914,-1482.8012332622748) " id="svg_5" r="348.00293" cy="8191.205715" cx="10817.015691" clip-rule="evenodd" fill-rule="evenodd"/>
   <g stroke="null" transform="matrix(0.19335385911828232,0,0,0.19335385911828232,-2005.5116750017914,-1482.8012332622748) " id="svg_6">
    <path stroke="null" id="svg_7" d="m10943.550685,8217.109803c-11.995,58.904 -64.089,103.231 -126.535,103.231c-62.447,0 -114.54,-44.327 -126.535,-103.231l-179.474,0c13.155,157.485 145.125,281.202 306.008,281.202c160.884,0 292.855,-123.717 306.011,-281.202l-179.475,0z" fill="#FFFFFF" clip-rule="evenodd" fill-rule="evenodd"/>
    <path stroke="null" id="svg_8" d="m10817.015685,8100.843803c-49.904,0 -90.36,40.456 -90.36,90.362c0,49.904 40.456,90.361 90.36,90.361c49.906,0 90.361,-40.457 90.361,-90.361c0,-49.906 -40.455,-90.362 -90.361,-90.362zm0.001,134.941c-24.621,0 -44.579,-19.958 -44.579,-44.578c0,-24.621 19.958,-44.579 44.579,-44.579c24.62,0 44.578,19.958 44.578,44.579c0,24.62 -19.958,44.578 -44.578,44.578z" fill="#FFFFFF" clip-rule="evenodd" fill-rule="evenodd"/>
   </g>
   <path stroke="null" id="svg_9" d="m86.000053,76.031252c12.074175,0 22.146751,8.570797 24.466031,19.960306l34.702184,0c-2.54357,-30.450333 -28.060866,-54.371685 -59.168408,-54.371685c-31.107156,0 -56.624064,23.921353 -59.167828,54.371685l34.701991,0c2.31928,-11.389509 12.391469,-19.960306 24.466031,-19.960306z" fill="#ED1C24" clip-rule="evenodd" fill-rule="evenodd"/>
  </g>
            <div></div>
            <LangageSelector changeLang={changeLang} />
        </div>
    );
}

export default Header;
