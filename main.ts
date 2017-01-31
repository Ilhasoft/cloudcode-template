/// <reference path="../typescript-support/typings/parse.d.ts" />

const YourClass = Parse.Object.extend('YourClass');

// Validates a new post
Parse.Cloud.beforeSave('YourClass', (request, response) => {
    response.success();
});

Parse.Cloud.beforeDelete('YourClass', (request, response) => {
    response.success()
});

/**
 * Returns the same greeting passed as parameter
 *
 * @param {string} greeting - The greeting you want to return back
 */
Parse.Cloud.define('myNewFunction', (request, response) => {
    const greeting = request.params['greeting'] as string
    response.success(greeting)
});
