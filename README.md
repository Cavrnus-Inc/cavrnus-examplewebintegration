# Example Cavrnus Web Integration (example-integration)

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

## About

Almost all relevant example code is built into the main page [IndexPage.vue](src/pages/IndexPage.vue). The example is broken into three steps: Log in, select a space, then join a space. The last step includes some protocol to set up a streaming client, as well as a local connection to the same space in order to provide bi-directional communications with the live stream, as well as any other users in the space.