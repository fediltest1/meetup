describe('Front-End.IL Meetup Demo App', function() {

    it('should have a title', function() {
        browser.get('http://localhost:8282/app/index.html');
        expect(browser.getTitle()).toEqual('Front-End.IL');
    });

    it('should open login page by default', function() {
        browser.get('http://localhost:8282/app/index.html');
        expect(browser.getLocationAbsUrl()).toBe('/login');
    });

});
