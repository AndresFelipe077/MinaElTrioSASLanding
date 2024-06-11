import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  constructor() { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
