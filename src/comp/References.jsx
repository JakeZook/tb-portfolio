import { motion } from "framer-motion";

import BG from "../assets/BG.png";
import "./Page.css";

import Header from "./Header";

const References = () => {
	const references = [
		{
			name: "Alex Fairchild",
			company: "Marked By Alex",
			title: "Owner",
			email: "alex@markedbyalex.com",
		},
		{
			name: "Stephanie O'Brien",
			company: "Little Hill Floral Designs",
			title: "Manager",
			email: "sobrien3839@gmail.com",
		},
		{
			name: "Alex Albracht",
			company: "Alex Albracht Floral Design",
			title: "Owner",
			email: "alexalbrachtfloraldesign@gmail.com",
		},
	];

	return (
		<div style={{ backgroundImage: `url(${BG})` }} className="py-8">
			<div className="flex justify-center pb-4">
				<Header header="References" side="middle" />
			</div>
			<div className="flex justify-center max-xl:flex-col items-center">
				{references.map((ref, index) => (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 1.5 }}
						key={index}
						className="flex justify-center pb-8 w-1/3 max-xl:w-full"
					>
						<div className="p-4 w-2/3 text-center max-xl:text-start max-xl:border-l-4 max-xl:border-primary max-xl:pl-4 max-xl:ml-4 xl:border-primary xl:border-b-4 xl:pb-4">
							<h2 className="text-2xl font-bold text-primary outlined">
								{ref.name}
							</h2>
							<h3 className="text-xg font-semibold text-secondary outlined">
								{ref.company}
							</h3>
							<p className="text-lg text-accent outlined">{ref.title}</p>
							<a
								href={`mailto:${ref.email}`}
								className="text-lg text-white outlined-doubled text-center"
							>
								{ref.email}
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default References;
