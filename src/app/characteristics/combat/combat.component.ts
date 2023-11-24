import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponComponent } from './weapon/weapon.component';
import { WeaponList } from '../characteristicsTypes';
import { DefenseComponent } from './defense/defense.component';

@Component({
  selector: 'app-combat',
  standalone: true,
  imports: [CommonModule, WeaponComponent, DefenseComponent],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.scss',
})
export class CombatComponent {
  weaponList: WeaponList = [
    {
      name: 'bâton',
      diceNumber: 1,
      diceSize: 6,
    },
    {
      name: 'arc',
      diceNumber: 1,
      diceSize: 6,
    },
  ];
}
