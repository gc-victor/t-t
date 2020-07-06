# t-t

Tiny test library for your tiny library.

## Let's Play

Create your first test

```
test('should return success if true', () => {
    expect(0).toBe(0);
});
```

```
1 - should return success if true
```

You can use `expect` with `toBe` or any of the NodeJS [Asserts](https://nodejs.org/api/assert.html) methods.

If your library contains browser code, you can mock the window with `window`.

```
test('should mock window', () => {
    window('document', { test: () => true });

    expect(document.test()).toBe(true);
});
``` 

```
2 - should mock window
```

Test asynchronously 

```
test('should work asynchronously', async () => {
    const zero = await Promise.resolve(0);

    expect(0).toBe(zero);
});
```

Finally, you can spy a method using `spyOn`.

```
test('should spy a method', () => {
    const test = {
        execute: () => 't-t'
    };
    const spy = spyOn(test, 'execute');

    test.execute('test');
    test.execute('test');

    expect(spy).toBe({
        args: ['test', 'test'],
        count: 2,
        output: 't-t'
    });
});
``` 

```
3 - should spy a method
```

Enjoy :)

## Acknowledgments

### Inspiration

- [AbdulFattah Popoola](https://abdulapopoola.com/2016/04/11/how-function-spies-work-in-javascript) for the spyOn
- [Kent C. Dodds](https://testingjavascript.com/courses/fundamentals-of-testing-in-javascript) for some ideas from his course

## Compatible Versioning

### Summary

Given a version number MAJOR.MINOR, increment the:

- MAJOR version when you make backwards-incompatible updates of any kind
- MINOR version when you make 100% backwards-compatible updates

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR format.

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)](https://github.com/staltz/comver)

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all, see if your issue or idea has [already been reported](../../issues).
If it hasn't, just open a [new clear and descriptive issue](../../issues/new).

### Commit message conventions

A specification for adding human and machine readable meaning to commit messages.

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone http://github.com/<your-username>/react-form-core`
-   Navigate to the newly cloned directory: `cd react-form-core`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   `npm run build` to verify your change doesn't increase output size.
-   `npm test` to make sure your change doesn't break anything.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](https://github.com/gc-victor/t-t/blob/master/LICENSE)