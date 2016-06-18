# Install node modules

    npm install --save-dev jasmine-node

# Install jasmine-node globally

    akmac:frisbyjsdemo ak$ sudo npm install -g jasmine-node
    ...
    /usr/local/bin/jasmine-node -> /usr/local/lib/node_modules/jasmine-node/bin/jasmine-node
    jasmine-node@1.14.5 /usr/local/lib/node_modules/jasmine-node
    ├── mkdirp@0.3.5
    ├── underscore@1.8.3
    ├── walkdir@0.0.11
    ├── coffee-script@1.10.0
    ├── requirejs@2.2.0
    ├── jasmine-reporters@1.0.2
    ├── jasmine-growl-reporter@0.0.3 (growl@1.7.0)
    └── gaze@0.3.4 (minimatch@0.2.14, fileset@0.1.8)

# Run all tests

    jasmine-node spec/api/ --junitreport

# Run a single test

    jasmine-node spec/api/second_spec.js

# Configure WebStorm to run all tests

![Webstorm run configuration](/screenshots/WebstormRunConfiguration.png?raw=true "Webstorm run configuration")
