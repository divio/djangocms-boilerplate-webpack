************
Installation
************

.. note::

    The following dependencies should be installed on your system in order to
    work with this Boilerplate.

- Node JS: http://nodejs.org/
- Gulp: http://gulpjs.com/

You can find most installation steps within
`osx-bootstrap <https://github.com/divio/osx-bootstrap>`_ but in short:

#. run ``brew install node`` when using `Homebrew <http://brew.sh/>`_
#. run ``curl -L https://npmjs.org/install.sh | sh``
#. run ``npm install -g gulp``

At last make sure you correctly configured your
`paths <https://github.com/divio/osx-bootstrap/blob/master/core/npm.sh#L16>`_.


Setup
=====

Run the following command to install all requirements from within the root of the package:

- ``npm install`` to install the requirements from ``package.json``


Gulp Commands
=============

All front-end related tasks are handled via the `Gulp <http://gulpjs.com/>`_
task runner:

- ``gulp sass`` compiles sass and splits critical from non-critical css
- ``gulp lint`` starts all linting services using ``.eslintrc.js`` and ``.stylelintrc.js``
- ``gulp webpack`` compiles javascript
- ``gulp icons`` generates an svg-sprite
- ``gulp optimise`` optimises images within ``/static/img`` and svgs within ``/private/svg``

For generic usage use:

- ``gulp default`` runs the default gulp commands
- ``gulp watch`` runs the gulp watch defaults
- ``gulp build`` this is the command that is also run on Divio Cloud when deploying

.. note::

    You can append ``--debug`` to almost all of the commands to enable debugging,
    sourcemaps, disable minification and more.

For a full set of commands checkout the tasks inside the ``Gulpfile.js``.

We love code over configuration.
