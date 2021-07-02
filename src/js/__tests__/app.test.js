import orderByProps from '../Character';

test('sort object', () => {
  const warrior = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const selectors = ['name', 'level'];
  expect(orderByProps(warrior, selectors)).toEqual({
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10,
  });
});
