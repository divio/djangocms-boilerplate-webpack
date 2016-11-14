#############################
djangocms-boilerplate-webpack
#############################


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
