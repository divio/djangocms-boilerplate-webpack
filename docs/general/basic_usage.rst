###########
Basic usage
###########

Once installed in a Divio Cloud or django CMS project,
django CMS Boilerplate Webpack is ready to use.


===============
In your project
===============

See :doc:`/structure/templates` for guidelines on how to set up your project
templates so that they take advantage of what it has to offer.

Fundamentally, if your project's templates inherit from the
`base.html <https://github.com/divio/djangocms-boilerplate-webpack/blob/master/templates/base.html>`_
template, they'll be furnished with the classes, elements, hooks and other
things they need.


====================
In your applications
====================

Your applications, if they are aware of django CMS Boilerplate Webpack, can
also take advantage of it.

You could simply make your application assume that django CMS Boilerplate Webpack
will be available. That's not ideal though, because it will be
off-putting to people who don't want to have to use it. A reusable application
should have requirements that are as generic as possible, not based on a
particular frontend framework.

So, although it means a little more work for you, you should **also** provide
more generic frontend (templates, CSS etc) support for the application, and if
you like, for other Boilerplates too.

At the very least, the developers who use your application will find it easier
to create templates and static file for it that support their own frontend
conventions if they can start with simple ones.


Divio Cloud Boilerplates
========================

To make this easier, use the
`Aldryn Boilerplates <https://github.com/aldryn/aldryn-boilerplates>`_
application.

This provides support for multiple Boilerplates, allowing you to offer rich
frontend machinery compatible with django CMS Boilerplate Webpack for those who
want it, and generic frontend files for those who don't, in a way that the
correct set will automatically be chosen.

You can also add support for *other* Boilerplates, by adding the frontend
files to namespaced directories in your application. This example of an
application named `djangocms_addon` mentions only templates for sake of simplicity,
but the same principle applies to static files::

    djangocms_addon
    ├─ templates/  # the generic templates
    │  ├─ djangocms_addon/
    │  └─ base.html
    ├─ boilerplates/  # templates for particular Boilerplates
    │  └─ bootstrap3/
    │     └─ templates/
    │        ├─ djangocms_addon/
    │        └─ base.html
    └─ some_other_boilerplate/
       └─ templates/
          ├─ djangocms_addon/
          └─ base.html

See `Aldryn Boilerplates <https://github.com/aldryn/aldryn-boilerplates>`_
for more.
