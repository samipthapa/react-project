import React, { useState } from "react";

function BucketList() {
    const [ input, setInput ] = useState('');
    const [ places, setPlaces ] = useState(['Italy', 'Ireland'])

    function addPlace(e) {
        setPlaces(prevState => [...prevState, input]);
        setInput('')
        e.preventDefault();
    }

    function removePlace(e) {
        setPlaces(places.filter(place => place != e.target.parentElement.parentElement.textContent))
    }

    const placesElement = places.map(function(item) {
        return (
            <div className="liItem" id="liItem">
                <li>{item}</li>
                <a href="#" class="delete-item">
                        <i class="fas fa-trash fa-lg" onClick={removePlace}></i>   
                    </a>
            </div>
        )
    })

    return (
        <div>
            <h2 className="places--heading">Places I'd Like to Visit</h2>
            <form onSubmit={addPlace}>
                <div className="textInput">
                    <input type="text" className="task" onChange={
                        (e) => {setInput(e.target.value)}
                    }  value={input}/>
                    <a href="#" className="add-item">
                        <i class="fas fa-plus-square fa-2x" onClick={addPlace}></i>
                    </a>
                </div>
            </form>
            <ul className="places--list">
                {placesElement}
            </ul>
        </div>
    )
}

export default BucketList