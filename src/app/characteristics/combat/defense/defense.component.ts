import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Defense } from '../../characteristicsTypes';

@Component({
  selector: 'app-defense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defense.component.html',
  styleUrl: './defense.component.scss',
})
export class DefenseComponent {
  defense: Defense = {
    healthPoint: 20,
    protection: 1,
    wound: 5,
  };
}
