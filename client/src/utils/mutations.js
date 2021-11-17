import gql from "graphql-tage";

//exporting LOGIN_USER mutation
export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user {
            _id
        }
    }
}`;
//exporting adding a user
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}`;
//exporting saving the book
export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!){
    saveBook(input: $input){
        _id
        username
        email
        bookCount
        savedBooks{
            # _id
            bookId
            authors
            link
            description
            image
            title
        }
    }
}`;

//exporting removing a book
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}`;