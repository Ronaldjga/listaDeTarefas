import react from "react";
import { BackHome, FormReport } from "../src/components/formReport";

export default function Report() {
    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5">
                <h1 className="text-white font-h1Title text-center text-5xl font-bold p-2">Reporte</h1>
                <p className="max-w-screen-lg mx-auto text-white">
                    Lista de tarefas online é um site desenvolvido como experimento prático no intuito de reforçar conhecimento de tecnologias de desenvolvimento web. Portanto, se encontrar algum erro, reporte para que haja correção.
                </p>
                <FormReport></FormReport>
                <BackHome/>
            </div>
        </>
    )
}