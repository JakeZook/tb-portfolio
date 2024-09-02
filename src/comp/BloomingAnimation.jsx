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
		<div className="relative w-64 h-64">
			<div
				className={`absolute ${
					reverse ? "h-48 left-[4rem]" : "h-[17.5rem] left-[-2.5rem]"
				} w-6 bg-green-500 top-[12rem] transform -translate-x-1`}
				style={{
					transformOrigin: "bottom center",
					transform: reverse ? "rotate(-15deg)" : "rotate(15deg)",
				}}
			></div>
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
				className={`absolute w-16 h-16 ${centerColor} rounded-full`}
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
					top: "38%",
					transform: "translate(-50%, -50%)",
				}}
			/>
		</div>
	);
};

export default BloomingAnimation;
