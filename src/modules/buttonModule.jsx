/* export const AddButton = () => {
    return (
        <div>
            <input type="text" name="" />
            <button name="">Add List</button>
        </div>
    )
} */





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

export const RenameToDo = ({ listsArray, index, setListsArray }) => {
    //Rename List Element


    const rename = () => {

        const newName = "barret";

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

        // const newList = {...list};
        // console.log(newList);

        // let newName = prompt("newName","PlaceHolder");
        // newList = {...newList, toDo:newName};
        // setListsArray([...listArray])


    }

    return (
        <button onClick={rename}>rename</button>
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





