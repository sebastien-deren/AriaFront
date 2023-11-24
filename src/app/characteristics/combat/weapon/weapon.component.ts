import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weapon } from '../../characteristicsTypes';

@Component({
  selector: 'app-weapon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.scss',
})
export class WeaponComponent {
  @Input() weapon: Weapon | undefined;
}
