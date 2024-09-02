import Header from "./Header";
import Profile from "../assets/Profile.jpg";

const About = () => {
	return (
		<div className="text-white flex justify-between items-center mt-12 max-lg:flex-col">
			<div className="w-96 max-lg:hidden">
				<img className="mask mask-circle" src={Profile} alt="Profile Pic" />
			</div>
			<div className="flex flex-col lg:items-end items-center mx-12 w-2/3">
				<Header header="About" />
				<img
					className="lg:hidden mask mask-circle ml-2 my-6 w-2/3"
					src={Profile}
					alt="Profile Pic"
				/>
				<p className="py-6 text-3xl max-sm:text-sm max-lg:text-center lg:ml-12 text-md text-end text-white lg:border-r-4 lg:border-primary lg:pr-4 drop-shadow-lg my-3 font-playfair">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					consequuntur sint dolorem, dicta possimus amet aspernatur, accusamus
					labore reprehenderit quis vero corporis, perspiciatis eum. Velit
					nulla, quod iste ut ratione ipsum architecto ullam perferendis
					doloremque. Ab deserunt quisquam minus, rem veritatis accusantium
					voluptatibus. Excepturi voluptatibus velit reiciendis laudantium
					fugiat sapiente.
				</p>
			</div>
		</div>
	);
};

export default About;
