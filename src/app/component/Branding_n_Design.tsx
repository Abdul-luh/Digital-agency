import Image from "next/image";
import React from "react";
import designerteam from "../../../public/images/main images/designer-team-working-on-creative-design.png";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";

export default function Branding_n_Design() {
	return (
		<div className="mx-auto max-w-[900px] min-h-[calc(100vh-70px)] py-8 flex flex-col md:flex-row-reverse justify-center items-center gap-20 md:gap-16">
			<div className="text-center md:text-left">
				<h1 className="text-3xl md:text-5xl font-bold capitalize ">
					Branding & Design system
				</h1>
				<p className="py-5 text-xl md:text-2xl capitalize my-4 md:my-0 px-10 md:px-0">
					Commonly used in the graphic, print & publishing industris for
					previewing visual layout and mockups{" "}
				</p>
				<div className={"flex justify-center items-center md:justify-start"}>
					<IoIosArrowRoundDown className={"md:hidden"} size={30} />
					<IoIosArrowRoundForward className={"hidden md:block"} size={30} />
				</div>
			</div>

			<div className="">
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
					<Image src={designerteam} alt="hero" width={700} height={700} />
				</motion.div>
			</div>
		</div>
	);
}
