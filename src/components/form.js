import react, { useState, useEffect } from "react";
import Image from "next/image";

//! ///////// Img
import editIcon from "./img/editIcon.svg"
import trashIcon from "./img/trashIcon.svg"



export function FormList() {
    const [newItem, setNewItem] = react.useState(``)
    const [toDoList, setToDoList] = react.useState([])
    const [indexTask, setIndexTask] = react.useState(-1)
    const buttonEffect = newItem.length === 0 ? 'brightness-75' : 'brightness-105'
    




    react.useEffect(() => {
        const startList = JSON.parse(localStorage.getItem('tasks'))
        if (!startList) return
        setToDoList(startList)

    }, [])

    react.useEffect(() => {
        const saveList = localStorage.setItem('tasks', JSON.stringify(toDoList));
    }, [toDoList])

    return (
        <div
            className="">
            <h2 className="text-white p-5 text-4xl text-center">
                {indexTask === -1 ? '' : 'Editando'}
            </h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()

                }}
                className="w-full lg:w-5/6 h-[300px] mx-auto flex sm:flex-row flex-col justify-center items-center bg-gray-900 p-5 gap-3 border-2">
                <input
                    className="w-full sm:w-5/6 h-[40px] p-2"
                    value={newItem}
                    onChange={(e) => {
                        const valor = e.target.value
                        setNewItem(valor)
                    }}
                />
                <button
                    type="submit"
                    className={`${buttonEffect} w-full sm:w-1/6 h-[40px] bg-yellowPrimary font-bold hover:brightness-110`}
                    onClick={() => {
                        newItem.trim()
                        if (toDoList.indexOf(newItem) !== -1) return

                        if (indexTask === -1) {
                            setToDoList([...toDoList, newItem])
                            setNewItem('')
                        } else {
                            const newList = [...toDoList];
                            newList[indexTask] = newItem

                            setToDoList(newList)
                            setIndexTask(-1)
                            setNewItem('')
                        }

                    }}
                >
                    Enviar
                </button>
                <button
                className={`${indexTask === -1 ? 'hidden' : 'block'} mx-auto w-full sm:w-1/6 h-[40px] bg-yellowPrimary text-darkBluePrimary font-bold hover:brightness-110`}
                onClick={(e) => {
                    e.preventDefault
                    setIndexTask(-1)
                }}>
                Cancelar
            </button>
            </form>

            <ToDoList
                newItem={newItem}
                setNewItem={setNewItem}
                toDoList={toDoList}
                setToDoList={setToDoList}
                indexTask={indexTask}
                setIndexTask={setIndexTask}
            />
        </div>
    )
}


function ToDoList(props) {
    return (
        <ul className="flex flex-col gap-2 py-5">
            {props.toDoList.map((newItem, index) => {
                return (
                    <li
                        className="sm:h-[75px] gap-5 sm:gap-1 flex justify-between sm:items-center p-4 flex-col
                        sm:flex-row
                        text-white hover:text-black
                        bg-bluishGray hover:bg-yellowPrimary"
                        key={newItem}>
                        {newItem}
                        <span className="flex gap-4 self-end sm:self-center">
                            <EditTask
                                index={index}
                                indexTask={props.indexTask}
                                setIndexTask={props.setIndexTask}
                                newItem={props.newItem}
                                setNewItem={props.setNewItem}
                                toDoList={props.toDoList}
                                setToDoList={props.setToDoList}
                            />
                            <DeleteTask
                                index={index}
                                toDoList={props.toDoList}
                                setToDoList={props.setToDoList}
                            />
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

function EditTask(props) {
    return (
        <button
            className="w-[50px] h-[50px] relative rounded-full p-2 hover:bg-blue-400"
            onClick={(e) => {
                e.preventDefault
                const newList = [...props.toDoList]

                props.setIndexTask(props.index)
                props.setNewItem(newList[props.index])
                console.log("Edit", "index", props.index, "indexTask", props.indexTask)
            }}
        >
            <Image
                layout="responsive"
                src={editIcon}
            />
        </button>
    )
}




function DeleteTask(props) {
    return (
        <button
            className="w-[50px] h-[50px] relative rounded-full p-2 hover:bg-red-500"
            onClick={(e) => {
                e.preventDefault
                const newList = [...props.toDoList]
                newList.splice(props.index, 1)
                props.setToDoList(newList)
            }}
        >
            <Image
                layout="responsive"
                src={trashIcon}
            />
        </button>
    )
}