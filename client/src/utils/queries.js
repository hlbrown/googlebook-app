import gql from 'graphql-tag';

//exporting gettign the user
export const GET_ME = gql`
{
    me{
        _id
        username
        email
        bookCount
        saveBooks {
            bookId
            authors
            description
            title
            link
            image
        }
    }
}`;