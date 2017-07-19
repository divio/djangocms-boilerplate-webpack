*************
What's inside
*************

.. note::

    This Boilerplate includes and configures a number of components.


Webpack & Babel
===============

For JavaScript bundling and preprocessing we use `Webpack
<http://webpack.github.io>`_, `Babel <http://babeljs.io>`_ with ES2015 preset
and some essential plugins for smaller builds and easier testing.

We use Gulp as a wrapper around Webpack for consistency.

Sass
====

For CSS pre-processing, we use `Sass <http://sass-lang.com>`_.
In particular, we use:

* `LibSass <http://libsass.org/>`_ for fast SASS compilation
* `Gulp JS <http://gulpjs.com/>`_ and the `gulp-sass
  <https://github.com/dlmanning/gulp-sass>`_ plugin to compile SASS files
* the official `Sass port <https://github.com/twbs/bootstrap-sass>`_ of
  Bootstrap

All styles should be created in ``/private/sass``, and will be compiled to
``/static/css``.

.. Note::

    We do not use Webpack capabilities for bundling CSS by default, but it is
    not forbidden.

Bootstrap
=========

The full `Bootstrap library <http://getbootstrap.com>`_ is imported via the
`Sass component <https://github.com/divio/djangocms-boilerplate-webpack/blob/master/private/sass/libs/_bootstrap.scss>`_
and the `JavaScript component <https://github.com/divio/djangocms-boilerplate-webpack/blob/master/static/js/libs/bootstrap.min.js>`_.

.. note::

    django CMS Boilerplate Webpack uses the default 12 column based grid setting.
    You can change this setting in ``private/sass/settings/_bootstrap.scss``.


The `Glyhpicon <http://getbootstrap.com/components/#glyphicons>`_ icon set has
been `disabled <https://github.com/divio/djangocms-boilerplate-webpack/blob/master/private/sass/libs/_bootstrap.scss#L14>`_
in favour of the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_
icon set.


JavaScript
==========

We are implementing the latest **3.x.x** versions of
`jQuery <http://jquery.com>`_ as they are released.

- http://jquery.com

In addition several commonly-used shims are available to you including:

- `The HTML5 Shiv <https://github.com/aFarkas/html5shiv>`_
- `Outdated Browser <http://outdatedbrowser.com>`_
- `console.log wrapper <https://developer.chrome.com/devtools/docs/console-api>`_


Gulp
----

We use `Gulp <http://gulpjs.com/>`_ to manage our frontend workflow.


Template Language
=================

As this is a django CMS based boilerplate, naturally we are using the
`Django template language
<https://docs.djangoproject.com/en/dev/topics/templates/>`_.

In order to implements assets efficiently,
`django-sekizai <https://github.com/ojii/django-sekizai>`_ and
`aldryn-snake <https://github.com/aldryn/aldryn-snake>`_ are implemented within
the ``base_root.html`` template. This gives you the
``{% addtoblock "js" %}{% endaddtoblock %}`` and
``{% addtoblock "css" %}{% endaddtoblock %}`` template tags in addition to the
django defaults.


Example
-------

.. code-block:: django

    {% load sekizai_tags %}
    {% addtoblock "css" %}<link href="{% static 'css/theme.css' %}" rel="stylesheet">{% endaddtoblock %}
    {% addtoblock "js" %}<script src="{% static 'libs/jquery.min.js' %}"></script>{% endaddtoblock %}

- http://docs.django-cms.org


Configuration
=============

There are several **configuration files** included such as:

- `EditorConfig <http://editorconfig.org/>`_ within  ``.editorconfig``
- `ESLint <http://eslint.org/>`_ within ``.eslintrc.json``
- `Stylelint <stylelint.io>`_ within ``.stylelintrc.json``

Please mind that they are ignored if your editor doesn't support them.
