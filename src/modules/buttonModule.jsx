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



export const DeleteToDo = ({listsArray, setListsArray}) => {
    // Delte List element
}

export const RenameToDo = ({listsArray, list,index,setListsArray}) => {
    //Rename List Element
    const [doRename,setDoRename] = useState(false);


const rename = (event) => {


    const newName = event.currentTarget.parentNode.querySelector('input').value;

    const newListsArray = listsArray.map((list,item) => {
            if(index === item){
                console.log(list);
                let changedList = {...list, toDo: newName}
                return changedList;
            }
            else{
                return list;
            }
    })
    setListsArray(newListsArray);
    setDoRename(false);
} 

const toggleRename = () => {
    doRename?setDoRename(false):setDoRename(true);
}

    return(
        <div>
        <button onClick={toggleRename}>rename</button>
        {doRename && 
        <div>
        <input></input>
        <button  onClick={rename}>do Rename</button></div>}
        </div>
    )

}

export const InProgress = (progress) => {
    //List element is in progress
    // setState([...progress,])
    
    return (
        <button></button>
    )

}

export const done = () => {
    // Task is done
}





