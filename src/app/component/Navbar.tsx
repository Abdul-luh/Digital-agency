"use clien";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className="mx-auto max-w-[900px] z-10">
			<nav className="flex justify-between items-center py-4 px-5">
				<p className="uppercase text-xl md:text-2xl font-semibold">
					Digital agency
				</p>
				<ul className="hidden justify-center items-center gap-5 md:flex">
					<li className="capitalize">home</li>
					<li className="capitalize">about</li>
					<li className="capitalize">testimonial</li>
					<li className="capitalize">contact</li>
				</ul>
				<div className="block md:hidden" onClick={() => setOpen(!open)}>
					<RiMenu4Fill size={30} />

					<ul
						className={
							open
								? "absolute left-0 top-0 flex flex-col w-screen h-screen justify-center items-center gap-10 bg-[#CFDCED] text-3xl font-semibold transition ease-in-out duration-300"
								: "absolute right-full transition ease-in-out duration-300"
						}>
						<MdClose
							size={30}
							className={"absolute top-5 right-5"}
							// onClick={() => setOpen(!open)}
						/>

						<li className="capitalize cursor-pointer font-bold ease-in duration-200">
							home
						</li>
						<li className="capitalize cursor-pointer font-bold ease-in duration-200">
							about
						</li>
						<li className="capitalize cursor-pointer font-bold ease-in duration-200">
							testimonial
						</li>
						<li className="capitalize cursor-pointer font-bold ease-in duration-200">
							contact
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
