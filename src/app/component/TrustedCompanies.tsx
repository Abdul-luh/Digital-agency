import Image from "next/image";
import React from "react";
import spotify from "../../../public/images/company-logo.png";
import slack from "../../../public/images/slack-logo.png";
import dropbox from "../../../public/images/dropbox-logo.png";
import zoom from "../../../public/images/zoom-logo.png";

export default function TrustedCompanies() {
	return (
		<div className="mx-auto my-8 max-w-[900px] flex flex-col justify-center items-center gap-16">
			<p className="font-thin">Trusted by 4,000+ companies</p>
			<div className="bg-[#F6F6F6] grid grid-cols-4">
				<Image src={spotify} width={100} height={100} alt="logo" />
				<Image src={spotify} width={100} height={100} alt="logo" />
				<Image src={spotify} width={100} height={100} alt="logo" />
				<Image src={spotify} width={100} height={100} alt="logo" />
			</div>
		</div>
	);
}
