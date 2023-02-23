export const Button = () => {
    return (
    <div>
        <input type="text" name="" />
        <button name="">Add List</button>
    </div>        
    )
}





export const DeleteToDo = () => {
    // Delte List element
}

export const RenameToDo = ({listsArray, list,index,setListsArray}) => {
    //Rename List Element


const rename = () => {
    
    const newName = "barret";

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

    // const newList = {...list};
    // console.log(newList);

    // let newName = prompt("newName","PlaceHolder");
    // newList = {...newList, toDo:newName};
    // setListsArray([...listArray])


}    

    return(
        <button onClick={rename}>rename</button>
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





