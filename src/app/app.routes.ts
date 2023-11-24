import { Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'character/:id', component: CharacterSheetComponent },
];
