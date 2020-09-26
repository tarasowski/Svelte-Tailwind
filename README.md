# Svelte template with Tailwind CSS

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png) ![](https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png)

Setting up Tailwind with Svelte is really simple, just install necessary dependencies:

```sh
npm i -D svelte-preprocess tailwindcss postcss autoprefixer
```

Create your Tailwind config file

```sh
npx tailwindcss init
```

configure **svelte-preprocess** in `rollup.config.js`

```js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess'; // here

// ...

export default {
  // ...
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('bundle.css');
      },
      // from here
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }), // up to this point
    }),
    // ...
  ],
  // ...
};
```

netx, import Tailwind styles in `src/App.svelte` :

```svelte
<script>
  export let name;
</script>

<style global>
  @import 'tailwindcss/base';

  @import 'tailwindcss/components';

  @import 'tailwindcss/utilities';
</style>

<main>
  <h1>Hello {name}!</h1>
  <p> Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
```

Finally, configure purge in `tailwind.config.js`:

```js
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
