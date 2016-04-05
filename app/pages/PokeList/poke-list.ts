import {Page, PageMetadata} from "ionic-angular";
import AlphabetList from "../../components/alphabetical-list/alphabet-list";


@Page(<PageMetadata>{
    directives: [AlphabetList],
    template: `<ion-content>
    <alpha-list></alpha-list>
</ion-content>`
})
export default class PokeListPage{

}
