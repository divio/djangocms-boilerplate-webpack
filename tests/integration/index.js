import dummy from './dummy';

const testsToRun = casper.cli.options.tests === '*' ? casper.cli.options.tests : casper.cli.options.tests.split(',');
const options = {
    baseUrl: 'http://django-cms.org'
};

// tests that will be run
const tests = {
    dummy
};

if (testsToRun === '*') {
    Object.keys(tests).forEach((test) => {
        tests[test](options);
    });
} else {
    testsToRun.forEach((test) => {
        tests[test](options);
    });
}
