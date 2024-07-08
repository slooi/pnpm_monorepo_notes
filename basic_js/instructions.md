# Create monorepo package.json
pnpm init

# Create app(s)
1. mkdir -p apps/calculator
2. cd apps/calculator 
3. pnpm init
4. cd ../..

# Create code which will be shared
1. mkdir -p libs/math-lib
2. cd libs/math-lib
3. pnpm init
4. cd ../..

# Create your files...