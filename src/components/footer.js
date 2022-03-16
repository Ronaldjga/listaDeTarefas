import react from "react";
import Image from 'next/image'

import instagramIcon from './img/instagramIcon.svg'
import twitterIcon from './img/twitterIcon.svg'
import linkedinIcon from './img/linkedinIcon.svg'

export function Footer() {
    return (
        <footer
            className="w-full h-[350px] bg-gray-900 p-5"
        >
            <h2 className="text-4xl font-h2Title font-bold text-center text-white">
                Lista de Tarefas
            </h2>
            <SociaisIcon
                src={instagramIcon}
            />
        </footer>
    )
}

function SociaisIcon(props) {
    return (
        <button
        className="w-[50px] h-[50px] relative"
        >
            <a href={`${props.href}`}>
                <Image
                    className="bg-yellowPrimary"
                    layout="fill"
                    src={props.src}
                    alt={props.alt}
                />
            </a>
        </button>
    )
}