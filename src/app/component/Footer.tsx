import React from "react";

export default function Footer() {
	return (
		<footer className="bg-[#F6F6F6] mt-8 py-8 w-full">
			<div className="flex flex-col justify-between md:flex-row max-w-[900px] gap-28 mx-auto text-center md:text-left">
				<div>
					<h2 className="font-bold uppercase text-xl pb-5">Digital Agency</h2>
					<p className="max-w-[200px] mx-auto  md:mx-0">
						Building digital products, brands & experience
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-20">
					<div>
						<h3 className="font-bold text-xl pb-5">Resources</h3>

						<ul>
							<li className="pb-3">Guides</li>
							<li className="pb-3">Blog</li>
							<li className="pb-3">Customer Stories</li>
							<li className="pb-3">Glossery</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-xl pb-5">Company</h3>

						<ul>
							<li className="pb-3">AboutUs</li>
							<li className="pb-3">Careers</li>
							<li className="pb-3">Partners</li>
							<li className="pb-3">Contact Us</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-xl pb-5">Social Media</h3>

						<ul>
							<li className="pb-3">LinkedIn</li>
							<li className="pb-3">Facebook</li>
							<li className="pb-3">Instagram</li>
							<li className="pb-3">Twitter</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
