import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>Created by Sree with ❤️</p>
			<div className="footer-socials">
				<a href="https://twitter.com/isree1998" className="anchor">
					<FontAwesomeIcon icon={faTwitter} className="icon" />
				</a>
				<a href="https://www.linkedin.com/in/ikkurthis1998/" className="anchor">
					<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
				</a>
				<a href="https://github.com/ikkurthis1998" className="anchor">
					<FontAwesomeIcon icon={faGithub} className="icon" />
				</a>
				<a href="https://whoissree.com" className="anchor dev">
					🧑‍💻
				</a>
			</div>
		</div>
	);
};

export default Footer;
