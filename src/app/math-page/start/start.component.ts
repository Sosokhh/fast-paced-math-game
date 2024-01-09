import { Component } from '@angular/core';
import {MathService} from "../../math.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private mathService: MathService) {
  }

  startGame() {
    this.mathService.currentScreen++;
  }
}
