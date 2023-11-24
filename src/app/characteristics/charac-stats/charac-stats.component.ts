import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Characteristics } from '../characteristicsTypes';
@Component({
  selector: 'app-charac-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charac-stats.component.html',
  styleUrl: './charac-stats.component.scss',
})
export class CharacStatsComponent {
  charac: Characteristics = {
    int: 12,
    cha: 20,
    con: 8,
    str: 13,
    dex: 16,
  };
}
