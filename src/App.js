import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import yes from "./yes1.gif";
import no from "./no2.gif";

const App = () => {
	const [game, setGame] = useState(false);
	const [privacyMessage, setPrivacyMessage] = useState(true);
	const [luckyMessage, setLuckyMessage] = useState("");
	const [unluckyMessage, setUnluckyMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const [date, setDate] = useState("");
	const [luckyNumber, setLuckyNumber] = useState("");

	const checkLuck = () => {
		const dateArray = date
			.split("-")
			.join("")
			.split("")
			.map((stg) => parseInt(stg));
		const dateSum = dateArray.reduce((acc, curr) => acc + curr, 0);

		if (date === "") {
			setErrorMessage("Please enter a date");
			setLuckyMessage("");
			setUnluckyMessage("");
			return;
		}

		if (luckyNumber <= 0) {
			setLuckyMessage("");
			setUnluckyMessage("");
			setErrorMessage("Please enter a number greater than 0");
			return;
		}

		if (dateSum % luckyNumber === 0) {
			setLuckyMessage("You are lucky!");
			setUnluckyMessage("");
			setErrorMessage("");
		} else {
			setUnluckyMessage("Oops, sorry you are not lucky");
			setLuckyMessage("");
			setErrorMessage("");
		}
	};

	return (
		<>
			<div className="app-container">
				{!game && (
					<div className="intro-container">
						<h1 className="heading">Is your Birthday lucky?</h1>
						<button className="find-out-button" onClick={() => setGame(true)}>
							Find Out!
						</button>
					</div>
				)}
				{game && (
					<div className="game-container">
						{privacyMessage && (
							<div className="privacy-message-container">
								<p className="privacy-message">
									Privacy Policy: No data is saved!
								</p>
								<FontAwesomeIcon
									icon={faTimesCircle}
									className="privacy-message-close-icon"
									onClick={() => setPrivacyMessage(false)}
								/>
							</div>
						)}
						<div className="input-container">
							<label htmlFor="date" className="input-subheading">
								Birthday:
							</label>
							<input
								className="input"
								type="date"
								id="date"
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>

						<div className="input-container">
							<label htmlFor="lucky-number" className="input-subheading">
								Lucky Number:
							</label>
							<input
								className="input"
								type="number"
								id="lucky-number"
								onChange={(e) => setLuckyNumber(parseInt(e.target.value))}
							/>
						</div>
						<button className="check-button" onClick={() => checkLuck()}>
							Check
						</button>
						{luckyMessage && (
							<>
								<p className="lucky-message">{luckyMessage}</p>
								<img className="image" src={yes} />
							</>
						)}
						{unluckyMessage && (
							<>
								<p className="unlucky-message">{unluckyMessage}</p>
								<img className="image" src={no} />
							</>
						)}
						{errorMessage && <p className="error">{errorMessage}</p>}
					</div>
				)}
				<Footer />
			</div>
		</>
	);
};

export default App;
