# Hello World Example

Deno is a secure runtime for both JavaScript and TypeScript. As the hello world examples below highlight the same functionality can be created in JavaScript and TypeScript, and Deno will execute both. 

## JavaScript

In this JavaScript example we print the message `Hello [name]` to the console and we ensure the name provided is capitalized. 

**Command:** `deno run src/hello-world/index.js`

```js
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name) {
  return "Hello " + capitalize(name);
}

console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));

/** 
 * Output:
 * 
 * Hello John
 * Hello Sarah
 * Hello Kai
**/ 
```

## TypeScript

This TypeScript example is exactly the same as the JavaScript example above, the code just has the additional type information which TypeScript supports.

The `deno run` command is exactly the same, it just references a `*.ts` file rather than a `*.js` file.

**Command:** `deno run src/hello-world/index.ts`

```ts
function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name: string): string {
  return "Hello " + capitalize(name);
}

console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));

/** 
 * Output:
 * 
 * Hello John
 * Hello Sarah
 * Hello Kai
**/ 
```