# web-app
## Setting up a development environment
1. Install Node.js at https://nodejs.org/en/download/.
2. Open a terminal in the project root.
3. Run "npm install" command.
4. Configure the VUE_APP_API_URL variable in .env.development to the URL of a locally hosted backend.
5. Run "npm run serve" command to start a development server and navigate to http://localhost:8080/ in a web browser.
<br />
<br />

## Preparing for production
1. Create a .env.production.local file in the project root.
2. Configure the VUE_APP_API_URL variable to the URL of the backend REST API server.
<br />
<br />
## Development commands
| Function             | Command                |
| :------------------- | :--------------------- |
| npm install          | Install dependencies   |
| npm run serve        | Run development server |
| npm run build        | Build for production   |
| npm run lint         | Run linter             |
| npm run test:cypress | Run end-to-end tests   |

<br />

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
