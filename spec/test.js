const {
    increaseCount,
    decreaseCount,
    logCountInConsole,
    getCount,
    setCount
} = require('./../scripts/main');

test('Count', () => {
    expect(getCount()).toBe(0);
});

test('Increment count', () => {
    expect(getCount()).toBe(0);
    increaseCount();
    expect(getCount()).toBe(1);
    increaseCount();
    expect(getCount()).toBe(2);
    increaseCount();
    increaseCount();
    expect(getCount()).toBe(4);
});

test('Decrement count', () => {
    setCount(0);
    expect(getCount()).toBe(0);
    decreaseCount();
    expect(getCount()).toBe(0);
    increaseCount();
    decreaseCount();
    expect(getCount()).toBe(0);
    increaseCount();
    increaseCount();
    decreaseCount();
    expect(getCount()).toBe(1);
});