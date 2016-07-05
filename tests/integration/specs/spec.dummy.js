/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/divio/djangocms-boilerplate-webpack
 */

/* global describe, it, expect, browser */

// #############################################################################
// INTEGRATION TEST
var dummyPage = require('../pages/page.dummy.js');

describe('Django CMS website', function () {
    it('should have a title', function () {
        browser.get(dummyPage.site);

        expect(browser.getTitle()).toMatch(/django.cms/ig);
    });
});
