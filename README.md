# Scale Hackathon: Game

This repo is being built as an example of how [Scale](https://scale.sh) could be used to for a browser game with an ECS architecture. The repo itself is a monorepo using [Yarn Workspaces](https://yarnpkg.com/features/workspaces). For more informatino on the individual packages, see their readmes:

* [`ai-system`](/packages/ai-system/README.md)
* [`camera-system`](/packages/camera-system/README.md)
* [`client`](/packages/client/README.md)
* [`controls-system`](/packages/controls-system/README.md)
* [`move-system`](/packages/move-system/README.md)
* [`physics-system`](/packages/physics-system/README.md)
* [`spawn-system`](/packages/spawn-system/README.md)

## Development

To start the app locally, you must first install the required packages with [Yarn][yarn] (npm is not supported):

```sh
yarn install
```

Once all dependencies have been installed, you can start the application with `yarn dev`. This will start a PM2 daemon running the client (a [Next.js][next.js] app), as well as watchers for each of the other packages which will automatically rebuild the types when changes are made.





[Next.js]: [https://nextjs.org/]
[yarn]: https://yarnpkg.com/
