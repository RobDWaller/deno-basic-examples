# Import Local and Remote Modules

Deno by default standardizes the way modules are imported in both JavaScript and TypeScript. It follows the ECMAScript 6 `import/export` standard with one minor caveat, you must include the file type at the end of import statement.

```js
import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";
```

Dependencies are imported directly, there is no package management overhead. 