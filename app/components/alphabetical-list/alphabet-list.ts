import {Component, Input, Pipe, PipeTransform, ChangeDetectionStrategy} from "angular2/core";
import {IONIC_DIRECTIVES} from "ionic-angular/index";
import {NgFor} from "angular2/common";


@Pipe({name: 'startsWith'})
class StartsWithPipe implements PipeTransform{

    transform(values: Array<{name: string}> = [], args: string[]){
        return values.filter(value => value.name.charAt(0) === args[0]);
    }
}

@Component({
    selector: 'alpha-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [IONIC_DIRECTIVES, NgFor],
    pipes: [StartsWithPipe],
    template:
        `
<ion-item-group *ngFor="#letter of _alphas">
      <ion-item-divider light 
      style="text-transform: uppercase;">{{letter}}</ion-item-divider>
      <ion-item *ngFor="#item of (list | startsWith:letter)">{{item.name}}</ion-item>
    </ion-item-group>
`
})
export default class AlphabetList {
    private _alphas = 'abcdefghijklmnopqrstuvwxyz'.split('');
    @Input() list: Array<{name: string}>;
}