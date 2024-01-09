import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  currentScreen: number = 0;

  constructor() { }
}
