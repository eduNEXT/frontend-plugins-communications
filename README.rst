Frontend Plugins Communications
===============================
| |Status| |license|

.. |Status| image:: https://img.shields.io/badge/status-maintained-31c653
.. |license| image:: https://img.shields.io/badge/license-AGPL--3.0-orange.svg

Purpose
-------

As part of the `Frontend Pluggability Summit <https://discuss.openedx.org/t/frontend-pluggability-summit/11167>`_ in late 2023, the Open edX community was encouraged to adopt a new extensions mechanism for MFEs in the Open edX ecosystem. Therefore,
this initiative of extending the Communications MFE was born. The idea is to use one of the extension mechanisms presented in the summit, in our case, it's the UI Slots approach, to make the MFE more suitable across the board for community usage, making the extending MFE more maintainable in the long run. `Here is the implementation <https://github.com/openedx/frontend-app-communications/pull/184>`_ of the extensions mechanism mentioned above. In that Pull Request, the bulk email form is divided into small pieces called "slots" where the plugins will be hooked at build time. 

Plugins List
------------

**communications-app-body-email-form**
   :NPM Package: `communications-app-body-email-form <https://www.npmjs.com/package/@edunext/plugins-communications-app-body-email-form>`_
   :Description: Contains the text editor for sending emails in the MFE communications.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/body_form_plugin.png
        :alt: communications-app-body-email-form Image

**communications-app-individual-emails**
   :NPM Package: `communications-app-individual-emails <https://www.npmjs.com/package/@edunext/plugins-communications-app-individual-emails>`_
   :Description: Custom plugin not in the default communications MFE. This contains a checkbox to add specific student emails; it has an autocomplete field to filter them by username, email, or student name.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/individual_learners_plugin.png
        :alt: communications-app-individual-emails Image

**communications-app-instructions-proof-reading**
   :NPM Package: `communications-app-instructions-proof-reading <https://www.npmjs.com/package/@edunext/plugins-communications-app-instructions-proof-reading>`_
   :Description: Recommendations for sending an email in the communications MFE are down to the text editor.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/proofreading_plugin.png
        :alt: communications-app-instructions-proof-reading Image

**communications-app-recipients-checks**
   :NPM Package: `communications-app-recipients-checks <https://www.npmjs.com/package/@edunext/plugins-communications-app-recipients-checks>`_
   :Description: Contains the list of recipients to email in the communications MFE.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/recipients_plugin.png
        :alt: communications-app-recipients-checks Image

**communications-app-schedule-section**
   :NPM Package: `communications-app-schedule-section <https://www.npmjs.com/package/@edunext/plugins-communications-app-schedule-section>`_
   Description: A section with an option to schedule an email on a specific date and time.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/schedule_section_plugin.png
        :alt: communications-app-schedule-section Image

**communications-app-subject-form**
   :NPM Package: `communications-app-subject-form <https://www.npmjs.com/package/@edunext/plugins-communications-app-subject-form>`_
   :Description: Contains the field `subject` in the email form.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/subject_plugin.png
        :alt: communications-app-subject-form Image

**communications-app-task-alert-modal**
   :NPM Package: `communications-app-task-alert-modal <https://www.npmjs.com/package/@edunext/plugins-communications-app-task-alert-modal>`_
   :Description: When the email form is submitted, shows an alert to confirm the information to be sent in the email; this alert contains the field `subject` from the email form.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/alert_modal_plugin.png
        :alt: communications-app-task-alert-modal Image

**communications-app-team-emails**
   :NPM Package: `communications-app-team-emails <https://www.npmjs.com/package/@edunext/plugins-communications-app-team-emails>`_
   :Description: Not in the default communications MFE. This plugin contains a list of checkboxes to add specific teams as email recipients; when sent the email will be sent to all the students in the teams selected.
   :Image: 
    .. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/teams_plugin.png
        :alt: communications-app-team-emails Image



Getting Started
---------------

You can install the plugins locally by running the following commands:

1. Clone the branch with the plugins

   .. code-block:: bash

      git clone -b jv/feat-send-team-emails-pluggable https://github.com/eduNEXT/frontend-app-communications.git
      cd frontend-app-communications

   If you already have ``frontend-app-communications``:

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



How to Create a New Plugin
--------------------------

1. Clone the branch with the default pluggable plugin:

   .. code-block:: bash

      git clone -b jv/pluggable-component-slot https://github.com/eduNEXT/frontend-app-communications.git
      cd frontend-app-communications

   If you already have ``frontend-app-communications``:

   .. code-block:: bash

      cd frontend-app-communications
      git remote add edunext https://github.com/eduNEXT/frontend-app-communications.git
      git fetch edunext jv/pluggable-component-slot
      git checkout jv/pluggable-component-slot

2. Create a new plugin:

   2.1 Create a new folder inside this folder ``/plugins/communications-app``

   The plugin must have an  ``index.jsx`` and ``package.json`` file.

   .. code-block:: bash

      cd /plugins/communications-app && mkdir -p PluginExample

  2.2 Create a new file inside this folder ``/plugins/communications-app/PluginExample`` 
   ``package.json``  with the following content:

   .. code-block:: json

        {
            "name": "@openedx-plugins/communications-app-example-plugin",
            "version": "1.0.0",
            "description": "",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "peerDependencies": {
                "@edx/frontend-app-communications": "*",
                "@edx/frontend-platform": "*",
                "@edx/paragon": "*",
                "prop-types": "*",
                "react": "*"
            },
            "peerDependenciesMeta": {
                "@edx/frontend-app-communications": {
                    "optional": true
                }
            },
            "author": "",
            "license": "ISC"
        }

   and an  ``index.jsx`` file with this content:

   .. code-block:: jsx

        import React from 'react';

        const PluginExample = () => (
            <div style={{ backgroundColor: 'red', padding: 16 }}>
                <h1 style={{ color: 'white' }}>
                    @openedx-plugins/communications-app-example-plugin
                </h1>
            </div>
        );

        export default PluginExample;


3. Use the plugin with the extension mechanism:

   Go to  ``src/components/page-container`` and add the following code:

   .. code-block:: jsx

        import PluggableComponent from '../PluggableComponent';

   Then add it somewhere in this example; it will be in the container:

   .. code-block:: jsx

        <div className="pb-3 container">

            <PluggableComponent
                id="example-plugin"
                as="communications-app-example-plugin"
            />
            <main id="main-content">{children}</main>
        </div>

4. Install the plugin in the ``package.json`` of the MFE, in this case, the communications MFE.
   Add this to your dependencies:

   .. code-block:: json

        {
            "dependencies": {
                ...other dependencies
                "@openedx-plugins/communications-app-example-plugin": "file:plugins/communications-app/PluginExample"
            }
        }

   Then install the dependency:

   .. code-block:: bash

        npm install @openedx-plugins/communications-app-example-plugin

5. Run the MFE:

   .. code-block:: bash

        npm start

Now you should see something like this:

.. image:: https://raw.githubusercontent.com/eduNEXT/frontend-plugins-communications/main/screenshots/example_plugin.png
   :alt: Plugin Example Image




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

For now, the plugins need to be transpiled by Babel to generate the configuration. Each plugin has a file called  ``"Makefile"`` that will generate the transpiled version of the plugin.

After installing dependencies of the plugin:

.. code-block:: bash

    cd pluginname
    npm run install
    make build

The Makefile will create a folder called ``"package"`` that will be the npm package to be updated to npm, and another folder called ``"dist"``  that will be the transpiled version of the plugin.

