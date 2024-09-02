// src/Flower.js
import React from "react";
import { motion } from "framer-motion";

const petalVariants = {
	hidden: { scale: 0, opacity: 0 },
	visible: ({ i, reverse }) => ({
		scale: 1,
		opacity: 1,
		rotate: reverse ? -i * 45 : i * 45,
		transition: {
			delay: i * 0.15,
			duration: 0.8,
			type: "spring",
			stiffness: 50,
			damping: 10,
		},
	}),
};

const BloomingAnimation = ({ reverse, petalColor, centerColor }) => {
	const petals = Array.from({ length: 8 });

	return (
		<motion.div
			className="relative w-64 h-64 max-sm:w-32 max-sm:h-32"
			whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
			whileTap={{ scale: 0.9 }}
		>
			{petals.map((_, i) => (
				<motion.div
					key={i}
					className={`absolute w-16 h-32 ${petalColor} rounded-full`}
					custom={{ i, reverse }}
					variants={petalVariants}
					initial="hidden"
					animate="visible"
					style={{
						transformOrigin: "bottom center",
					}}
				/>
			))}
			<motion.div
				className={`absolute w-16 h-16 ${centerColor} rounded-full top-[6rem]`}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					delay: 1.6,
					duration: 0.6,
					type: "spring",
					stiffness: 50,
					damping: 10,
				}}
				style={{
					transform: "translate(-50%, -50%)",
				}}
			/>
		</motion.div>
	);
};

export default BloomingAnimation;
