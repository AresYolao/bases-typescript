

export const pokemonIds = [1,20,30,47,12];


interface Pokemon {
    id:number;
    name:string;
    age?:number;
}


export const charmander:Pokemon = {
    id:4,
    name: 'charmander',
}

export const bulbasaur:Pokemon= {
    id: 1,
    name: "bulbasaur"
}


export const pokemons:Pokemon[] = [];
pokemons.push(charmander,bulbasaur);
console.log(pokemons);