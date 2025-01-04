/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        html: '',
        url: 'https://jestjs.io/query?hello=3&utm&myParam=hello#myhash',
        userAgent: 'Agent/007',
    },
};

module.exports = config;
