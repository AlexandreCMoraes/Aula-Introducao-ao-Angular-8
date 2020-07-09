import { Component, OnChanges, Input } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;
    starWidth: number;


    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;

    }
}
