// always specify setUp and tearDown,
// always leave the state clean.
export default function (options) {
    casper.test.setUp(function () {});
    casper.test.tearDown(function () {});

    casper.test.begin('django-cms.org has correct title', function (test) {
        casper.start(options.baseUrl);

        casper.then(function () {
            test.assertTitleMatch(
                /django.cms/ig,
                'django cms website has correct title'
            );
        });

        casper.run(() => test.done());
    });
}
