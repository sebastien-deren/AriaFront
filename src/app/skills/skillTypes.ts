export interface Skill {
  name: string;
  description: string;
  score: number;
}
export type Link = {
  firstCharac: string;
  secondCharac: string;
};
export type SkillList = Skill[];

export interface BaseSkill extends Skill {
  Link: Link;
}
export interface SpecialSkill extends Skill {
  scoreSystem: string;
}
