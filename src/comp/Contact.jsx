import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import BG from "../assets/BG.png";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});
	const [sent, setSent] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [messageError, setMessageError] = useState(false);

	const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

	function isValidEmail(email) {
		return emailRegex.test(email);
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData.name, formData.email, formData.message);

		// Reset error states
		setNameError(false);
		setEmailError(false);
		setMessageError(false);

		let hasError = false;

		// Validate Name
		if (formData.name.trim() === "") {
			setNameError(true);
			hasError = true;
		}

		// Validate Email
		if (formData.email.trim() === "" || !isValidEmail(formData.email)) {
			setEmailError(true);
			hasError = true;
		}

		// Validate Message
		if (formData.message.trim() === "") {
			setMessageError(true);
			hasError = true;
		}

		if (!hasError) {
			setSent(true);
			emailjs
				.send(
					"service_q4xlptr",
					"template_4mtxtt2",
					formData,
					"naZw2kEjf3gPjITXz"
				)
				.then(
					(response) => {
						console.log("SUCCESS!", response.status, response.text);
					},
					(error) => {
						console.log("FAILED...", error);
					}
				);
		}
	};

	return (
		<div
			className={`flex justify-center items-center bg-cover ${
				sent ? "min-h-[60vh]" : "min-h-screen"
			}`}
			style={{ backgroundImage: `url(${BG})` }}
			id="contact"
		>
			{!sent && (
				<form
					onSubmit={handleSubmit}
					className="bg-emerald-900 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-2xl border-black border-2 w-[90%] sm:w-full max-w-xs sm:max-w-lg"
				>
					<h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center text-primary font-pacifico">
						Get in touch!
					</h2>
					<div className="mb-3 sm:mb-4 font-playfair">
						<label className="block text-sm sm:text-lg font-medium mb-1 sm:mb-2 text-secondary">
							Name:
						</label>
						{nameError && (
							<h1 className="text-error">Please enter your name.</h1>
						)}
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="input input-bordered w-full"
							placeholder="Your Name"
						/>
					</div>
					<div className="mb-3 sm:mb-4">
						<label className="block text-sm sm:text-lg font-medium mb-1 sm:mb-2 text-secondary">
							Email:
						</label>
						{emailError && (
							<h1 className="text-error">Please enter a valid email.</h1>
						)}
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="input input-bordered w-full"
							placeholder="Your Email"
						/>
					</div>
					<div className="mb-3 sm:mb-4">
						<label className="block text-sm sm:text-lg font-medium mb-1 sm:mb-2 text-secondary">
							Company:
						</label>
						<input
							type="text"
							name="company"
							value={formData.company}
							onChange={handleChange}
							className="input input-bordered w-full"
							placeholder="Your Company Name"
						/>
					</div>
					<div className="mb-3 sm:mb-4">
						<label className="block text-sm sm:text-lg font-medium mb-1 sm:mb-2 text-secondary">
							Message:
						</label>
						{messageError && (
							<h1 className="text-error">Please enter a message.</h1>
						)}
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							className="textarea textarea-bordered w-full"
							placeholder="Your Message"
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							className="btn btn-primary w-full sm:w-[90%] text-base sm:text-lg btn-lg hover:scale-110 hover:text-white font-playfair"
						>
							Submit
						</button>
					</div>
				</form>
			)}
			{sent && (
				<div className="bg-emerald-900 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-2xl border-black border-2 w-[90%] sm:w-full max-w-xs sm:max-w-lg">
					<h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center text-primary font-pacifico">
						Thank you!
					</h2>
					<p className="text-lg sm:text-xl text-center text-secondary font-playfair">
						Your message has been sent. I will get back to you as soon as
						possible.
					</p>
				</div>
			)}
		</div>
	);
};

export default Contact;
