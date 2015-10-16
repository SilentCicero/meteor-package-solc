/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:solc',
  version: '0.1.5',
  summary: 'The Ethereum solidity compiler wrapped for MeteorJS. Browser solidity is a browser based solidity compiler.',
  git: 'https://github.com/SilentCicero/meteor-package-solc',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  Npm.depends({
    'solc': '0.1.5-1',
  });

  api.export(['solc'], ['server']);
  api.addFiles('package-init.js', 'server');
});