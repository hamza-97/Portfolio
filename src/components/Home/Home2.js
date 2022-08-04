import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							A Computer Science graduate from Lahore University of Management
							Sciences - Experienced Frontend Engineer with a demonstrated
							history of working in the software industry. Skilled in
							<i>
								{" "}
								<b className="purple">
									{" "}
									React, React Native, Node.js, Vue.js and other JavaScript
									libraries and Frameworks.
								</b>
							</i>
							<br />
							<br />I am fluent in classics like
							<i>
								<b className="purple">Javascript, C++ and C# </b>
							</i>
							<br />
							<br />
							My field of Interest's are building new &nbsp;
							<i>
								<b className="purple">Mobile Applications </b> and also in areas
								related to{" "}
								<b className="purple">Game Development and Game Design</b>
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing games
							with <b className="purple">C#</b> to learn
							<i>
								<b className="purple"> Game Development</b>
							</i>
							<br />
							<br />
							I have experience of failing a
							<i>
								<b className="purple"> startup</b>
							</i> 
							as well and if I could ever go back in time, I will do the startup again because the<i>
								<b className="purple"> learning</b>
							</i>  was immense.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/hamza-97"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/hamza-humayun-b00022168/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
