import React, { useState } from "react";

import "./Page.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
			<div className="w-full flex justify-center items-center max-w-7xl mx-auto">
				<ul className="list-none hidden sm:flex flex-row gap-10 text-3xl text-primary font-pacifico space-x-4 border-b-4 border-primary pb-2">
					<li className="hover:bg-transparent hover:text-secondary hover:scale-110 outlined-doubled">
						<a href="#home">Home</a>
					</li>
					<li className="hover:bg-transparent hover:text-secondary hover:scale-110 outlined-doubled">
						<a href="#about">About</a>
					</li>
					<li className="hover:bg-transparent hover:text-secondary hover:scale-110 outlined-doubled">
						<a href="#resume">Resume</a>
					</li>
					<li className="hover:bg-transparent hover:text-secondary hover:scale-110 outlined-doubled">
						<a href="#references">References</a>
					</li>
					<li className="hover:bg-transparent hover:text-secondary hover:scale-110 outlined-doubled">
						<a href="#contact">Contact</a>
					</li>
				</ul>

				<div className="sm:hidden drawer drawer-end justify-end">
					<input
						id="my-drawer"
						type="checkbox"
						className="drawer-toggle"
						checked={toggle}
						onChange={() => setToggle(!toggle)}
					/>
					<div className="drawer-content">
						<label className="mr-6" htmlFor="my-drawer">
							<div className="btn btn-md btn-primary">
								<svg
									width="20"
									height="12"
									viewBox="0 0 20 12"
									fill="#FFF"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 2L19 2C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.480429 19.7071 0.292892C19.5196 0.105356 19.2652 0 19 0L9 0C8.73478 0 8.48043 0.105356 8.29289 0.292892C8.10536 0.480429 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2ZM19 10L1 10C0.734784 10 0.480429 10.1054 0.292892 10.2929C0.105356 10.4804 0 10.7348 0 11C0 11.2652 0.105356 11.5196 0.292892 11.7071C0.480429 11.8946 0.734784 12 1 12L19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10V10ZM1 7L19 7C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5L1 5C0.734784 5 0.480429 5.10536 0.292892 5.29289C0.105356 5.48043 0 5.73478 0 6C0 6.26522 0.105356 6.51957 0.292892 6.70711C0.480429 6.89464 0.734784 7 1 7Z"
										fill="#FFFFFF"
									/>
								</svg>
							</div>
						</label>
					</div>
					<div className={`drawer-side ${toggle ? "open" : ""}`}>
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
							onClick={() => setToggle(false)}
						></label>
						<ul className="menu bg-zinc-800 min-h-full w-60 p-4 pt-6 text-primary text-2xl outlined font-pacifico hover:text-secondary">
							<li
								className="hover:bg-transparent hover:text-secondary hover:scale-110"
								onClick={() => setToggle(false)}
							>
								<a href="#home">Home</a>
							</li>
							<li
								className="hover:bg-transparent hover:text-secondary hover:scale-110"
								onClick={() => setToggle(false)}
							>
								<a href="#about">About</a>
							</li>
							<li
								className="hover:bg-transparent hover:text-secondary hover:scale-110"
								onClick={() => setToggle(false)}
							>
								<a href="#resume">Resume</a>
							</li>
							<li
								className="hover:bg-transparent hover:text-secondary hover:scale-110"
								onClick={() => setToggle(false)}
							>
								<a href="#references">References</a>
							</li>
							<li
								className="hover:bg-transparent hover:text-secondary hover:scale-110"
								onClick={() => setToggle(false)}
							>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
