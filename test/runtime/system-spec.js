describe('a system', function () {

  var system = null;

  // init
  beforeEach(function () {
    if (typeof window === 'undefined') {
      runtime = require('../../src/runtime.js');
    }
    system = runtime.system('test5');
  });

  it('has a name', function () {
    expect(system.name()).toBe('test5');
  });

  it('has a description', function () {
    expect(typeof system.description()).toBe('string');
  });

  it('has a version', function () {
    expect(system.version()).toBeDefined();
  });

  it('has schemas', function () {
    expect(system.schemas()).toBeDefined();
  });

  it('has models', function () {
    expect(system.models()).toBeDefined();
  });

  it('has behaviors', function () {
    expect(system.behaviors()).toBeDefined();
  });

  it('has types', function () {
    expect(system.types()).toBeDefined();
  });

  it('has components', function () {
    expect(system.components()).toBeDefined();
  });

  it('can get its location', function () {
    var location = system.location();
    expect(location).toBeDefined();
  });

});