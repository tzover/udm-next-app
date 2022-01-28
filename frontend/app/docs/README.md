# Hello Next JS

## Next JS \* Prettier and ESLint create environment

- Create Next.js projects

```
cd /home/node/
yarn create next-app --typescript
```

> Project Name を聞かれるので好きな Name を入力（app）

- Add packages

```
yarn add -D eslint-config-airbnb-typescript prettier eslint-config-prettier
```

- ESLint init

```
yarn eslint --init
```

> How would you like to use ESLint?

    -> To check syntax, find problems, and enforce code style

> What type of modules does your project use?

    -> JavaScript modules (import/export)

> Which framework does your project use?

    -> React

> Does your project use TypeScript?

    -> Yes

> Where does your code run?

    -> Browser

> How would you like to define a style for your project?

    -> Use a popular style guide

> Which style guide do you want to follow?

    -> Airbnb: https://github.com/airbnb/javascript

> What format do you want your config file to be in?

    -> JSON

> Would you like to install them now with npm?

    -> No

- tsconfig.json (確認)

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- tsconfig.eslint.json の作成

```
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]
}
```

- eslintrc.json の編集 (project)

```
{
 "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-typescript",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-empty-function": 0,
    "@typescript-eslint/ban-ts-comment": 0
  }
}
```

- .eslintignore の作成

```
node_modules
build
coverage
docs
.next
```

- .prettierrc の作成

```
{
  "jsxSingleQuote": true,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

- package.json の編集 (lint)

```
{
  "name": "app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint src/**/*.{ts,tsx}",
    "lint:fix": "eslint src/**/*.{ts,tsx} --fix"
  },
  "dependencies": {
    "next": "11.1.2",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@types/react": "17.0.31",
    "@typescript-eslint/eslint-plugin": "^5.1.0",
    "@typescript-eslint/parser": "^5.1.0",
    "eslint": "8.0.1",
    "eslint-config-airbnb-typescript": "^14.0.1",
    "eslint-config-next": "11.1.2",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-react": "^7.26.1",
    "prettier": "^2.4.1",
    "typescript": "4.4.4"
  }
}
```

yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
