import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  //Using "template" allows actual html here. Use back ticks with that.
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
        //activated when any state goes to any state
        transition('* => *', [
            //when something enters the dom, then style opacity will be 0. Sometimes animations will fail if no "optional:true"
            query(':enter', style({ opacity: 0}), {optional: true}),
            //stagger allows you to take elements in the dom and place a delay on when each subsequential dom element will start to animate
            query(':enter', stagger('300ms', [
                animate('.6s ease-in', keyframes([
                    //come from the top, starting position 0
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                    //happens at the middle of the .6s animation (.3), will go further by 35px from default position
                    style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                    //1 is the end of the animation
                    style({opacity: 1, transform: 'translateY(0)', offset: 1})
                ]))
            ]), {optional: true}),
            //when anything leaves the dom, do animation in reverse
            query(':leave', stagger('300ms', [
                animate('.6s ease-in', keyframes([
                    //come from the top, starting position 0
                    style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                    //happens at the middle of the .6s animation (.3), will go further by 35px from default position
                    style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                    //1 is the end of the animation
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
                ]))
            ]), {optional: true})
        ])
    ])
  ]
})
export class HomeComponent implements OnInit {
    itemCount: number;
    btnText: string = "Add an item";
    goalText: string = 'My first life goal';
    goals = [];

    //create instance of service through dependency injection
    constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.goal.subscribe(res => this.goals = res);
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
    }

    addItem() {
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
    }

    removeItem(i) {
        this.goals.splice(i, 1);
        this._data.changeGoal(this.goals);
        this.itemCount = this.goals.length;
    }

}
