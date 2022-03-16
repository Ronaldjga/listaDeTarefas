import react from "react";
import { useRouter } from "next/router";

export function ReportButton() {
    const routes = useRouter()
    return (
        <button
            onClick={(e) => {
                e.preventDefault
                routes.push(`/report`)
            }}
            className="text-darkBluePrimary bg-yellowPrimary py-2 px-5 font-bold fixed bottom-5 right-5 hover:border-2 hover:border-white hover:bg-red-600 hover:text-white"
        >
            Reportar Erro
        </button>
    )
}