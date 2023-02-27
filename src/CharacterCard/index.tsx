import React from "react";
import { Character } from "../models/Character";


interface Props {
    character: Character;
    index?: number;
}

function CharacterCard({ character }: Props) {
    return(
        <div className="container">
            <input type="text" placeholder="Digite o seu cep: "/>
            <h1>{character.Cep}</h1>
        </div>
    )
}

export default CharacterCard;