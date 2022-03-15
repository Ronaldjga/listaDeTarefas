import react from "react";
import Image from "next/dist/client/image";
import instagramIcon from "./img/instagramIcon.svg"
import twitterIcon from './img/twitterIcon.svg'
import linkedInIcon from './img/linkedinIcon.svg'

export function Sociaisgroup() {
    return (
        <div
            className="flex justify-center items-center"
        >
            <SociaisIcon
                src={instagramIcon}
                alt="instagram"
                href="https://www.instagram.com/ronald_jga/"
            />
            <SociaisIcon
                src={twitterIcon}
                alt="twitter"
                href=""
            />
            <SociaisIcon
                src={linkedInIcon}
                alt="linkedIn"
                href=""
            />
        </div>
    )
}

function SociaisIcon(props) {
    return (
        <button
            className="w-[50px] h-[50px] relative"
        >
            <a
                className="relatives"
                href={`${props.href}`}>
                <Image
                    alt={props.alt}
                    layout="fill"
                    src={props.src}
                />
            </a>
        </button>
    )
}