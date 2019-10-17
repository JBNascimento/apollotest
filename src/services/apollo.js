import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
    uri: 'https://api.github.com/graphql',
    request: operation => {
      const token ="529b1e2cca6cd7ee6c21db6b12c4bc6e2a2e0a54";
      if (token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
      }
    }
  });