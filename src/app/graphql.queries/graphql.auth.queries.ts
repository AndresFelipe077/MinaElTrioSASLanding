import { gql } from 'apollo-angular';

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const REGISTER_MUTATION = gql`
mutation RegisterUser($input: RegisterUserInput!) {
  register(userInput: $input) {
    id
    email
    userName
  }
}
`;

export { LOGIN_QUERY, REGISTER_MUTATION };
