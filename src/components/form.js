import react, {useState} from "react";

export function FormList() {
    const [newItem, setNewItem] = react.useState(``)
    const [toDoList, setToDoList] = react.useState([])

    return (
        <>
            <form
                className="w-[750px] h-[300px] flex justify-center items-center bg-gray-900 p-5 gap-3">
                <input
                    className="w-5/6 h-[40px] p-2"
                    onChange={(e) => {
                        const valor = e.target.value
                        setNewItem(valor)
                        console.log(newItem)
                    }}
                />
                <button
                    className="w-1/6 h-[40px] bg-yellowPrimary font-bold"
                    onClick={(e) => {
                        e.preventDefault

                    }}
                >
                    Enviar
                </button>
            </form>
        </>
    )
}

export function ToDoList(Props) {
    return (
        <ul>
            
        </ul>
    )
}

function ItemList(Props) {
    return (
        <>
            <li>{Props.value}</li>
        </>
    )
}