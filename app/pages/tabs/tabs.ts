import {Page} from 'ionic-angular';
import PikPage from "../Pik/pik";
import PokeListPage from "../PokeList/poke-list";
import MyPokemonService from "../../services/my-pokemon-service";


@Page({
  templateUrl: 'build/pages/tabs/tabs.html',
  providers: [MyPokemonService]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PikPage;
  tab2Root: any = PokeListPage;
}
