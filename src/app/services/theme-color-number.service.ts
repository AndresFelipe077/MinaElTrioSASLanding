import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeColorNumberService {

  numberColor: number = 900;

  constructor() { }

  colorDark(): string {
    return `dark:bg-gray-${this.numberColor} `;
  }

}
