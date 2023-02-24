import React,{useState} from 'react';
import {List} from './List';
import {AddButton} from './buttonModule';
export const MainList = () => {

 const [listsArray,setListsArray] = useState(
        [
            {
            toDo: "wash",
            inProgress: false,
            done: false},
            {   toDo: "dry",
                inProgress: false,
                done: false},
        ]
    )


    return(
        <div>
            <form action="">
                <fieldset>
               <AddButton 
               listsArray = {listsArray}
               setListsArray = {setListsArray}/>
                </fieldset>
            </form>

            <div className="listBox">
              
               { listsArray.map((element,i) => <List
               listsArray = {listsArray}
               list = {element}
               index = {i}
               setListsArray = {setListsArray}/>)} 
           
               {/* { listsArray.map((element) => console.log(element))} */}
                     
            </div>
        </div>
    )
}