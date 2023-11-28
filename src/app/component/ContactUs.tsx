import Image from "next/image";
import React from "react";
import customerSupport from "../../../public/images/main images/customer-support.png";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";

export default function ContactUs() {
	return (
		<div className="mx-5 md:mx-auto max-w-[900px] min-h-[calc(100vh-180px)] bg-[#F6F6F6] px-3 py-3 rounded-xl flex flex-col md:flex-row-reverse justify-center items-center my-16 gap-20 md:gap-16">
			<div className="text-center md:text-left">
				<h1 className="text-4xl md:text-5xl font-bold capitalize ">
					Be a part of the next big thing
				</h1>
				<p className="py-5 text-xl md:text-2xl capitalize px-10 md:px-0">
					We work with Brans, Startups, to SMEs. Colaborate for more impact and
					growth{" "}
				</p>
				<button className="bg-[#8EADD5] text-white font-semibold uppercase py-2 px-4 rounded-md">
					{" "}
					contact us
				</button>
			</div>

			<div className="hidden md:block">
				<motion.div
					initial={{ opacity: 0, scale: 0 }} // Initial animation state
					// animate={{ opacity: 1, scale: 1 }} // Animation to apply when rendered
					transition={{
						duration: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
						scale: {
							type: "spring",
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					}} // Animation duration
					whileInView={{ opacity: 1, scale: 1 }}>
					{/* Your content here */}
					<Image src={customerSupport} alt="hero" width={700} height={700} />
				</motion.div>
			</div>
		</div>
	);
}
