const { expect, window, spyOn, test } = require('./index.js');

test('should return success if true', () => {
    expect(0).toBe(0);
});

// Will be the last test
test('should work asynchronously', async () => {
    const zero = await Promise.resolve(0);

    expect(0).toBe(zero);
});

test('should throw an error if the test fails', () => {
    expect(() => {
        throw new Error('Test');
    }).throws({ name: 'Error', message: 'Test' });
});

test('should mock window', () => {
    window('document', { test: () => true });

    expect(document.test()).toBe(true);
});

test('should spy a method', () => {
    const tt = {
        execute: () => 't-t'
    };
    const spy = spyOn(tt, 'execute');

    tt.execute('tt');
    tt.execute('tt');

    expect(spy).toBe({
        args: ['tt', 'tt'],
        count: 2,
        output: 't-t'
    });
});
