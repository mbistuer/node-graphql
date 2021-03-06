export default`
  scalar Date
  type Auth {
    token: String!
  }
  type User {
  _id: ID!
  username: String
  email: String!
  firstName: String
  lastName: String
  avatar: String
  createdAt: Date!
  updatedAt: Date!
}
type Me {
  _id: ID!
  username: String
  email: String!
  firstName: String
  lastName: String
  avatar: String
  createdAt: Date!
  updatedAt: Date!
}
  type Tweet {
    _id: ID!
    user:User!
    favoriteCount:Int!
    text: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Status {
   message: String!
 }

  type Query {
    getTweets: [Tweet],
    getTweet(_id: ID!): Tweet,
    getUserTweets:[Tweet]
    me:Me
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!,password:String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
