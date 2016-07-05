// test helpers have to be required in every test file,
// so the same jquery is used in the code and in jasmine helpers
import './helpers/mock-ajax';
import './helpers/jasmine-jquery';

import {
    noscript,
    setStorage,
    getStorage,
    __RewireAPI__ as UtilsRewire
} from '../../static/js/addons/utils';
import $ from 'jquery';

describe('noscript()', () => {
    it('should remove noscript class from document', () => {
        expect($(document)).not.toHaveClass('noscript');
        $(document).addClass('noscript');
        noscript();
        expect($(document)).not.toHaveClass('noscript');
    });
});

describe('setStorage()', () => {
    beforeEach(() => localStorage.clear());
    afterEach(() => UtilsRewire.__ResetDependency__('isStorageSupported'));

    it('should return false if no token passed', () => {
        expect(setStorage(null, 'value')).toEqual(false);
    });

    it('should return false if no value passed', () => {
        expect(setStorage('token')).toEqual(false);
    });

    it('should return false if no token and no value passed', () => {
        expect(setStorage()).toEqual(false);
    });

    it('should return false if localstorage is not available', () => {
        UtilsRewire.__Rewire__('isStorageSupported', false);
        expect(setStorage('token', 'value')).toEqual(false);
    });

    it('should put something in localstorage if it is available', () => {
        expect(setStorage('token', 'value')).toEqual('value');
        expect(localStorage.getItem('token')).toEqual('value');
    });
});

describe('getStorage()', () => {
    beforeEach(() => localStorage.clear());
    afterEach(() => UtilsRewire.__ResetDependency__('isStorageSupported'));

    it('should return false if no token passed', () => {
        expect(getStorage()).toEqual(false);
    });

    it('should return false if localstorage is not available', () => {
        UtilsRewire.__Rewire__('isStorageSupported', false);
        expect(getStorage('token')).toEqual(false);
    });

    it('returns null if item is not in localstorage', () => {
        expect(getStorage('token')).toEqual(null);
    });

    it('should get something from localstorage if it is available', () => {
        setStorage('token', 'value');
        expect(localStorage.getItem('token')).toEqual('value');
    });
});
