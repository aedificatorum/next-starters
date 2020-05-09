# Next.js with Tailwind CSS starter

This is a [Next.js] example that you can use with [`create-next-app`][create-next-app]. You'll get a next starter with:

- Tailwind CSS (with Purge CSS)
- TypeScript
- ESLint and Prettier

To get started:

```bash
npx create-next-app your-app-name --example https://github.com/aedificatorum/next-starters/tree/master/tailwind
```

## What got added?

### Tailwind CSS

A basic install of [Tailwind CSS] with Purge CSS configured to run for production builds (helping you keep your [file size under control]).

The stylesheet is imported globally and can be found in `styles\style.css`, and by default contains:

```css
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;
```

A basic `tailwind.config.js` exists which adds a new theme color, used as an example background color:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
    'palevioletred': '#DB7093'
    } 
  },
},

// index.js
<h1 className="bg-palevioletred">...</h1>
```

### TypeScript

Including examples of both pages (e.g. `index.ts`) and an API route (e.g. `hello.ts`).

The project's `baseUrl` has also been set so you can use [absolute imports].

### ESLint and Prettier

ESLint is configured with default rulesets for TypeScript and react, as well as a Prettier integration (make sure you set your code style in `.prettierrc`).

Three new scripts have been added to `package.json` that run eslint/prettier.

```bash
yarn format # run prettier and apply rules
yarn lint # run eslint in report mode
yarn lint:fix # or run it in fix mode
```

[next.js]: https://nextjs.org/
[create-next-app]: https://github.com/zeit/next.js/tree/canary/packages/create-next-app.
[tailwind css]: https://tailwindcss.com/
[file size under control]: https://tailwindcss.com/docs/controlling-file-size/
[absolute imports]: https://tjaddison.com/blog/2020/04/absolute-imports-with-react/
