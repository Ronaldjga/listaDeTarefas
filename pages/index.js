import react from "react";
import { Footer } from "../src/components/footer";
import { FormList, ToDoList } from "../src/components/form";
import { ReportButton } from "../src/components/reportButton";
import { TitlePrimary } from "../src/components/tags";

export default function HomePage() {
    return (
        <div className="bg-darkBluePrimary ">
            <div className="w-full max-w-screen-xl mx-auto pt-20 pb-10 px-5">
                <TitlePrimary
                    className="justify-start text-center my-5"
                    value="Lista de Tarefas"
                />
                <Sociaisgroup/>
                <div>
                    <FormList />
                </div>
                <ReportButton/>
            </div>
            <Footer/>
        </div>
    )
}