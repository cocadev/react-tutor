# Tutor education app Strapi Integration

- [Tutor education app](#tutor-education-app)
- [Developing](#developing)
- [File structure](#file-structure)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Previous data](#previous-data)
- [Family-members scenario](#family-members-scenario)

# Tutor education app

CRA application

Main technologies - React, Redux, GraphQL(Apollo) Typescript, Material-UI.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Developing

1. Install dependencies - run `yarn install` from _root_ dir:
   ```sh
   yarn install
   ```
2. Start development server:
   ```sh
   yarn start
   ```
3. Build app:
   ```sh
   yarn build
   ```

## File structure


```
./
├── src/
│   ├── gql/
│   ├── assets/
│   ├── common/ - shared components
│   ├── features/ - files divided by feature (e.g. auth, home, profile...)
|   │   ├── ...
|   │   └── {feature}
|   │       ├── (gql/)?
|   |       |   ├── queries.ts
|   |       |   ├── mutations.ts
|   |       |   └── subscribtions.ts
|   │       ├── (redux/)?
|   |       |   ├── actions.ts
|   |       |   ├── types.ts
|   |       |   ├── saga.ts
|   |       |   ├── reducer.ts
|   |       |   └── ... 
|   │       ├── (components/)?
|   │       ├── (hooks/)?
|   │       ├── (ts/)?
|   │       ├── (utils/)?
|   │       └── ... 
│   ├── constants/
│   ├── store/
│   ├── ts-types/ - all shared typescript types
│   ├── utils/
│   └── ...
├── package/ - Other packages
├── ... - _other configuration files_.
├── package.json
├── README.md
└── yarn.json
```

The root of project contains common configuration file like _.gitignore_, _.eslintrc.json_.

## Scripts

| Script                       | Description                       |
| -----------------------------| ----------------------------------|
| `start`                      | start server in development mode  |
| `build`                      | build app                         |
| `test`                       | run tests                         |
| `eject`                      | eject webpack from cra            |
| `type-check`                 | run typescript types checking     |
| `format`                     | run prettier                      |
| `lint`                       | run eslint                        |


## Environment variables

| VAR                        | Description                        |
| ---------------------------| ---------------------------------- |
| `REACT_APP_API_URL`        | graphQl endpoint                   |
| `REACT_APP_APP_KEY`        | app key to detect student or tutor |

## Previous data

### [App link](https://dev.d3den9c10jhu20.amplifyapp.com/)

Please use the api/gateway for all requests.
Request URL should look this way

https://d-api-gateway.tuttify.io/users/graphql
https://d-api-gateway.tuttify.io/content/graphql

The docs you can see at:
edu-content-api - http://40.76.209.131/graphql
edu-users-api - http://40.87.14.43/graphql

We have the next authorization flow:
1. We should create a user using https://d-api-gateway.tuttify.io/users/graphql signUp mutation. The required fields are email, password and user_type (tutor, student).
2. Then we should sign in with new credentials using signIn mutation, get token and attach it as Bearer token to every other request.

## Family-members scenario

If a user wants to add a child:
- He clicks the button to add a child.
- He selects the type of a child he wants to add: minor or adult.
  Case “minor”:
1. User fills the form with minor child data
2. Submits the form -- the addMinorChild endpoint is called with child info (first_name, image_url, etc...)
   To see a list of minor children view the user's relations.children field.
3. To switch to one of them use the signInChild endpoint with child.id. It’ll return a token with child_id to help identify on the frontend which child is using the account at the moment.
   Case “adult”:
1. User enters child’s email
2. The email with a link like this https://dev.dtjo3dgos5j.amplifyapp.com/signup?parent=23423432 is sent. The link will redirect to the basic sign up page. Except the parent’s encrypted id from the link parameters will be passed to the signUp endpoint as long as the main user info.
3. User will be created on the backend as well, parent’s id will be written in the relations.parent field.
   To see the parent of a user use the getParent endpoint.
   To see a list of adult children use the getAdultChildren endpoint.

User flow:
1) To create organization:
   Only superadmin can create organization.
   We have default superadmin:
   email: "admin@blipiq.com",
   password: "Pass1234"
1. Use createOrganization endpoint.
2. Along with the creation of organization we should create an admin for the organization. Both the admin and organization info is passed into createOrganization.
3. Then the login info is sent to the defined admin’s mail.
2) To join organization:
1. Sign up - a user without organization is created.
2. Get a list of organizations with the organizations endpoint.
3. Call updateUser endpoint to change org_id.
3) To assign admin role to user
1. Sign in as admin
2. View a list of users of the organization he belongs to with organizationUsers endpoint.
3. Assign a role to the user with the assignRole endpoint.
4. Finish
