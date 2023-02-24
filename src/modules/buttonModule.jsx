
import { useState } from "react";

export const AddButton = ({listsArray, setListsArray}) => {
   
   const add = (event) => {
    event.preventDefault();
    let value = event.currentTarget.parentNode.querySelector('input').value;
   
   const newObject = {
    toDo: value,
    inProgress: false,
    done: false}

    setListsArray([...listsArray,newObject]);
}
   
    return (
    <div>
         <input
                 type="text" />
                <button onClick={add}>Add List</button>
    </div>        

    )
} 



export const DeleteToDo = ({ listsArray, index, setListsArray }) => {

    // Delte List element
    // get index in listArray
    // listArray.splice(index,0)

    const deleteFunction = () => {
        let newArray = [...listsArray];
        newArray.splice(index, 1);
        setListsArray(newArray);
    }
    return (
        <button onClick={deleteFunction}>delete</button>
    )
}

export const RenameToDo = ({ listsArray, index, setListsArray,doRename,setDoRename }) => {
    //Rename List Element



const rename = (event) => {


    const newName = event.currentTarget.parentNode.querySelector('input').value;

        const newListsArray = listsArray.map((list, item) => {
            if (index === item) {
                console.log(list);
                let changedList = { ...list, toDo: newName }
                return changedList;
            }
            else {
                return list;
            }

    })
    setListsArray(newListsArray);
    setDoRename(false);
} 

    return(
        <div>
        <input></input>
        <button  onClick={rename}>do Rename</button>
        </div>

    )

}

export const InProgress = ({ listsArray, index, setListsArray }) => {
    // Task is done
    const toDoProgress = () => {
        const newListsArray = listsArray.map((list, item) => {
            if (index === item) {
                let changedList = { ...list, inProgress: !list.inProgress };
                console.log(changedList);
                return changedList;
            }
            else {
                return list;
            }
        })
        setListsArray(newListsArray);
    }
    return (
        <button onClick={toDoProgress}>in Progress</button>
    )

}

export const Done = ({ listsArray, index, setListsArray }) => {
    // Task is done
    const toDoDone = () => {
        const newListsArray = listsArray.map((list, item) => {
            if (index === item) {
                let changedList = { ...list, done: !list.done };
                console.log(changedList);
                return changedList;
            }
            else {
                return list;
            }
        })
        setListsArray(newListsArray);
    }
    return (
        <button onClick={toDoDone}>finished</button>
    )
}





