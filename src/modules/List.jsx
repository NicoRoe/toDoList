import React from 'react';
import { InProgress, RenameToDo, DeleteToDo, Done } from './buttonModule'

export const List = ({ listsArray, list, index, setListsArray }) => {
    return (
        <div>
            {list.done ? <p >{list.toDo} erledigt</p> : list.inProgress ? <p >{list.toDo} in arbeit</p> : <p>{list.toDo}</p>}
            <RenameToDo
                listsArray={listsArray}
                index={index}
                setListsArray={setListsArray}
            />
            <DeleteToDo listsArray={listsArray} index={index} setListsArray={setListsArray} />
            <InProgress listsArray={listsArray} index={index} setListsArray={setListsArray} />
            <Done listsArray={listsArray} index={index} setListsArray={setListsArray} />
        </div>
    )

}