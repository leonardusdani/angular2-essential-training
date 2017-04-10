import { Pipe } from '@angular/core';

@Pipe({
  name: 'parseYear'
})
export class ParseYearPipe {
  transform(year) {
    return (new Date().getFullYear())-(year);
  }
}