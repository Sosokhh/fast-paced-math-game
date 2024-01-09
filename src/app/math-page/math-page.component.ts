import { Component } from '@angular/core';
import {MathService} from "../math.service";

@Component({
  selector: 'app-math-page',
  templateUrl: './math-page.component.html',
  styleUrls: ['./math-page.component.scss']
})
export class MathPageComponent {

  constructor(private mathService: MathService) {}

  get currentScreen() {
    return this.mathService.currentScreen;
  }


}
