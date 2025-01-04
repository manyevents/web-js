const web = require("./web");
test("Expect handle", () => {
    expect(web.handle()).toBe("hello");
});
