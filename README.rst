Frontend Plugins Communications
===============================
| |Status| |license|

.. |Status| image:: https://img.shields.io/badge/status-maintained-31c653
.. |license| image:: https://img.shields.io/badge/license-AGPL--3.0-orange.svg

Purpose
-------

The MFE communications will use plugins to be installed with this we should update the plugins instead of the MFE

Plugins list
------------

- **communications-app-body-email-form**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-body-email-form>`_
- **communications-app-individual-emails**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-individual-emails>`_
- **communications-app-instructions-pro-freading**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-instructions-pro-freading>`_
- **communications-app-recipients-checks**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-recipients-checks>`_
- **communications-app-schedule-section**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-schedule-section>`_
- **communications-app-subject-form**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-subject-form>`_
- **communications-app-task-alert-modal**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-task-alert-modal>`_
- **communications-app-team-emails**: `NPM Package <https://www.npmjs.com/package/@edunext/plugins-communications-app-team-emails>`_




Getting Started
---------------

You can install the plugins locally by running these following commands

1. Clone the branch with the plugins

   .. code-block:: bash

      git clone -b jv/feat-send-team-emails-pluggable https://github.com/eduNEXT/frontend-app-communications.git
      cd frontend-app-communications

   If you already have `frontend-app-communications`:

   .. code-block:: bash

      cd frontend-app-communications
      git remote add edunext https://github.com/eduNEXT/frontend-app-communications.git
      git fetch edunext jv/feat-send-team-emails-pluggable
      git checkout jv/feat-send-team-emails-pluggable

2. Install the plugins

   .. code-block:: bash

      npm install --legacy-peer-deps "@openedx-plugins/communications-app-body-email-form@npm:@edunext/plugins-communications-app-body-email-form@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-individual-emails@npm:@edunext/plugins-communications-app-individual-emails@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-instructions-pro-freading@npm:@edunext/plugins-communications-app-instructions-pro-freading@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-recipients-checks@npm:@edunext/plugins-communications-app-recipients-checks@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-schedule-section@npm:@edunext/plugins-communications-app-schedule-section@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-subject-form@npm:@edunext/plugins-communications-app-subject-form@^1.0.0"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-task-alert-modal@npm:@edunext/plugins-communications-app-task-alert-modal@^1.0.1"
      npm install --legacy-peer-deps "@openedx-plugins/communications-app-team-emails@npm:@edunext/plugins-communications-app-team-emails@^1.0.1"

3. Start the MFE

   .. code-block:: bash

      cd frontend-app-communications
      npm start



Production environment
----------------------

For production, you can create a Tutor plugin with the following configuration:

.. code-block:: python

    from tutor import hooks

    hooks.Filters.ENV_PATCHES.add_items(
        [
            (
                "mfe-dockerfile-post-npm-install-communications",
                """
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-body-email-form@npm:@edunext/plugins-communications-app-body-email-form@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-individual-emails@npm:@edunext/plugins-communications-app-individual-emails@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-instructions-pro-freading@npm:@edunext/plugins-communications-app-instructions-pro-freading@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-recipients-checks@npm:@edunext/plugins-communications-app-recipients-checks@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-schedule-section@npm:@edunext/plugins-communications-app-schedule-section@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-subject-form@npm:@edunext/plugins-communications-app-subject-form@^1.0.0"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-task-alert-modal@npm:@edunext/plugins-communications-app-task-alert-modal@^1.0.1"
                RUN npm install --legacy-peer-deps "@openedx-plugins/communications-app-team-emails@npm:@edunext/plugins-communications-app-team-emails@^1.0.1"
                """
            ),
        ]
    )


Recommendations
---------------

For now, the plugins need to be transpiled by Babel to generate the configuration. Each plugin has a file called "Makefile" that will generate the transpiled version of the plugin.

After installing dependencies of the plugin:

.. code-block:: bash

    cd pluginname
    npm run install
    make build

The Makefile will create a folder called "package" that will be the npm package to be updated to npm, and another folder called "dist" that will be the transpiled version of the plugin.

