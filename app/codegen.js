module.exports = {
    "schema": [{
        "http://localhost:4000/v1/graphql": {
            "headers": {
                "x-hasura-admin-secret": ""
            }
        }
    }],
    "documents": [
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    "overwrite": true,
    "generates": {
        "./src/graphql/types.ts": {
            "plugins": [
                "typescript-common",
                "typescript-client"
            ]
        }
    }
};