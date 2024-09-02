import React from "react";
import { motion } from "framer-motion";

import temp from "./assets/temp.jpg";
import BloomingAnimation from "./comp/BloomingAnimation";

const App = () => {
	return (
		<div className="bg-base-300">
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex">
						<div>
							<BloomingAnimation
								reverse={false}
								petalColor="bg-pink-500"
								centerColor="bg-yellow-500"
							/>
						</div>
						<div className="mt-24">
							<BloomingAnimation
								reverse={true}
								petalColor="bg-purple-500"
								centerColor="bg-orange-500"
							/>
						</div>
					</div>
					<div className="mr-10">
						<h1 className="text-5xl font-bold">Taylor Beers!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
