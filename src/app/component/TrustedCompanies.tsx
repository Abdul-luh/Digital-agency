import Image from "next/image";
import React from "react";
import spotify from "../../../public/images/company-logo.png";
import slack from "../../../public/images/slack-logo.png";
import dropbox from "../../../public/images/dropbox-logo.png";
import zoom from "../../../public/images/zoom-logo.png";

export default function TrustedCompanies() {
	return (
		<div className="mx-auto my-16 max-w-[900px] flex flex-col justify-center items-center gap-5">
			<p className="font-light">Trusted by 4,000+ companies</p>
			<div className="bg-[#F6F6F6] grid grid-cols-4 gap-20 px-10 py-4 rounded-md items-center">
				<Image src={spotify} width={100} height={100} alt="logo" />
				<Image src={slack} width={100} height={100} alt="logo" />
				<Image src={dropbox} width={100} height={100} alt="logo" />
				<Image src={zoom} width={100} height={100} alt="logo" />
			</div>
		</div>
	);
}
