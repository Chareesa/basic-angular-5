import { Injectable } from '@angular/core';
//one of the best ways to share data between components is to use rxjs behavior subject library
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
    private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
    goal = this.goals.asObservable();

    constructor() { }

    changeGoal(goal) {
        this.goals.next(goal)
    }
}