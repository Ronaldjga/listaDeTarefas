import react from "react";
import { FormList, ToDoList } from "../src/components/form";
import { Sociais } from "../src/components/sociaisgroup";
import { TitlePrimary } from "../src/components/tags";

export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary ">
            <div className="w-full max-w-screen-xl mx-auto pt-20 pb-10 px-5">
                <TitlePrimary
                    className="justify-start text-center my-5"
                    value="Lista de Tarefas"
                />
                <Sociais/>
                <div>
                    <FormList />
                </div>
            </div>
        </div>
    )
}