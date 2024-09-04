import { motion } from "framer-motion";
import Header from "./Header";
import BG from "../assets/BG.png";

const Resume = () => {
	return (
		<div style={{ backgroundImage: `url(${BG})` }} className="py-8">
			<div className="flex justify-center pb-8">
				<Header header="Resume" side="middle" />
			</div>
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-md:hidden">
				<motion.li
					initial={{ opacity: 1, position: "relative", right: "100vh" }}
					whileInView={{ right: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2019 - Present</time>
						<div className="text-lg font-black text-primary">
							Freelance Floral Designer
						</div>
						<div className="text-lg font-black text-white">
							Denver, Colorado
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
				<motion.li
					initial={{ opacity: 1, position: "relative", left: "100vh" }}
					whileInView={{ left: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<hr className="bg-primary" />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end  text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2017 - 2021</time>
						<div className="text-lg font-black text-primary">Lead Designer</div>
						<div className="text-lg font-black text-secondary">
							Little Hill Floral Designs
						</div>
						<div className="text-lg font-black text-white">
							Huntington Beach, California
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
				<motion.li
					initial={{ opacity: 1, position: "relative", right: "100vh" }}
					whileInView={{ right: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<hr className="bg-primary" />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2016 - 2018</time>
						<div className="text-lg font-black text-primary">
							Floral Designer
						</div>
						<div className="text-lg font-black text-secondary">
							Rolling Hills Flower Market
						</div>
						<div className="text-lg font-black text-white">
							Manhattan Beach, California
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
			</ul>
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:hidden">
				<motion.li
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2019 - Present</time>
						<div className="text-lg font-black text-primary">
							Freelance Floral Designer
						</div>
						<div className="text-lg font-black text-white">
							Denver, Colorado
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
				<motion.li
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<hr className="bg-primary" />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end  text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2017 - 2021</time>
						<div className="text-lg font-black text-primary">Lead Designer</div>
						<div className="text-lg font-black text-secondary">
							Little Hill Floral Designs
						</div>
						<div className="text-lg font-black text-white">
							Huntington Beach, California
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
				<motion.li
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<hr className="bg-primary" />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end text-white bg-black bg-opacity-45 p-4 font-playfair max-md:w-[90%]">
						<time className="italic text-accent">2016 - 2018</time>
						<div className="text-lg font-black text-primary">
							Floral Designer
						</div>
						<div className="text-lg font-black text-secondary">
							Rolling Hills Flower Market
						</div>
						<div className="text-lg font-black text-white">
							Manhattan Beach, California
						</div>
					</div>
					<hr className="bg-primary" />
				</motion.li>
			</ul>
		</div>
	);
};

export default Resume;
