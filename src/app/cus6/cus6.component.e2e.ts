describe('cus6', function() {

  beforeEach(function() {
    browser.get('');
  });

  it('should have an input', function() {
<<<<<<< HEAD
    expect(element(by.css('sd-app sd-cus6 form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', function() {
    expect(element(by.css('sd-app sd-cus6 ul')).getText())
=======
    expect(element(by.css('sd-app sd-cus5 form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', function() {
    expect(element(by.css('sd-app sd-cus5 ul')).getText())
>>>>>>> ba7246921a54b202c653ea65c93cf635c937952a
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', function() {
<<<<<<< HEAD
    element(by.css('sd-app sd-cus6 form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-app sd-cus6 form button')).click();
    expect(element(by.css('sd-app sd-cus6 ul')).getText())
=======
    element(by.css('sd-app sd-cus5 form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-app sd-cus5 form button')).click();
    expect(element(by.css('sd-app sd-cus5 ul')).getText())
>>>>>>> ba7246921a54b202c653ea65c93cf635c937952a
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });
});
