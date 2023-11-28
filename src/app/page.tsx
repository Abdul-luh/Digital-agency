"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import elipsis1 from "../../public/images/asian-woman-4975939-4159825 1.png";
import TrustedCompanies from "./component/TrustedCompanies";
import Branding_n_Design from "./component/Branding_n_Design";
import Custom_n_PluginDevelopment from "./component/Custom_n_PluginDevelopment";

export default function Home() {
	return (
		<main className="flex flex-col justify-center text-[#1F242D]">
			<div className="w-full">
				{/* mobile gradient */}
				<div className="absolute max-w-screen md:hidden -z-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="428"
						height="548"
						viewBox="0 0 428 548"
						fill="none">
						<g filter="url(#filter0_f_79_20)">
							<path
								d="M248 17.5C248 141.488 147.488 242 23.5 242C-100.488 242 -201 141.488 -201 17.5C-201 -106.488 -100.488 -207 23.5 -207C147.488 -207 248 -106.488 248 17.5Z"
								fill="#8EADD5"
								fill-opacity="0.24"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_79_20"
								x="-507"
								y="-513"
								width="1061"
								height="1061"
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
									result="effect1_foregroundBlur_79_20"
								/>
							</filter>
						</defs>
					</svg>
				</div>

				{/* desktop gradient */}
				<div className="absolute max-w-screen hidden md:block -z-40">
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
			<div className="w-full relative">
				<Branding_n_Design />

				{/* Mobile Gradient  */}
				<div className="absolute md:hidden top-0 right-0 max-w-screen -z-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="428"
						height="1061"
						viewBox="0 0 428 1061"
						fill="none">
						<g filter="url(#filter0_f_79_21)">
							<path
								d="M620 530.5C620 654.488 519.488 755 395.5 755C271.512 755 171 654.488 171 530.5C171 406.512 271.512 306 395.5 306C519.488 306 620 406.512 620 530.5Z"
								fill="#8EADD5"
								fill-opacity="0.24"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_79_21"
								x="-135"
								y="0"
								width="1061"
								height="1061"
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
									result="effect1_foregroundBlur_79_21"
								/>
							</filter>
						</defs>
					</svg>
				</div>

				{/* Desktop Gradient  */}
				<div className="absolute hidden md:block top-0 right-0 max-w-screen -z-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="547"
						height="1291"
						viewBox="0 0 547 1291"
						fill="none">
						<g filter="url(#filter0_f_55_12)">
							<path
								d="M985 645.5C985 833.001 833.001 985 645.5 985C457.999 985 306 833.001 306 645.5C306 457.999 457.999 306 645.5 306C833.001 306 985 457.999 985 645.5Z"
								fill="#8EADD5"
								fill-opacity="0.3"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_55_12"
								x="0"
								y="0"
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
									result="effect1_foregroundBlur_55_12"
								/>
							</filter>
						</defs>
					</svg>
				</div>
				<Custom_n_PluginDevelopment />
			</div>
		</main>
	);
}

// components/ScrollAnimatedComponent.js
