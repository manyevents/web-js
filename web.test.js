const web = require("./web");
const validate = require('jsonschema').validate;
const fs = require('node:fs');

const data = fs.readFileSync('output-schema.json', 'utf8');

const outputSchema = JSON.parse(data);

test("Expect schema valid", () => {
    const result = web.makeOutputUnit();
    console.log("Output", result);
    const validateResult = validate(result, outputSchema);

    try {
        expect(validateResult.valid).toBeTruthy();
    } catch (error) {
        console.log('Test Context:', { errors: validateResult.errors });
        throw error;
    }
});
