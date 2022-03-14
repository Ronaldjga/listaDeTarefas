import react from "react";

export function TitlePrimary(Props) {
    return (
        <>
            <h1
                className={`${Props.className} text-white font-bold text-5xl font-h1Title`}
            >
                {Props.value}
            </h1>
        </>
    )
}