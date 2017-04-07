*******
Private
*******

.. note::

    Let's have a closer look at the **Sass** setup within ``/private`` and
    explain how we structured the code in there. These principles can be
    expanded to other preprocessors options such as **Less** or **HAML**.

Every folder within ``/private/sass`` has a file called **_all.scss**.
This file ultimately gets imported by ``/private/sass/base.scss`` which gets
compiled into ``/static/css/base.css``. Update the *_all.scss* file to include
additional modules. To keep the file simple, do not include files directly
within *base.scss*.

Let's cover the folders individually:


components/
===========

If a component is plug-and-playable, it probably belongs in here. Good examples
are jQuery plugins or django CMS addons. Sometimes larger application such as a
shop might also be pluggable.


libs/
=====

All independent files are placed within this folder. This implies that the
order of inclusion does not matter within ``/sass/libs/_all.scss``.

.. hint::

    Libraries are, in their very core, plug-and-playable. The main difference
    between libraries and other plug-and-play components is, that if a
    library is removed, things will break.


mixins/
=======

This folder is used to store additional functions or mixins which are not part
of the default bootstrap eco-system.

We provide already some helper functions such as ``em(12px, 16px)`` that
calculates the pixel values from a given size in relation to the parent size.

Additionally we have mixins for managing `z-index` layers and `hide-content`.


settings/
=========

It is very useful to store values, that are used more than twice, within their
own variable. We even encourage storing **all colour values** within the
settings. **Don't repeat yourself**. Create a sub-structure, similar to
``/sites`` if the structure becomes more complex.

.. warning::

    Do **not** add additional variables to ``/private/sass/settings/_bootstrap.scss``.
    This file is reserved for **Bootstrap-only** variables. Use
    ``/private/sass/settings/_custom.scss`` instead.
