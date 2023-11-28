import Image from "next/image";
import React from "react";
import blackWoman from "../../../public/images/black-woman-4975941-4159827 1.png";
import asianWoman from "../../../public/images/asian-woman-4975939-4159825 1.png";
import westernMan from "../../../public/images/western-man-4975942-4159828 1.png";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface TestimonialsProps {
	fullname: string;
	image: StaticImageData;
	comment: string;
}

export default function Testimonials() {
	const testimonials: TestimonialsProps[] = [
		{
			fullname: "Andrew Rathore",
			image: westernMan,
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
		},
		{
			fullname: "Vera Duncan",
			image: asianWoman,
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
		},
		{
			fullname: "Mark Smith",
			image: blackWoman,
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
		},
	];
	return (
		<div className="mx-auto max-w-[900px] min-h-screen py-8 flex flex-col justify-center items-center gap-5">
			<p className=" text-sm uppercase">TESTIMONIALS</p>
			<h2 className="capitalize text-4xl text-center font-bold max-w-sm">
				Read What Other have to Say
			</h2>

			<div className="grid md:grid-cols-3 gap-5 px-5 my-10">
				{testimonials.map((testimonial: TestimonialsProps) => (
					<div
						key={testimonial.fullname}
						className="bg-[#F6F6F6] rounded-xl flex flex-col justify-center items-center px-3 py-5 text-center">
						{/* <div className="relative rounded-full border">
							<Image
								src={testimonial.image}
								alt={testimonial.fullname}
								className={"rounded-full"}
								layout="fill"
								objectFit="cover"
							/>
						</div> */}
						<Image
							src={testimonial.image}
							alt={testimonial.fullname}
							className={"rounded-full border border-[#EFEEEE]"}
							width={120}
							height={120}
						/>
						<div className="p-8 md:px-0">
							<p className="text-xl font-bold">{testimonial.fullname}</p>
							<p className="text-sm py-5">{testimonial.comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
