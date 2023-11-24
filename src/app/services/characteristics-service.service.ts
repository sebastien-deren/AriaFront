import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacteristicsServiceService {
  APiurl = 'http://localhost:8000/api/';
  constructor() {}
  getAllCharacteristics() {}
}
