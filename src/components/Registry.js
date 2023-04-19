import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetch('http://localhost:8085/planets')
            .then(res => res.json())
            .then(data => setPlanets(data))
    },[])

    function handleNewPlanet(newPlanet){
        setPlanets([...planets, newPlanet])
    }

    return(
        <div className="registry">
            <Search onSearch={setSearch}/>
            <div className="content">
                <PlanetList planets={planets} search={search}/>
                <NewPlanetForm onNewPlanet={handleNewPlanet}/>
            </div>
        </div>
    )
}

export default Registry;