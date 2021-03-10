import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./NavItem.css";
import { Link } from 'react-scroll'

// General scroll to element function
function NavItem(props) {
	const [itemColor, setitemColor] = useState("black");
	const [navDes, setnavDes] = useState("");
	const [projectDates, setprojectDates] = useState("");
	const [activeState, setactiveState] = useState(false);

	useEffect(() => {
		// Setting date
		var d = new Date(props.project.timestamp);
		setprojectDates(() => (d.getMonth() + 1) + '.' + d.getFullYear())

		var localnavdes = ""
		for (let i = 0; i < 120; i++) {
			if (props.project.navbardescription[0].text[i] === undefined)
				break;

			localnavdes += props.project.navbardescription[0].text[i]
		}
		setnavDes(() => `${localnavdes}...`)
		return () => { };
	}, [props.currentUrl]);
	const handleSetActive = () => {
		setactiveState(true)
		setitemColor("blue");
	}
	const handleSetInactive = () => {
		setactiveState(false)
		setitemColor("black");
	}
	return (
		<Link to={`${props.project.title[0].text}`} smooth={true} offset={-90} hashSpy={true} spy={true} activeClass="active"
			onSetActive={handleSetActive}
			onSetInactive={handleSetInactive}>
			<div
				className="nav-item-container-wrapper flex-col pointer"
				style={{ color: `${itemColor}` }}
			>
				<h2 className="f1-5 item-heading">
					<span style={{ flex: "4" }}>{props.project.title[0].text}</span>
					<span className="item-date flex-end" style={{ flex: "1" }}>{projectDates}</span>
				</h2>
				<p className="item-para">
					{navDes}
				</p>
			</div>
		</Link>
	);
}

export default withRouter(NavItem);
