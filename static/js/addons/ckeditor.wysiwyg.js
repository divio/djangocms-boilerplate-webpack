/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/divio/djangocms-boilerplate-webpack
 */

// #############################################################################
// CKEDITOR
/**
 * Default CKEDITOR Styles
 * Added within src/settings.py CKEDITOR_SETTINGS.stylesSet
 *
 * @module CKEDITOR
 */
/* global CKEDITOR */

CKEDITOR.allElements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'];
CKEDITOR.stylesSet.add('default', [
    /* Block Styles */
    { name: 'Text Lead', element: 'p', attributes: { class: 'lead' } },
    { name: 'Text NoWrap', element: 'p', attributes: { class: 'text-nowrap' } },

    { name: 'Spacer', element: 'div', attributes: { class: 'spacer' } },
    { name: 'Spacer Small', element: 'div', attributes: { class: 'spacer-xs' } },
    { name: 'Spacer Large', element: 'div', attributes: { class: 'spacer-lg' } },
    { name: 'Spacer Zero', element: 'div', attributes: { class: 'spacer-zero' } },

    { name: 'List Unstyled', element: 'ul', attributes: { class: 'list-unstyled' } },
    { name: 'List Inline', element: 'ul', attributes: { class: 'list-inline' } },
    { name: 'Horizontal Description', element: 'dl', attributes: { class: 'dl-horizontal' } },

    { name: 'Table', element: 'table', attributes: { class: 'table' } },
    { name: 'Table Responsive', element: 'table', attributes: { class: 'table table-responsive' } },
    { name: 'Table Striped', element: 'table', attributes: { class: 'table table-striped' } },
    { name: 'Table Bordered', element: 'table', attributes: { class: 'table table-bordered' } },
    { name: 'Table Hover', element: 'table', attributes: { class: 'table table-hover' } },
    { name: 'Table Condensed', element: 'table', attributes: { class: 'table table-condensed' } },

    { name: 'Table Cell Active', element: 'td', attributes: { class: 'active' } },
    { name: 'Table Cell Success', element: 'td', attributes: { class: 'success' } },
    { name: 'Table Cell Warning', element: 'td', attributes: { class: 'warning' } },
    { name: 'Table Cell Danger', element: 'td', attributes: { class: 'danger' } },
    { name: 'Table Cell Info', element: 'td', attributes: { class: 'info' } },

    /* Inline Styles */
    { name: 'Text Primary', element: 'span', attributes: { class: 'text-primary' } },
    { name: 'Text Success', element: 'span', attributes: { class: 'text-success' } },
    { name: 'Text Info', element: 'span', attributes: { class: 'text-info' } },
    { name: 'Text Warning', element: 'span', attributes: { class: 'text-warning' } },
    { name: 'Text Danger', element: 'span', attributes: { class: 'text-danger' } },
    { name: 'Text Muted', element: 'span', attributes: { class: 'text-muted' } },

    { name: 'Image Responsive', element: 'img', attributes: { class: 'img-responsive' } },
    { name: 'Image Rounded', element: 'img', attributes: { class: 'img-rounded' } },
    { name: 'Image Circle', element: 'img', attributes: { class: 'img-circle' } },
    { name: 'Image Thumbnail', element: 'img', attributes: { class: 'img-thumbnail' } },

    { name: 'Pull Left', element: 'div', attributes: { class: 'pull-left' } },
    { name: 'Pull Right', element: 'div', attributes: { class: 'pull-right' } },

    { name: 'Blockquote Reverse', element: 'blockquote', attributes: { class: 'blockquote-reverse' } },
]);

/*
 * Extend ckeditor default settings
 * DOCS: http://docs.ckeditor.com/#!/api/CKEDITOR.dtd
 */
CKEDITOR.dtd.$removeEmpty.span = 0;
