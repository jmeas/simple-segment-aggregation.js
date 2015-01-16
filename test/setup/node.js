// Create our JSDom document
global.jsdom = require('jsdom').jsdom;
global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.parentWindow;
global.navigator = window.navigator = {
  userAgent: 'NodeJS JSDom',
  appVersion: ''
};

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

global._ = require('underscore');
global.moment = require('moment');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

global.fixtures = {};
global.fixtures.oneSegment = require('../fixtures/one-segment');
global.fixtures.noAggregation = require('../fixtures/no-aggregation');
global.fixtures.aggregation = require('../fixtures/aggregation');

// Load the library
global.SimpleSegmentAggregation = require('../../tmp/simple-segment-aggregation');
