interface Query {
  label:string
  query:string
}
interface QueryList {
  [key:number]: Query
}
const queries:QueryList = {
  1: {
    label: "Get All Posts",
    query: `
    {
      posts {
        count, results {
          createdAt,
          updatedAt,
          ACL,
          content,
          likes,
        }
      }
    }
    `,
  }, 2: {
    label: "Get Posts with tag \"assumption\"",
    query: `
    {
      posts(where: {
        tags: {
          in: ["assumption"]
        }
      }) {
        results {
          content
        }
      }
    }
    `,
  }, 3: {
    label: "Login with username & password",
    query: `
    mutation LogIn{
      logIn(fields:{
        username: "somefolk"
        password: "somepassword"
      }){
        id,
        createdAt,
        updatedAt,
        username,
        sessionToken
      }
    }
    `
  }, 4: {
    label: "Sign up a duplicate user",
    query: `
    mutation SignUp{
      signUp(fields:{
        username: "somefolk"
        password: "somepassword"
      }){
        id
        createdAt
        sessionToken
      }
    }
    `,
  }
};

export { queries };