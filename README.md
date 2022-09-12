# GraphQLFetch
A GraphQL fetch library in Javasript

## Installation

First, run the development server:

```bash
npm i graphql-api-fetch
```

## Usage

```js
import { GraphQLFetch } from 'graphql-api-fetch';

const QUERY = `
      query ($keyword: String){
        users(keyword: $keyword){
            users{
                id
                email
                firstName
                lastName
            }
        }
      }`;

GraphQLFetch({
            query: QUERY,
            variables: { keyword } // optional
        }).then((res) => {
            if (res.errors) {
                errors = res.errors.map((error) => error.message);
            }
            else usersData = res.data.users.users;
        });
```

## Contributers

- [@grvsh02](https://github.com/grvsh02)
