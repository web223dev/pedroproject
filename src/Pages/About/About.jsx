import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./About.css";
import Prismic from "@prismicio/client";
import AboutLeftNav from "../../Components/AboutLeftNav/AboutLeftNav";
import AboutContent from "../../Components/AboutContent/AboutContent";
import MobileNavItem from "../../Components/MobileNavItem/MobileNavItem"


const apiEndpoint = "https://portfolio-pedro.cdn.prismic.io/api/v2";
const accessToken =
	"MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ";
const client = Prismic.client(apiEndpoint, { accessToken });

function About() {
	const [currentUrl] = useState("/about");

	// Fetching data from prismic
	const [doc, setDocData] = useState(null);
	const [aboutContent, setAboutContent] = useState(null);
	const [contactIGLink, setcontactIGLink] = useState(null);

	useEffect(() => {
		// Fetching projects
		const fetchData = async () => {
			client
				.query(Prismic.Predicates.at("document.type", "projects"),
					{ orderings: '[my.projects.projectdates desc]' })
				.then(function (res) {
					setDocData((prevState) => res.results);
				});
			client
				.query(Prismic.Predicates.at("document.type", "about"))
				.then(function (res) {
					console.log(res.results[0]);
					setAboutContent((prevState) => res.results[0].data)
				});
		};
		// Fetching contact link
		const fetchContactLink = async () => {
			client.query(
				Prismic.Predicates.at('document.type', 'contactlink')
			).then(function (res) {
				setcontactIGLink((prevState) => res.results[0].data)
			});
		}
		fetchContactLink()
		fetchData();
	}, []);



	return (
		<div className="about-container-wrapper">
			<div className="about-container">
				<div className="about-header">
					<Header currentUrl={currentUrl} aboutPageFlag={true} />
				</div>
				<div className="about-left-nav">
					<div className="about-left-nav-items">
						{
							doc && doc.map((project) => {
								return (
									<AboutLeftNav
										currentUrl={currentUrl}
										projectName={"Project1"}
										project={project.data}
										key={project.id}
									/>
								);
							})
						}
					</div>

					<div className="about-left-nav-footer">
						<a className="bg-white" style={{ flex: "1" }} href='mailto:hi@pedrodamasceno.com' target="_blank" rel="noreferrer"><h1 className="f1-5 pointer contactz" style={{ color: "#8c8c8c", fontSize: "16px" }}>Contact me</h1></a>
						<a className="bg-white flex-end" style={{ flex: "1", paddingRight: "2.5rem" }} href='https://www.instagram.com/pedrose/' rel="noreferrer" target="_blank"><h1 className="f1-5 pointer IGz" style={{ color: "#8c8c8c", fontSize: "16px" }}>IG</h1></a>
					</div>

				</div>
				<div className="about-content">
					<div className="aboutContentDiv">
						{
							aboutContent ?
								<AboutContent aboutContent={aboutContent} />
								:
								null
						}
					</div>
				</div>

				<div className="aboutMobileNav">
					{doc ?
						doc.map((project) => {
							return (
								<MobileNavItem project={project.data} key={project.id} />
							)
						})
						:
						null

					}

				</div>

			</div>
		</div>
	);
}

export default About;
