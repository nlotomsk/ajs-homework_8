import Team from '../app';

test('add new character', () => {
  const team = new Team();
  const characterToAdd = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
  };
  team.add(characterToAdd);
  const realBowman = team.toArray();
  const expectedBowman = [
    {
      name: 'Лучник',
      type: 'Bowman',
      attack: 25,
      defence: 25,
      health: 100,
    },
  ];
  expect(realBowman).toEqual(expectedBowman);
});
test('add character in team', () => {
  const team = new Team();
  const characterToAdd = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 25,
    level: 1,
    defence: 25,
    health: 100,
  };
  team.add(characterToAdd);
  const secondCharacterToAdd = characterToAdd;
  expect(() => team.add(secondCharacterToAdd)).toThrowError('Персонаж в команде!');
});
test('should add few character at a time', () => {
  const team = new Team();
  const charactersToAdd = [
    {
      name: 'Лучник',
      type: 'Bowman',
      attack: 25,
      level: 1,
      defence: 25,
      health: 100,
    },
    {
      name: 'Маг',
      type: 'Swordsman',
      attack: 20,
      level: 1,
      defence: 10,
      health: 100,
    },
  ];
  team.addAll(...charactersToAdd);
  const result = team.toArray();
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      attack: 25,
      level: 1,
      defence: 25,
      health: 100,
    },
    {
      name: 'Маг',
      type: 'Swordsman',
      attack: 20,
      level: 1,
      defence: 10,
      health: 100,
    },
  ];
  expect(result).toEqual(expected);
});
