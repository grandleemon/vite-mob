import {action, makeAutoObservable, observable} from "mobx";

export class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this, {
            secondsPassed: observable,
            increaseCount: action,
            decreaseCount: action
        })
    }

    increaseCount() {
        console.log(this.secondsPassed)
        this.secondsPassed = this.secondsPassed + 1
    }

    decreaseCount() {
        this.secondsPassed -= 1
    }
}