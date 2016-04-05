import {Page, PageMetadata} from "ionic-angular";
import AlphabetList from "../../components/alphabetical-list/alphabet-list";
import MyPokemonService from "../../services/my-pokemon-service";


@Page(<PageMetadata>{
    directives: [AlphabetList],
    template: `<ion-content>
    <alpha-list [list]="_myPokemon.caughtPokemon$ | async"></alpha-list>
</ion-content>`
})
export default class PokeListPage{

    constructor(private _myPokemon: MyPokemonService){}
}
