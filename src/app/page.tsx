"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import elipsis1 from "../../public/images/asian-woman-4975939-4159825 1.png";
import TrustedCompanies from "./component/TrustedCompanies";

export default function Home() {
	return (
		<main className="flex flex-col justify-center text-[#1F242D]">
			<div className="w-full">
				{/* <Image
					className="absolute"
					src={elipsis1}
					width={500}
					height={500}
					alt="Ellipsis"
				/> */}
				<div className="absolute -z-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="764"
						height="661"
						viewBox="0 0 764 661"
						fill="none">
						<g filter="url(#filter0_f_23_619)">
							<path
								d="M458 15.5C458 203.001 306.001 355 118.5 355C-69.0007 355 -221 203.001 -221 15.5C-221 -172.001 -69.0007 -324 118.5 -324C306.001 -324 458 -172.001 458 15.5Z"
								fill="#8EADD5"
								fill-opacity="0.24"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_23_619"
								x="-527"
								y="-630"
								width="1291"
								height="1291"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="153"
									result="effect1_foregroundBlur_23_619"
								/>
							</filter>
						</defs>
					</svg>
				</div>

				<Navbar />
				<Hero />
				<TrustedCompanies />
			</div>
		</main>
	);
}

// components/ScrollAnimatedComponent.js
