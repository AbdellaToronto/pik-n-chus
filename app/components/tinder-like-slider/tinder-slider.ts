import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "angular2/core";
import {NgFor} from "angular2/common";
import {IONIC_DIRECTIVES} from "ionic-angular/index";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [NgFor, IONIC_DIRECTIVES],
    selector: 'pokemon-tinder',
    template: `
<ion-slides [options]="_swiperOptions">

<ion-slide 
    class="pokemon-slide" 
    *ngFor="#pokemon of pokemonList" 
    [style.background-image]="imageGrabber(pokemon.name)"
>
<h1 class="slide-title">{{pokemon.name}}</h1>

  <button fab fab-right fab-bottom class="pokeball-fab" (click)="catchPokemon(pokemon)">
    <img src="../../assets/Pokeball.png" />
  </button>

</ion-slide>

</ion-slides>
`
})
export default class TinderesqueSlider {

    private _swiperOptions = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        allowSwipeToPrev: false,
        onInit: this.setSwiperTo(this),
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        }
    };

    private _swiper;

    @Input() pokemonList;
    @Output() pokemonCaptured: EventEmitter<{name: string, url: string}> = new EventEmitter();

    setSwiperTo(setTo){
        return (swiperInstance) => setTo._swiper = swiperInstance;
    }

    catchPokemon(pokemon){
        this.pokemonCaptured.emit(pokemon);
        this._swiper.slideNext();
    }

    imageGrabber(pokemonName: string) {
        return `url(http://img.pokemondb.net/artwork/${pokemonName}.jpg)`;
    }

}
