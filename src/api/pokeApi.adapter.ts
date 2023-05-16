import axios from "axios";


export interface HttpAdapter {
    get<T>(url:string): Promise<T>;
}

export class PokeApiFetchAdapter  implements HttpAdapter{

    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data = await resp.json();
console.log('con FETCH!');
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;

    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
        console.log('con AXIOS!');
        return data;
    }
}