*****************
Integration Tests
*****************


Configuration
=============

The main configuration file to look at is ``/tests/integration/index.js``.

All spec files should be placed in ``/tests/integration/`` and referenced in ``index.js``.
So, the file organisation structure is:

.. code-block:: text

    tests/
    └─ integration/
       ├─ index.js (entry file)
       ├─ index.bundle.js (compiled by webpack automatically)
       ├─ test-name-1.js
       └─ test-name-2.js

The specs that will be launched are defined in the ``index.js``. They can be
specified using command arguments:

.. code-block:: bash

    gulp tests:integration --tests=test1,test2

By default all specs inside ``/tests/integration/`` folder will be launched.
