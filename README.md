# admin-platform

This is an admin portal I built for a ficticious ceramics supply store. It's made with [SvelteKit](https://svelte.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/), [ShadCN](https://www.shadcn-svelte.com/), and [Remeda](https://remedajs.com/).

The portal features an Orders page with some base metrics, detailed order information, pagination, and an order filter system. It uses both Server-Side Rendering (SSR) for fast initial page loads, and Client-Side Rendering (CSR) for snappy user interaction and navigation.

- [Screen-recorded walkthrough](https://www.loom.com/share/8cd6a42aec434d929706fd454ff8eaac?sid=baa1e10f-3879-4341-8192-07215adcd73d)
- [Production app on Vercel](https://admin-platform-ryansobol.vercel.app/orders)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
