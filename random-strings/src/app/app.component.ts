import { Component } from '@angular/core';
import { fromEvent, interval, Observable, Subject, timer } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'random-strings';
  textString: string = '';
  palindrome: string = '';

  clicks = fromEvent(document, 'click');
  delayedClicks$ = this.clicks.pipe(delay(3000));

  getRandomString(): void {
    let text: string = '';
    //here just this chars so no need to wait when it matches for whole alphabet
    const allChars: string = 'ab0123';

    for (let i = 0; i < 5; i++) {
      text += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    console.dir(this.textString);

    this.delayedClicks$.subscribe(() => (this.textString = text));
    this.delayedClicks$.subscribe(
      () => (this.palindrome = this.textString.split('').reverse().join(''))
    );
  }
}
