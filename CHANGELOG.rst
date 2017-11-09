#############################
djangocms-boilerplate-webpack
#############################

2.0.2 (unreleased)
==================

- Fixed data attributes for correct messages consumption in django CMS 3.5
- Added example for preoading fonts in ``base.html`` template
- Added json generation for icons plugins


2.0.1
=====

- Added an example of using web fonts
- Removed leftover FontAwesome references
- Fixed a problem with bundle splitting and IE11
- Added minification to sass files by default


2.0.0
=====

- Upgraded to Node 6.10
- Upgraded to latest Webpack version
- Complete overhaul to the gulp tasks and structure
- Simplified the ``private/sass`` structure
- Moved javascript to ``private/js`` and updated structure
- Deprecated font icons in favour of svg
- Updated linting tools now using ESLint and Stylelint
- Updated documentation
- Removed testing framework from boilerplate


1.2.1
=====

- Inherited gitignore from Divio Cloud


1.2.0
=====

- Add boilerplate-specific Dockerfile with node installation


1.1.2
=====

- Pinned ``exports-loader`` package for compatibility


1.1.1
=====

- Fixed an issue with ``404.html`` inheriting from ``fullwidth.html``
- Removed ``fullwidth.html`` references from documentation


1.1.0
=====

- Fixed a bug when lint error could prevent other gulp tasks from running
- Load bootstrap and jquery from node modules, both for JavaScript and Sass
- Removed standard templates ``fullwidth.html``, ``sidebar_left.html``,
  ``sidebar_right.html`` and ``tpl_home.html`` and use ``base.html`` instead


1.0.1
=====

- Switch webpack to polling inside Aldryn Docker containers


1.0.0
=====

- Initial release
