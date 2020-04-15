/**
 * @flow
 * @relayHash 9aedafd54ee87f0cff36035b69ede2e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queries_submitPostMutationVariables = {|
  content?: ?string,
  likes?: ?number,
  tags?: ?$ReadOnlyArray<?any>,
  showComments?: ?boolean,
|};
export type queries_submitPostMutationResponse = {|
  +createPost: {|
    +id: string
  |}
|};
export type queries_submitPostMutation = {|
  variables: queries_submitPostMutationVariables,
  response: queries_submitPostMutationResponse,
|};
*/


/*
mutation queries_submitPostMutation(
  $content: String
  $likes: Float
  $tags: [Any]
  $showComments: Boolean
) {
  createPost(fields: {content: $content, likes: $likes, tags: $tags, showComments: $showComments}) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "likes",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "tags",
    "type": "[Any]",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "showComments",
    "type": "Boolean",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "fields",
        "fields": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
          },
          {
            "kind": "Variable",
            "name": "likes",
            "variableName": "likes"
          },
          {
            "kind": "Variable",
            "name": "showComments",
            "variableName": "showComments"
          },
          {
            "kind": "Variable",
            "name": "tags",
            "variableName": "tags"
          }
        ]
      }
    ],
    "concreteType": "Post",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "queries_submitPostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_submitPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "queries_submitPostMutation",
    "id": null,
    "text": "mutation queries_submitPostMutation(\n  $content: String\n  $likes: Float\n  $tags: [Any]\n  $showComments: Boolean\n) {\n  createPost(fields: {content: $content, likes: $likes, tags: $tags, showComments: $showComments}) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f20edcdfe13d3876a206a82433f670c7';

module.exports = node;
