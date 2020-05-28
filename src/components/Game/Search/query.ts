import { gql } from 'apollo-boost';

export default gql`
  query Characters($query: String!) {
    characters(filter: { name: $query }) {
      results {
        name
        image
        id
      }
    }
  }
`;
