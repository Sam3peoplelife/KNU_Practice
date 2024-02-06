import React from "react";
import Pyramid from "../img/pyra.jpeg"
import Poster from "../img/poster.jpeg"
import BigB from "../img/bigb.png"
import first from "../img/1.png"
import second from "../img/2.png"
import third from "../img/3.png"
import fourth from "../img/4.png"
import fifth from "../img/5.png"
import sixth from "../img/6.png"

const Main = () => {
    return (
        <div className="main">
            <div className="twophotos">
            <img src={Poster} alt="" />
            <img src={Pyramid} alt="" />
            </div>
            <div className="redline">
                <p>Welcome to the Official Unveiling of the 32nd Oceania Games – A Triumph of Truth and Unity</p>
                <div className="images">
                <img src={BigB} alt="" />
                <img src={BigB} alt="" />
                <img src={BigB} alt="" />
                <img src={BigB} alt="" />
                <img src={BigB} alt="" />
                </div>
            </div>
            <div class="menu-container">
				<div class="box">
					<div class="box-img">
						<img src={first} alt=""/>
					</div>
					<h2>Education System</h2>
					<h3>Education Primary Education</h3>
                    <h3>Higher Education</h3>
					<h3>Non-formal Education</h3>
				</div>

				<div class="box">
					<div class="box-img">
						<img src={second} alt=""/>
					</div>
					<h2>Youth</h2>
					<h3>Oceania Scouts</h3>
                    <h3>Youth Volunteers for Oceania</h3>
					<h3>Program & Calendar</h3>
					
				</div>

				<div class="box">
					<div class="box-img">
						<img src={third} alt=""/>
					</div>
					<h2>Sport</h2>
					<h3>Sport Action</h3>
                    <h3>Program Calendar</h3>
					<h3>Vision</h3>
					
				</div>

			</div>

			<div class="menu-container">
				<div class="box">
					<div class="box-img">
						<img src={fourth} alt=""/>
					</div>
					<h2>Laws & Regulations</h2>
					<h3>Royal Decree</h3>
                    <h3>Sub Decree</h3>
					<h3>Instructions</h3>
					
					
				</div>

				<div class="box">
					<div class="box-img">
						<img src={fifth} alt=""/>
					</div>
					<h2>Polices & Stategies</h2>
					<h3>Competency Standards</h3>
                    <h3>Policy on Higher Education</h3>
					<h3>National Policy</h3>
					
					
				</div>

				<div class="box">
					<div class="box-img">
						<img src={sixth} alt=""/>
					</div>
					<h2>Statistics & Indicators</h2>
					<h3>Private Education Statistics</h3>
                    <h3>Public Education Statistics</h3>
					<h3>Education Indicators</h3>			
				</div>

			</div>
        </div>
)};

export default Main