# Vee

# Grants Dashboard Technical Requirements

## Overview
The Grants Dashboard is a platform designed to display grant opportunities and manage historical grants. The application consists of two main views:
- **Card View**: Displays current grant opportunities.
- **Table View**: Shows previously approved grants.

Users can interact with the grants by providing feedback and managing their visibility.

## Requirements

### Backend (BE)
- **Framework**: Use the [NestJS](https://nestjs.com/) framework.
- **GraphQL**: Implement the API using a schema-first approach, following best practices.
- **Language**: TypeScript.
- **Persistence**: Postgres
- **Containerization**: Wrap the backend with a Docker container.

### Frontend (FE)
- **Framework**: Use any flavor of React.js.
- **Interactivity**:
  - Add 👍 and 👎 buttons on the grant cards.
  - On clicking:
    - 👍: Allow users to submit feedback as text. Upon submission:
      - Save the feedback.
      - Move the grant opportunity to the **Previous Grants Table**.
    - 👎: Allow users to submit feedback as text. Upon submission:
      - Save the feedback.
      - Remove the grant opportunity from the **Card View**.
- **Design**:
  - The exact design is not critical.
  - Use any component library to achieve the general concept.

### General Requirements
- Ensure both BE and FE can be run locally.
- Follow best practices for organizing state and components in the frontend.

## Getting Started

### Backend Setup
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```bash
   npm install

## Prerequisites

- [Node](https://nodejs.org/de/blog/announcements/v18-release-announce/)
  - It is recommended to use [nvm](https://github.com/nvm-sh/nvm) or something similar
- [Hasura](https://hasura.io/docs/2.0/index/)
- [Docker](https://www.docker.com/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- For the VSCode users, it is recommended to install the suggested plugins when you open the project the first time

## Getting Started

Install packages

- Clone this repo

- Install Hasura with the command: </br>
  `curl -L <https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh> | bash`

- `npm install`

## Firing it up :fire:

In a tiled terminal or similar run in separate terminals:

- `npm run infra` will run all services and the nestjs backend (vee-be)
- `npm run hasura`
- `npm start` run the ui (vee)

## INFO

- The nestjs backend is integrated to hasura as a remote schema so a unified graphql api is generated on hasura to have (if wanted),
  a single url and place for all graphql queries. Can be used for external business and complex logic, on a different schema (as implemented on this repo), on a different database, for external api calls etc...
  \*/

## Reset Infrastructure

- `npm run reset-infra`

## Generate graphql types, queries/mutations

- `npm run codegen`

## Sample Data

Populate db with sample data

- `npm run seed`

Remove image of backend (if made changes to the code)

- `npm run docker-clear`

## Shared Libs

- on the vee-shared libs there are some shared (to all the monorepo) types and also components for the ui

## Useful Links

- [Nx Documentation](https://nx.dev)
- [Hasura Documentation](https://hasura.io/docs/2.0/index/)
- [Practical React Query Guide (TkDodo's blog)](https://tkdodo.eu/blog/practical-react-query)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve vee
```

To create a production bundle:

```sh
npx nx build vee
```

To see all available targets to run for a project, run:

```sh
npx nx show project vee
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
