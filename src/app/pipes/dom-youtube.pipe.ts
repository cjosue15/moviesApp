import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domYoutube'
})
export class DomYoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer){}

  transform(value: string): any {

    let youtube = 'https://www.youtube.com/embed/';

    return this.dom.bypassSecurityTrustResourceUrl(youtube + value);
  }

}
