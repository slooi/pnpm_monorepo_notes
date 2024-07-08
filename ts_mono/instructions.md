# Setup base
1. `pnpm init`
2. install typescript `pnpm add -D typescript typescript-node`
3. setup a base `tsconfig.base.json` and a `tsconfig.json` linked to it
4. create a `pnpm-workspace.yaml` file and add packages to it.

# Create "main" package
1. `mkdir -p packages/main`
2. `cd packages/main`
3. `pnpm create vite .`
4. change `packages/main/package.json` to have: `"name":"@ts_mono/main"`. It follows this format: `@<base_package_name>/<current_dir_package_name>`
5. `cd ../..`

# Create "shared" package
1. `mkdir -p packages/shared`
2. `cd packages/shared`
3. `pnpm init`
4. change `packages/shared/package.json` to have: `"name":"@ts_mono/shared"`

# Install "shared" package in "main"
1. `pnpm --filter main add @ts_mono/shared --workspace`. `--filter main` indicates we're running the cmd in pkg `main`. `@ts_mono/shared` is the name of the pkg we're imported which is defined in the `shared/package.json` file. `--workspace` indicates we're using a pkg within the workspace

# YOU CAN NOW USE THE IMPORTED PACKAGE!



# Extra Notes
- `pnpm ls -r --depth -1`
- `pnpm-workspace.yaml` is NOT optional. Add it. Otherwise when you have more complicated folder structures pnpm won't know where to look for more complicated monorepos and you will eventually get errors when you run commands like `pnpm --filter main add @testing/shared --workspace` as it may not be able to find the workspace repo `@testing/shared`
- tbh even naming the packages to `"name":"@ts_mono/main"` seems kinda unnecessary
- for some reason one time I would get errors when importing a workspace repo. copying and pasting the packages from a working repo into a not working one solve the issue.  