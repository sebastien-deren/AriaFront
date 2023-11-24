export type Characteristics = {
  dex: Number;
  con: number;
  str: number;
  int: number;
  cha: number;
};
export type CharacteristicsList = Characteristics[];

export type Weapon = {
  name: string;
  diceNumber: number;
  diceSize: number;
};
export type WeaponList = Weapon[];

export type Defense = {
  healthPoint: number;
  wound: number;
  protection: number;
};
