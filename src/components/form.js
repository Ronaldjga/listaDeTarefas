import react, { useState } from "react";

export function FormList() {
    const [newItem, setNewItem] = react.useState(``)
    const [toDoList, setToDoList] = react.useState([])

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className="w-[750px] h-[300px] flex justify-center items-center bg-gray-900 p-5 gap-3">
                <input
                    className="w-5/6 h-[40px] p-2"
                    onChange={(e) => {
                        const valor = e.target.value
                        setNewItem(valor)
                    }}
                />
                <button
                    type="submit"
                    className="w-1/6 h-[40px] bg-yellowPrimary font-bold"
                    onClick={() => {
                        newItem.trim()
                        setToDoList([...toDoList, newItem])
                        console.log()
                    }}
                >
                    Enviar
                </button>
            </form>

            <ul className="text-white flex flex-col gap-2">
                
            </ul>
        </>
    )
}