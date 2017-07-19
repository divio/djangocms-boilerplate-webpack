/* global CMS */
import $ from 'jquery';

// The event fires on successful reloads of the content mode when
// editing a page with the cms
// If your js module doesn't reload correctly - you may want to reinitialize it here.
CMS.$(window).on('cms-content-refresh', () => {
    // e.g. initMySlider();

    // SVGs for some reason don't like DOM diffing, probably related to creation of elements
    // with incorrect namespace, but no time to look into it now ¯\_(ツ)_/¯
    $('svg').each((i, el) => {
        $(el).replaceWith($(el).clone().wrap('<div></div>').parent().html());
    });
});
