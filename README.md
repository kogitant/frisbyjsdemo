# Run tests

    npm test

This relies on this snipped found in package.json:

    "scripts": {
      "test": "./node_modules/.bin/jasmine-node spec"
    }


# Run all tests using globally installed jasmine-node

    jasmine-node spec/api/ --junitreport

# Run a single test

    jasmine-node spec/api/02_unordered_json_array_element_content_assert_spec.js

# Configure WebStorm to run all tests with node.js

![Webstorm node.js run configuration](/screenshots/WebStormNodeRunConfig.png?raw=true "Webstorm node.js run configuration")

# Configure WebStorm to run all tests with npm test

![Webstorm npm run configuration](/screenshots/WebStormNpmRunConfig.png?raw=true "Webstorm npm run configuration")
