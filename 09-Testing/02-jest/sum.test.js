const { sum } = require('./sum');

describe('sum', () => {
  it('should calc 2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should calc -1 + 1 = 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('should calc 1 + -1 = 0', () => {
    expect(sum(1, -1)).toBe(0);
  });
});

