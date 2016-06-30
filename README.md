deploytool-yaml-config
==========

Load deploytool environments from a .yml file

## Installation

    npm install deploytool-yaml-config --save

## Usage

Place a .deploytool.yml file in your working directory, then in your application simply call something like this:

    var deploytool = require('deploytool');

    var environment = deploytool.environment.load('production');

## Contributing

Take care to follow the same patterns as other Deploytool modules.

Don't extend Deplyotool itself to add new deployment types. Simply create new modules
prefixed with **deploytool-** that has a "deploy" method in it.
