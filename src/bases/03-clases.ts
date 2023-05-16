
import axios from 'axios';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {

    // public id:number;
    // public name:string;

    // constructor(id:number,name:string){
    //     this.id=id;
    //     this.name=name;
    //     console.log('contructor llamado');
    // }


    // Forma corta
    constructor(public readonly id: number, public name: string, public tipo?: string) {
        console.log('contructor llamado');
    }


    get imageUrl(): string {
        return `https:pokemon.com/${this.id}.jpg`
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    async getMoves() { 
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name.toUpperCase());

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'charmander');

console.log(charmander);
charmander.scream();

charmander.getMoves();