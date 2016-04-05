import {Component, Input} from "angular2/core";
import {NgFor} from "angular2/common";
import {IONIC_DIRECTIVES} from "ionic-angular/index";


@Component({
    selector: 'pokemon-tinder',
    directives: [NgFor, IONIC_DIRECTIVES],
    styles: [`
    .swiper-container {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }
    
    .slide-title {
        text-transform: uppercase;
        position: absolute;
        top: 16px;
        left: 10px;
        background-color: rgba(63, 81, 181, 0.9);
        color: white;
        font-size: 3.4rem;
        padding: 3px;
        box-shadow: #252525 2px 2px 5px;
    }
    
    .pokemon-slide {
        width: 75vw;
        margin: 2px;
        height: 80vh;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
    
    .swiper-slide-prev {
        background-blend-mode: luminosity;
        background-color: black;
    }
    
    .button-fab {
        width: 66px;
        height: 66px;
    }
    
    .pokeball-fab {
        padding: 0;
        height: 66px;
        width: 66px;
    }
    
`],
    template: `
<ion-slides [options]="_swiperOptions">

<ion-slide 
    class="pokemon-slide" 
    *ngFor="#pokemon of pokemonList" 
    [style.background-image]="imageGrabber(pokemon.name)"
>
<h1 class="slide-title">{{pokemon.name}}</h1>

  <button fab fab-right fab-bottom class="pokeball-fab">
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
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        }
    };
    
    @Input() pokemonList;

    imageGrabber(pokemonName: string) {
        return `url(http://img.pokemondb.net/artwork/${pokemonName}.jpg)`;
    }

}