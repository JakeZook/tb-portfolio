import React from "react";
import { motion } from "framer-motion";

import {
	Hero,
	Carousel,
	About,
	Resume,
	References,
	Contact,
	Nav,
} from "./comp";
import { ImageSet1, ImageSet2, ImageSet3, ImageSet4 } from "./Utils/Index";

const App = () => {
	return (
		<>
			<Nav />
			<div className="bg-emerald-900">
				<Hero />
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-center mb-10 mt-4"
				>
					<Carousel images={ImageSet1} header="Ceremony" />
				</motion.div>
				<div>
					<About />
				</div>
				<motion.div
					className="flex justify-center mb-10 mt-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<Carousel images={ImageSet2} header="Editorial" />
				</motion.div>
				<Resume />
				<motion.div
					className="flex justify-center mb-10 mt-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<Carousel images={ImageSet3} header="Centerpieces" />
				</motion.div>
				<References />
				<motion.div
					className="flex justify-center mb-10 mt-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
				>
					<Carousel images={ImageSet4} header="Bouquets" />
				</motion.div>
				<Contact />
			</div>
		</>
	);
};

export default App;
