import React, { useState } from "react"
// import {v4 as uuid} from "uuid"

function NewPlanetForm({ onNewPlanet }) {
    const [formData, setFormData] = useState({
        name: '',
        climate: '',
        terrain: '',
        population: ''
    })

    function handleChange(e) {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        //post request
        fetch('http://localhost:8085/planets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => onNewPlanet(data))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="climate" placeholder="Climate" onChange={handleChange} />
            <input type="text" name="terrain" placeholder="Terrain" onChange={handleChange} />
            <input type="text" name="population" placeholder="Population" onChange={handleChange} />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;