import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSkillsComponent } from './base-skills/base-skills.component';
import { SpecialSkillsComponent } from './special-skills/special-skills.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, BaseSkillsComponent, SpecialSkillsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
