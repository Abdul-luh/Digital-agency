import Image from "next/image";
import React from "react";
import blackWoman from "../../../public/images/black-woman-4975941-4159827 1.png";
import asianWoman from "../../../public/images/asian-woman-4975941-4159827 1.png";
import westernMan from "../../../public/images/western-man-4975941-4159827 1.png";
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
		<div className="mx-auto max-w-[900px] min-h-screen py-8 flex flex-col md:flex-row-reverse justify-center items-center gap-20 md:gap-16">
			<p className=" text-sm uppercase">TESTIMONIALS</p>
			<h2 className="capitalize font-bold max-w-sm">
				Read What Other have to Say
			</h2>

			<div className="grid grid-cols-3">
				{testimonials.map((testimonial: TestimonialsProps) => (
					<div
						key={testimonial.fullname}
						className="bg-[#F6F6F6] rounded-xl flex justify-center items-center">
						<div className="w-[300px] h-[300px] relative rounded-full">
							<Image
								src={testimonial.image}
								alt={testimonial.fullname}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="p-8">
							<p className="text-sm font-bold">{testimonial.fullname}</p>
							<p className="text-sm">{testimonial.comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
