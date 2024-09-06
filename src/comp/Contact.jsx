import React, { useState } from "react";

import BG from "../assets/BG.png";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here (e.g., send data to an API)
		console.log(formData);
	};

	return (
		<div
			className="flex justify-center items-center min-h-screen"
			style={{ backgroundImage: `url(${BG})` }}
		>
			<form
				onSubmit={handleSubmit}
				className="bg-emerald-900 p-6 rounded-xl shadow-2xl border-black border-2 w-full max-w-lg"
			>
				<h2 className="text-5xl font-bold mb-6 text-center text-primary font-pacifico">
					Get in touch!
				</h2>
				<div className="mb-4 font-playfair">
					<label className="block text-lg font-medium mb-2 text-secondary">
						Name:
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="input input-bordered w-full"
						placeholder="Your Name"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-lg font-medium mb-2 text-secondary">
						Email:
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="input input-bordered w-full"
						placeholder="Your Email"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-lg font-medium mb-2 text-secondary">
						Company:
					</label>
					<input
						type="text"
						name="company"
						value={formData.company}
						onChange={handleChange}
						className="input input-bordered w-full"
						placeholder="Your Company Name"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-lg font-medium mb-2 text-secondary">
						Message:
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered w-full"
						placeholder="Your Message"
						required
					/>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="btn btn-primary w-[90%] text-lg btn-lg hover:scale-110 hover:text-white font-playfair"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
