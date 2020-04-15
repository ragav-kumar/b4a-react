/**
 * @flow
 * @relayHash b2546904b52908cb0477d244de84a85f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queries_GetAllPostsQueryVariables = {||};
export type queries_GetAllPostsQueryResponse = {|
  +posts: {|
    +count: number,
    +results: $ReadOnlyArray<{|
      +createdAt: any,
      +content: ?string,
      +likes: ?number,
      +showComments: ?boolean,
    |}>,
  |}
|};
export type queries_GetAllPostsQuery = {|
  variables: queries_GetAllPostsQueryVariables,
  response: queries_GetAllPostsQueryResponse,
|};
*/


/*
query queries_GetAllPostsQuery {
  posts {
    count
    results {
      createdAt
      content
      likes
      showComments
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "showComments",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queries_GetAllPostsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "PostFindResult",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_GetAllPostsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "PostFindResult",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "queries_GetAllPostsQuery",
    "id": null,
    "text": "query queries_GetAllPostsQuery {\n  posts {\n    count\n    results {\n      createdAt\n      content\n      likes\n      showComments\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e75fa148f84b8e0f90afafe766c2873';

module.exports = node;
