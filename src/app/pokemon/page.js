"use client";
import { useEffect, useState } from 'react';
import pokeStyles from './pokemon.module.css'
useState

// Pokemon data 
/**
 * @typedef {object} pokemonApiObject this is the object fpr a pokemon
 * @prop {String} name Name of Pokemon  
 * @prop {Number} id pokemon id number
 * @prop {Object} sprites Object with all spirte refrences
 * @prop {String} spirtes.front_default Default front image for sprite
 *  @prop {Number} height height of pokemon. multiply by 10 to make it in cms.
 *  @prop {Number} weight Weight of pokemo. Divide by 10 to make it kg.
 */

/**
 * @returns
 */

export default function Pokemon() {
/**
 * @type {[pokemonApiObject, Function ]}
 */
const [pokemon, setPokemon] = useState ({ sprites: {}});
/**
 * @type {[String, Function]}
 */
const [searchTerm, setSearchTerm] = useState("");

const [pokemonEncounters, setPokemonEncounters]= useState([]);


function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value.toLowerCase());
}

async function searchForPokemonByName() {

    try {
        const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        const pokeDataFormatted = await rawData.json();
        setPokemon(pokeDataFormatted)
    } catch (error) {
        setPokemon({name:searchTerm, sprites: {} })
    }

   
}


useEffect( function () {
    if(pokemon.id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
            .then((rawData) => {
                return rawData.json();
            })
            .then((pokeEncounters) => {
                setPokemonEncounters(pokeEncounters)
            })
            
            .catch((e) => {
                setPokemonEncounters9([]);
            });
        } else {
                setPokemonEncounters([]);
            }  
    }
, 
 [pokemon]
);

    return (
        <main>
            <h1>Pokemon Page</h1>
            <div className={pokeStyles.search}>
                <input 
                type="search" 
                id="search" 
                name="search" 
                value={searchTerm}
                onChange={changeSearchTerm}
                /> 
                <input type="button" value="search" onClick={searchForPokemonByName}/> 
            </div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default}/>
        </main>
    );
}