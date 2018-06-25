import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: string, ...args) {
    const date = new Date(null);
    date.setSeconds(parseInt(value / 1000));
    const timeString = date.toISOString().substr(11, 8);

    return timeString;
  }
}
