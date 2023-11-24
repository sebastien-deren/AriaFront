import { BaseSkill, SkillList } from './skillTypes';

export default function baseSkillFactory(skillNumber: number): BaseSkill[] {
  let list: BaseSkill[] = [];
  for (let i = 0; i < skillNumber; i++) {
    list.push({
      name: 'LOrem Ipsum',
      description: 'any,',
      score: 0,
      Link: {
        secondCharac: 'str',
        firstCharac: 'dex',
      },
    });
  }
  return list;
}
