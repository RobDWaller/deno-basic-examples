# Import and Export Modules

Deno by default standardizes the way modules are imported in both JavaScript and TypeScript. It follows the ECMAScript 6 `import/export` standard with one minor caveat, the file type must be included at the end of import statement.

```js
import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";
```

Dependencies are also imported directly, there is no package management overhead. Local modules are imported in exactly the same way as remote modules. As the examples show below, the same functionality can be produced in the same way with local and remote modules.

## Local Import

In this example the `add` and `multiply` functions are imported from a local `aritmetic.ts` module. 

**Command:** `deno run src/import-module/local.ts`
```ts
import { add, multiply } from "../modules/arithmetic.ts";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

/**
 * Output
 * 
 * 60
 * 82.8
 */
```

## Export

In the example above the `add` and `multiply` functions are imported from a locally stored arithmetic module. To make this possible the functions stored in the arithmetic module must be exported. 

This is simple to do, just add the keyword `export` to the beginning of the function signature as is shown below. 

```ts
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
```

All functions, classes, constants and variables which need to be accessible inside other modules must be exported. Either by prepending them with the `export` keyword or including them in an export statement at the bottom of the file.

To find out more on ECMAScript Export functionality please read the [MDN Documentation]().

## Remote Import

In the local import example above an `add` and `multiply` method are imported from a locally stored arithmetic module. The same functionality can be created by importing `add` and `multiply` methods from remote modules.

In this case the Ramda module is referenced, including the version number. In addition, note a JavaScript module is imported directly into a TypeSript module. Deno has no problem handling this. 

**Command:** `deno run src/import-module/remote.ts`
```ts
import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

/**
 * Output
 * 
 * 60
 * 82.8
 */
```

## Managing Dependencies

In Deno there is no concept of a package manager and this raises the question of how to manage remote dependencies. In big projects with many dependencies it will become cumbersome to update modules if they are imported individually into individual modules. 

The standard practice for solving this problem in Deno is to create a `deps.ts` file. All required remote dependencies are referenced in this file and the required methods and classes are re-exported. The dependent local modules then reference the `deps.ts` rather than the remote dependencies directly.

This enables easy updates to modules across a large codebase and solves the 'package manager problem'. Dev dependencies can also be managed in a seperate `dev_deps.ts` file.

```ts
/** 
 * deps.ts re-exports the required methods from the remote Ramda module.
 **/
export {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";
```
In this example the same functionality is created as is the case in the local and remote import examples above. But in this case instead of the Ramda module being referenced directly in the dependent module it is referenced by proxy using the local `deps.ts` module.

**Command:** `deno run src/import-module/dependencies.ts`

```ts
import {
  add,
  multiply,
} from "../../deps.ts";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

/**
 * Output
 * 
 * 60
 * 82.8
 */
```