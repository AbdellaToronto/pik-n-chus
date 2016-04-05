import {Injectable} from "angular2/core";
import {Http, URLSearchParams} from "angular2/http";
import 'rxjs/add/operator/map';


@Injectable()
export default class PokemonApiService {

    queryParams: URLSearchParams = new URLSearchParams('limit=1000');

    constructor(private _http: Http){}

    getAllPokemon(){
        return this._http.get('http://pokeapi.co/api/v2/pokemon', {search: this.queryParams})
            .map(res => res.json())
            .map(res => res.results);
    }
}