import React,{useState} from 'react';
import {List} from './List';

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

    // listArray = 

    //     listArray.map((list) => {
    //         const newlist = {indexname: "somethingElse", inProgress: true, done: 2}        
    //     })

    //     setListsArray([...listsArray,])

    return(
        <div>
            <form action="">
                <fieldset>
                <input
                 onChange={(event) => event.preventDefault()}
                 type="text" />
                <button onClick={(event) => {
                    event.preventDefault();
                    let value = event.currentTarget.parentNode.querySelector('input').value;
                    setListsArray(listsArray => [...listsArray,value]);
                }}>Add List</button>
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