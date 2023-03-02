import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/models';

@Component({
  selector: 'game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game!: Game;

  constructor() {}
}
