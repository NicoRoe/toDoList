import {React,useState} from 'react';
import { InProgress, RenameToDo, DeleteToDo, Done } from './buttonModule'


export const List = ({ listsArray, list, index, setListsArray }) => {
    const [doRename,setDoRename] = useState(false);


    const startRename = () => {
        setDoRename(true);
    }
    return (
        <div className='flexBox listElement'>
            
            {!doRename &&
            <p><span onDoubleClick={startRename}>{list.toDo} </span>
            {list.done?"erledigt":
            list.inProgress?"in arbeit": ""}
            </p> 
            }
            {doRename && 
             <RenameToDo
             listsArray={listsArray}
             index={index}
             setListsArray={setListsArray}
             doRename = {doRename}
             setDoRename =  {setDoRename}
         />
            }           
               
            <DeleteToDo listsArray={listsArray} index={index} setListsArray={setListsArray} />
            <InProgress listsArray={listsArray} index={index} setListsArray={setListsArray} />
            <Done listsArray={listsArray} index={index} setListsArray={setListsArray} />
        </div>
    )

}

{/* <p ><span onDoubleClick={startRename}>{list.toDo}</span> 
               {
               list.done? <span>erledigt</span> : list.InProgress
               ?<span>in Arbeit</span>:<span></span>}</p>
            
               }
             */}