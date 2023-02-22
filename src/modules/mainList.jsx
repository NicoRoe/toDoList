import React,{useState} from 'react';

export const MainList = () => {
    const [listsArray,setListsArray] = useState([])
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
                {listsArray}
                {
                    // lists.map((element) =>  {element})
                }
                {/* Hier kommt ein Map hin der alle passenden Listen generiert */}
            </div>
        </div>
    )
}