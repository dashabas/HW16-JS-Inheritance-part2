class Clock {
    constructor(element) {
        this.element = element;
        this.fullFormat = true;
        this.shortFormat = false;
        this.element.addEventListener('click', () => {
            this.changeFormat();
        });
    }
    render() {
        if (this.fullFormat) {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0];
        } else {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
        }
    }
    changeFormat() {
        this.fullFormat = !this.fullFormat;
        this.shortFormat = !this.shortFormat;
    }
}

const clock = new Clock(document.querySelector('.clock'));
setInterval(() => clock.render(), 1000);

class ClockFullFormat extends Clock{
    constructor(element) {
        super(element);
    }
    render() {
        this.element.innerHTML = new Date().toTimeString().split(' ')[0];
        if (!this.fullFormat) {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
        }
    }
}

const fullClock = new ClockFullFormat(document.querySelector('.clock-full-format'));
setInterval(() => fullClock.render(), 1000);

class ClockShortFormat extends Clock{
    constructor(element) {
        super(element);
    }
    render() {
        if (this.shortFormat) {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0];
        } else {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
        }
    }
}

const shortClock = new ClockShortFormat(document.querySelector('.clock-short-format'));
setInterval(() => shortClock.render(), 1000);

console.log(clock);
console.log(fullClock);
console.log(shortClock);