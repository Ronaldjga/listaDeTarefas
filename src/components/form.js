import react, { useState, useEffect } from "react";

export function FormList() {
    const [newItem, setNewItem] = react.useState(``)
    const [toDoList, setToDoList] = react.useState([])
    const [indexTask, setIndexTask] = react.useState(-1)
    


    react.useEffect(() => {
        const startList = JSON.parse(localStorage.getItem('tasks'))
        setToDoList(startList)
        
    }, [])

    react.useEffect(() => {
        const saveList = localStorage.setItem('tasks', JSON.stringify(toDoList));
    }, [toDoList])

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    
                }}
                className="w-[750px] h-[300px] flex justify-center items-center bg-gray-900 p-5 gap-3">
                <input
                    className="w-5/6 h-[40px] p-2"
                    value={newItem}
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
            </form>

            <ToDoList
                newItem={newItem}
                setNewItem={setNewItem}
                toDoList={toDoList}
                setToDoList={setToDoList}
                indexTask={indexTask}
                setIndexTask={setIndexTask}
            />
        </>
    )
}


function ToDoList(props) {
    return (
        <ul className="text-white flex flex-col gap-2 bg-yellowPrimary p-2">
            {props.toDoList.map((newItem, index) => {
                return (
                    <li
                        className="flex justify-between bg-gray-900 p-4"
                        key={newItem}>
                        {newItem}
                        <span className="flex gap-4">
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
            onClick={(e) => {
                e.preventDefault
                const newList = [...props.toDoList]

                props.setIndexTask(props.index)
                props.setNewItem(newList[props.index])
                console.log("Edit","index", props.index, "indexTask", props.indexTask)
            }}
        >
            Editar
        </button>
    )
}




function DeleteTask(props) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault
                const newList = [...props.toDoList]
                newList.splice(props.index, 1)
                props.setToDoList(newList)
            }}
        >
            Deletar
        </button>
    )
}