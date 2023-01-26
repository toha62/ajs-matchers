import sortCharacter from '../character';

test('should sort characters array', () => {
  const result = sortCharacter([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 95 },
    { name: 'лучник', health: 80 },
    { name: 'солдат', health: 10 },
    { name: 'всадник', health: 70 },
  ]);

  expect(result).toEqual([
    { name: 'маг', health: 95 },
    { name: 'лучник', health: 80 },
    { name: 'всадник', health: 70 },
    { name: 'мечник', health: 10 },
    { name: 'солдат', health: 10 },
  ]);
});

test('should return null without args', () => {
  const result = sortCharacter();

  expect(result).toBeNull();
});
