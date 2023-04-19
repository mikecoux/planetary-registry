import React from "react"
import Planet from "./Planet"

function PlanetList({ planets, search }) {
    const allPlanets = planets
    .filter((planet) => {
        return planet.name.toLowerCase().includes(search.toLowerCase()) || 
        planet.climate.toLowerCase().includes(search.toLowerCase()) ||
        planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
        planet.population.includes(search)
    })
    .map((planet) => {
        return <Planet key={planet.id} name={planet.name} climate={planet.climate} terrain={planet.terrain} population={planet.population} />
    })

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {allPlanets}
            </tbody>
        </table>
    );
}

export default PlanetList;