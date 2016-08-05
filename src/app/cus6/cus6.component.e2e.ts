describe('cus6', function() {

  beforeEach(function() {
    browser.get('');
  });

  it('should have an input', function() {
    expect(element(by.css('sd-app sd-cus5 form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', function() {
    expect(element(by.css('sd-app sd-cus5 ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', function() {
    element(by.css('sd-app sd-cus5 form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-app sd-cus5 form button')).click();
    expect(element(by.css('sd-app sd-cus5 ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });
});
