const assert = require('assert');

function window(property, object) {
    global[property] = object;
}

// @see: https://stackoverflow.com/a/41407246
const FgGreen = '\x1b[32m';
const FgRed = '\x1b[31m';
const FgCyan = '\x1b[36m';

console.log(FgCyan, `Initialize tests:`);

let count = 1;

async function test(should, assertion) {
    try {
        await assertion();
        console.log(FgGreen, `${count++} - ${should}`);
    } catch (e) {
        console.error(FgRed, `${count++} - Error:`, `"${should}"`, '\n', e);
    }
}

const expect = (actual) => ({
    ...assert.strict,
    ok: (message) => assert.strict.ok(actual, message),
    toBe: (expected, message) => assert.strict.deepStrictEqual(actual, expected, message),
    throws: (error, message) => assert.strict.throws(actual, error, message)
});

// @see: https://abdulapopoola.com/2016/04/11/how-function-spies-work-in-javascript/
function spyOn(obj, method) {
    let original = obj[method];
    let spy = {
        args: [],
        count: 0,
        output: null
    };

    obj[method] = function () {
        const args = [].slice.apply(arguments);

        spy.count++;
        spy.args.push(...args);
        spy.output = original.call(obj, args);

        return spy.output;
    };

    return spy;
}

module.exports = {
    window,
    test,
    expect,
    spyOn
};
