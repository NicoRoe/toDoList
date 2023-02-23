import React from 'react';
import {InProgress,RenameToDo} from './buttonModule'

export const List = ({listsArray,list,index,setListsArray}) => {
    return(
        <div>
            
            <p>{list.toDo}</p>
            <RenameToDo
                listsArray = {listsArray}
                list = {list}
                index = {index}
                setListsArray = {setListsArray}
            />       
            <button>delete</button>
            <button>finished</button>
        </div>
    )

}