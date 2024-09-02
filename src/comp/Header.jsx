const Header = ({ header }) => {
	return (
		<h1
			className={`text-[4rem] font-bold text-primary font-pacifico whitespace-pre max-lg:text-center lg:mr-20`}
		>
			{header.split("").map((char, index) => (
				<span
					key={index}
					className={`inline-block animate-wave ${
						index % 2 === 0 ? "delay-[300ms]" : "delay-[600ms]"
					}`}
				>
					{char}
				</span>
			))}
		</h1>
	);
};

export default Header;
