# sRLY Token Migration Web Tool

A simple react web experience to help migrate from sRLY v2 (legacy) to sRLY v3 (new).

For questions about why the migration was necessary see FAQ at https://migration.rly.network/ or https://github.com/rally-dfs/token-migration-web/blob/main/src/components/faqs.tsx

This project can also serve as an additional example for how to use the RLY network suite of tools with Solana.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Locally and Packaging for Distribution

The project makes use of CRA env variable interpolation. You can see an example `.env` file in `.env.sample`. Ensure the necessary ENV variables are setup before running the following commands:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\