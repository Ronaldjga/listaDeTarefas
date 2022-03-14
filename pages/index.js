import react from "react";
import { FormList, ToDoList } from "../src/components/form";
import { TitlePrimary } from "../src/components/tags";

export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary flex flex-col justify-center items-center">
            <TitlePrimary
                className="justify-start"
                value="Lista de Tarefas"
            />
            <div>
                <FormList />
            </div>
        </div>
    )
}