import Image from "next/image";
import React from "react";
import businessPoepleIdeation from "../../../public/images/main images/business-people-discussing-business-idea.png";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className="mx-auto max-w-[900px] min-h-[calc(100vh-70px)] py-8 px-3 flex flex-col-reverse md:flex-row justify-center items-center gap-16">
			<div className="text-center md:text-left">
				<h1 className="text-3xl md:text-5xl font-bold capitalize">
					Building digital products, brands & experience
				</h1>
				<p className="py-5 text-base md:text-2xl capitalize px-10 md:px-0">
					Digital Agency is your online team mangement tool that easy and prompt
				</p>
				<button className="bg-[#8EADD5] text-white font-semibold uppercase py-2 px-4 rounded-md">
					{" "}
					contact us
				</button>
			</div>

			<div className="">
				<motion.div
					initial={{ opacity: 0, scale: 0 }} // Initial animation state
					animate={{ opacity: 1, scale: 1 }} // Animation to apply when rendered
					transition={{ duration: 0.3 }} // Animation duration
				>
					{/* Your content here */}
					<Image
						src={businessPoepleIdeation}
						alt="hero"
						width={700}
						height={700}
					/>
				</motion.div>
			</div>
		</div>
	);
}
