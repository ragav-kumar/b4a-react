/**
 * @flow
 * @relayHash da446786096d11f7caac2fad94a92b04
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queries_LogInMutationVariables = {|
  username: string,
  password: string,
|};
export type queries_LogInMutationResponse = {|
  +logIn: {|
    +id: string,
    +username: ?string,
    +sessionToken: string,
  |}
|};
export type queries_LogInMutation = {|
  variables: queries_LogInMutationVariables,
  response: queries_LogInMutationResponse,
|};
*/


/*
mutation queries_LogInMutation(
  $username: String!
  $password: String!
) {
  logIn(fields: {username: $username, password: $password}) {
    id
    username
    sessionToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logIn",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "fields",
        "fields": [
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ]
      }
    ],
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "sessionToken",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queries_LogInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_LogInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "queries_LogInMutation",
    "id": null,
    "text": "mutation queries_LogInMutation(\n  $username: String!\n  $password: String!\n) {\n  logIn(fields: {username: $username, password: $password}) {\n    id\n    username\n    sessionToken\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d24e4027dabd0c6b8ea380ad6b797be';

module.exports = node;
