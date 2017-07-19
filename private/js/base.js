import $ from 'jquery';
// better to include relevant modules directly in modules you are using them,
// but this is also ok
import 'libs/bootstrap';
import outdatedBrowser from 'outdatedbrowser';
import { noscript } from 'addons/utils';
import svg4everybody from 'svg4everybody';

svg4everybody();

$(() => {
    noscript();
    outdatedBrowser({
        languagePath: '',
        lowerThan: 'boxShadow',
    });
});
