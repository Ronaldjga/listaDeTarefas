import react from "react";
import { useRouter } from "next/dist/client/router";

export function FormReport() {
    return (
        <form
            action="https://formspree.io/f/myyoppee"
            method="POST"
            className=" lg:w-2/4 bg-gray-900 flex flex-col gap-5 p-5 border-2 border-yellowPrimary"
        >
            <input
                name="Nome"
                type={"text"}
                className="p-2"
                placeholder="Seu nome"
            />

            <input
                name="E-mail"
                type={"email"}
                className="p-2"
                placeholder="Seu e-mail"
            />
    
            <textarea
                required
                name="Mensagem"
                className="p-2"
                placeholder="Explique sobre o erro."
                rows={`12`}
            >
            </textarea>
            <button
                type="submit"
                className="w-2/5 mx-auto py-4 font-bold hover:brightness-110 bg-yellowPrimary">
                    ENVIAR
            </button>
        </form>
    )
}

export function BackHome() {
    const routes = useRouter()
    return (    
        <button
            onClick={(e) => {
                e.preventDefault
                routes.push(`/`)
            }}
            className="text-darkBluePrimary bg-yellowPrimary py-2 px-5 font-bold fixed top-5 left-5 hover:brightness-125"
        >
            Home
        </button>
    )
}