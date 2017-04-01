import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent{
    //this is the only time you can define a property in html, is if it has an @Input
    @Input() rating: number;
    starWidth: number;
    //can expose more than 1 out put event per component
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    //raise event on container
    onClick(): void {
        //es 2015 back ticks to define a template string
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}