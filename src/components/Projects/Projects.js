import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kalpay from "../../Assets/Projects/kalpay.png";
import soop from "../../Assets/Projects/soop.png";
import moaash from "../../Assets/Projects/moaash.png";
import rinkrats from "../../Assets/Projects/rinkrats.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={moaash}
							isBlog={false}
							title="Moaash (Social Commerce)"
							description="A social commerce platform, its website, and app, along with the admin dashboard in order to manage resellers and sellers spread all across the country."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={rinkrats}
							isBlog={false}
							title="Rink Rats"
							description="An app for users to take part in ice hockey tournaments and for the admins to manage the entire system of ice rinks (booking, management) online."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={soop}
							isBlog={false}
							title="SOOP (School On Our Phone)"
							description="A mobile application for Parents and students who want to see the educational records such as attendance, exams, projects, and assignments, attendance data, and the students should be able to take online exams."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={kalpay}
							isBlog={false}
							title="KalPay"
							description="A mobile application for a BNPL (Buy now, Pay later) startup where user can upload their documents and visit their favourite brands to shop"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
