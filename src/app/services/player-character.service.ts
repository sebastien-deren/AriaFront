import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Character } from '../personnage-list/types';

@Injectable({
  providedIn: 'root',
})
export class PlayerCharacterService {
  url = environment.apiUrl + '/personnages';
  constructor() {}
  async getAllCharacter(): Promise<Character[]> {
    const characList = await fetch(this.url)
      .then((r) => r.json())
      .then((json) => json['hydra:member']);
    return characList;
  }
  getOneCharacterById(characterId: number): Promise<Character> {
    return fetch(this.url + '/' + characterId).then((r) => r.json());
  }
  postOneCharacter() {}
  updateOneCharacter(characterId: number) {}
}
