# Micro-Frontend Project

This project demonstrates a micro-frontend architecture using React, TypeScript, Webpack, and Tailwind CSS. The project consists of two applications: `host-app` and `remote-app`. The `host-app` exposes a component that is consumed by the `remote-app`.

## Project Structure
host-app/ .babelrc .gitignore compilation.config.js package.json postcss.config.js src/ App.tsx components/ Header.tsx index.html index.scss index.ts tailwind.config.js tsconfig.json webpack.config.js remote-app/ .babelrc .gitignore compilation.config.js package.json postcss.config.js src/ App.tsx index.html index.scss index.ts tailwind.config.js tsconfig.json webpack.config.js


## Setup

1. Clone the repository.
2. Navigate to the `host-app` directory and install dependencies:
   ```sh
   cd host-app
   npm install
3. Navigate to the remote-app directory and install dependencies:
   cd remote-app
   npm install

Running the Applications

1. Start the host-app:
    cd host-app
    npm start
This will start the host-app on http://localhost:3000.

2. Start the remote-app:
    cd remote-app
    npm start

This will start the remote-app on http://localhost:3001.


Tailwind CSS Integration Issue
Initially, there was an issue where Tailwind CSS classes from the host-app were not being applied in the remote-app. This was because the Tailwind CSS configuration was not shared between the two applications. The issue was resolved by ensuring that both applications are correctly configured with Tailwind CSS and that the necessary paths are included in the tailwind.config.js files of both applications.

Example Component Sharing
The host-app exposes a Header component which is consumed by the remote-app. This is achieved using Webpack's Module Federation Plugin.

License
This project is licensed under the MIT License.