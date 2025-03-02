'use strict';

const chai = require('chai');
const expect = chai.expect;
const path = require('path');

const webpack = require('../');

const file = path.join(__dirname, 'package-mains', 'dummy.js');


describe('packageMains', function () {

  it('captures module', function () {
    expect(webpack.resolve('./module', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'module', 'src', 'index.js'));
  });

  it('captures jsnext', function () {
    expect(webpack.resolve('./jsnext', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'jsnext', 'src', 'index.js'));
  });

  it('captures module instead of jsnext', function () {
    expect(webpack.resolve('./module-and-jsnext', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'module-and-jsnext', 'src', 'index.js'));
  });

  it('captures webpack', function () {
    expect(webpack.resolve('./webpack', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'webpack', 'webpack.js'));
  });

  it('captures jam (array path)', function () {
    expect(webpack.resolve('./jam', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'jam', 'jam.js'));
  });

  it('uses configured packageMains, if provided', function () {
    expect(webpack.resolve('./webpack', file, { config: 'webpack.alt.config.js' })).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'webpack', 'index.js'));
  });

  it('always defers to module, regardless of config', function () {
    expect(webpack.resolve('./module', file, { config: 'webpack.alt.config.js' })).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'module', 'src', 'index.js'));
  });

  it('always defers to jsnext:main, regardless of config', function () {
    expect(webpack.resolve('./jsnext', file, { config: 'webpack.alt.config.js' })).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'jsnext', 'src', 'index.js'));
  });

});
