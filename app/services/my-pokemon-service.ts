import {Injectable} from "angular2/core";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export default class MyPokemonService {

    private _pokeList = [];
    public caughtPokemon$: BehaviorSubject<Array<{name: string, url: string}>> = new BehaviorSubject(this._pokeList);

    addPokemon(pokemon: {name: string, url: string}){
        this._pokeList = this._pokeList.concat([pokemon]);
        this.caughtPokemon$.next(this._pokeList);
    }
}