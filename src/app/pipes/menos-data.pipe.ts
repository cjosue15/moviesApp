import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menosData'
})
export class MenosDataPipe implements PipeTransform {

  words: any[] = [];

  transform(value: string, ...args: any[]): string {

    this.words = value.split(' ');

    if (this.words.length > 30) {

      this.words.splice(30);

    }

    // console.log(this.words);
    return this.words.join(' ');
  }

}
