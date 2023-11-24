import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacStatsComponent } from './charac-stats/charac-stats.component';
import { CharacterComponent } from './character/character.component';
import { CombatComponent } from './combat/combat.component';
import { Character } from '../personnage-list/types';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [
    CommonModule,
    CharacStatsComponent,
    CharacterComponent,
    CombatComponent,
  ],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.scss',
})
export class CharacteristicsComponent {
  @Input() character: Character;
}
