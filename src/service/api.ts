import axios from "axios";
import { Character } from "../models/Character";


const baseUrl = "https://viacep.com.br/ws/58400320/json/";


async function getCep(this: any, cep:number): Promise<void> {
    const response = await axios.get<Character>(`${baseUrl}`)
    console.log(response.data)
}

export { getCep }; 


