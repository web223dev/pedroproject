import React, { useEffect, useState } from "react";
import "./Project.css";
import sstatic from "./Assets/sstatic.PNG";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";
import reactStringReplace from 'react-string-replace';

const apiEndpoint = "https://portfolio-pedro.cdn.prismic.io/api/v2";
const accessToken =
	"MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ";
const client = Prismic.client(apiEndpoint, { accessToken });

function Project(props) {
	const [itemColor, setitemColor] = useState("black");
	const [projectDates, setprojectDates] = useState("");

	useEffect(() => {
		// Setting date
		var d = new Date(props.project.timestamp);
		setprojectDates(
			(prevState) => d.getMonth() + 1 + "." + d.getFullYear()
		);
		if (props.currentUrl === `${props.project.title[0].text}`)
			setitemColor("blue");
		else
			setitemColor("black");

		return () => { };
	}, [props.currentUrl]);

	return (
		<div
			className="project-container-wrapper"
			id={props.project.title[0].text}
		>
			<div className="project-container">
				<div className="project-container-headings f1-5">
					<div
						className="f1-5 flex-start project-heading fb"
						style={{ color: `${itemColor}` }}
					>
						{props.project.title[0].text}
					</div>
					<div className="f1-5 flex-end project-date">
						{projectDates}
					</div>
				</div>
				<div className="project-container-content-div">
					<div className="project-container-content-left">
						<div className="project-container-content-left-img">
							<ImageCarousel
								Size={{ width: "550px", height: "440px" }}
								projectId={
									props.project.title[0].text + "image"
								}
								projectimages={props.project.projectimages}
							/>
						</div>
						<div className="project-container-content-left-content">
							{
								// Apply edited bold string, hyperlink in prismic editor to the site.
								props.project.description.map((para, index) => {
									return (
										<p
											style={{ fontWeight: "400" }}
											key={index}
											className={para.type}
										>
											{
												para.spans.length === 0 ?
													para.text :
													para.spans.map(span => {
														const subString = para.text.slice(span.start, span.end);
														if (span.type === 'hyperlink') {
															return reactStringReplace(para.text, subString, (match, i) => (
																<a key={match + i} href={span.data.url}>{subString}</a>
															));
														} else if (span.type === 'strong') {
															return reactStringReplace(para.text, subString, (match, i) => (
																<strong key={match + i}>{subString}</strong>
															));
														}
													})
											}
										</p>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
