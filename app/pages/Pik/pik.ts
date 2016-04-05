import {Page, PageMetadata} from 'ionic-angular';
import TinderesqueSlider from "../../components/tinder-like-slider/tinder-slider";
import PokemonApiService from "../../services/pokemon-api-service";
import {Observable} from "rxjs/Observable";
import {AsyncPipe} from "angular2/common";
import MyPokemonService from "../../services/my-pokemon-service";

@Page(<PageMetadata>{
    directives: [TinderesqueSlider],
    pipes: [AsyncPipe],
    providers: [PokemonApiService],
    template:
        `
<pokemon-tinder
  [pokemonList]="_pokemon$ | async"
  (pokemonCaptured)="_myPokemon.addPokemon($event)"
></pokemon-tinder>
`
})
export default class PikPage {

    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    private _pokemon$: Observable<any>;

    constructor(private _pokeApi: PokemonApiService, private _myPokemon: MyPokemonService){}


    ngOnInit(){
        this._pokemon$ = this._pokeApi
            .getAllPokemon()
            .map(fullList => fullList.filter(pokemon => !pokemon.name.includes('-')))
            .map(list => PikPage.shuffle(list))
            .map(fullList => fullList.filter((pokemon, index)=> index < 50));
    }

}