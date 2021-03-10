import React, { useEffect, useState } from "react";
import "./MobileProject.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import { Date } from 'prismic-reactjs'
import reactStringReplace from 'react-string-replace';

function MobileProject(props) {
	const [itemColor, setitemColor] = useState("black");
	const [projectDates, setprojectDates] = useState("");

	useEffect(() => {
		// Setting date
		var d = new Date(props.project.timestamp);
		setprojectDates((prevState) => (d.getMonth() + 1) + '.' + d.getFullYear())
		if (props.currentUrl === `/${props.project.title[0].text}`) setitemColor("blue");
		else setitemColor("black");
	}, [props.currentUrl]);
	return (
		<div className="mobile-project-container-wrapper">
			<div className="mobile-project-container">
				<div className="mobile-project-container-headings">
					<div
						className="flex-start mobile-project-heading"
						style={{ color: `${itemColor}` }}
					>
						{props.project.title[0].text}
					</div>
					<div className="f1-5 flex-end mobile-project-date">
						{projectDates}
					</div>
				</div>
				<div className="mobile-project-container-content-left">
					<div className="mobile-project-container-content-left-img">
						<ImageCarousel Size={{ width: "100%", height: "270px" }} projectId={props.project.title[0].text} projectimages={props.project.projectimages} />
					</div>
					<div className="mobile-project-container-content-left-content">
						{
							// Apply edited bold string, hyperlink in prismic editor to the site on mobile view.
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
	);
}

export default MobileProject;

