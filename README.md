# Nextjs-Pagination

Nextjs-Pagination is a powerful, customizable, and easy-to-use pagination component built specifically for Next.js projects. Designed with user experience in mind, it provides flexible configuration options so you can adjust the pagination behavior and look-and-feel to suit your needs. Nextjs-Pagination is built with TypeScript, offering type safety and autocompletion support in supported editors.
![Screenshot 2023-05-25 175609](https://github.com/BankkRoll/nextjs-pagination/assets/106103625/5fbb44cb-b1dc-4335-8194-cb9ce4aaaab5)

## Features

- Customizable button color and shape
- Set maximum number of page buttons to display
- Option to show or hide 'Next' and 'Prev' buttons
- Option to show or hide 'First' and 'Last' buttons
- Callback function for page changes
- Customizable text for 'First', 'Prev', 'Next', 'Last' buttons. You can use text, emojis, symbols, or anything that is a valid React node. Here are some examples:
  - Text: 'First', 'Prev', 'Next', 'Last'
  - Emojis: '⏮', '⏪', '⏩', '⏭'
  - Symbols: '⇤', '←', '→', '⇥'
  - Special Symbols: '⟪', '⟨', '⟩', '⟫'

## Installation

Install the package using npm:

### TypeScript

```bash
npm install nextjs-pagination
```

### JavaScript

```bash
npm install nextjs-pagination
```

## Usage

First, import the Pagination component from the `nextjs-pagination` package then use it in your components. Below are the 3 required props needed for JavaScript and TypeScript components:

### TypeScript

```tsx
import { Pagination } from 'nextjs-pagination';

const TSExample = () => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      onPageChange={handlePageChange}
      totalItems={100}
      itemsPerPage={10}
    />
  );
};
```

### JavaScript

```jsx
import Pagination from 'nextjs-pagination';

const JSExample = () => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      onPageChange={handlePageChange}
      totalItems={100}
      itemsPerPage={10}
    />
  );
};
```

This will render a pagination component for 100 items with 10 items per page.

## API

Below are the props that you can pass to the Pagination component:

Prop | Description | Type | Default | Required
---- | ----------- | ---- | ------- | --------
totalItems | Total number of items | number | - | Yes
itemsPerPage | Number of items per page | number | - | Yes
onPageChange | Callback function called when page changes | function | () => {} | Yes
color | Button color | string | '#007bff' | No
shape | Button shape ('circle' or 'square') | string | 'square' | No
buttonCount | Maximum number of page buttons | number | 5 | No
showNextPrev | Whether to show 'Next' and 'Prev' buttons | boolean | false | No
showFirstLast | Whether to show 'First' and 'Last' buttons | boolean | false | No
onSuccess | Callback function called when a valid page is selected | function | () => {} | No
onError | Callback function called when an error occurs | function | () => {} | No
firstText | Text for the 'First' button. Can be any valid React node, such as text, emojis, symbols, etc. | React.ReactNode | 'First' | No
lastText | Text for the 'Last' button. Can be any valid React node, such as text, emojis, symbols, etc. | React.ReactNode | 'Last' | No
prevText | Text for the 'Prev' button. Can be any valid React node, such as text, emojis, symbols, etc. | React.ReactNode | 'Prev' | No
nextText | Text for the 'Next' button. Can be any valid React node, such as text, emojis, symbols, etc. | React.ReactNode | 'Next' | No

## File Structure

- `@types/`
  - [`nextjs-pagination.d.ts`](./@types/nextjs-pagination.d.ts) - TypeScript declaration file for the package.
- `dist/`
  - [`index.js`](./dist/index.js) - Compiled JavaScript file of the package.
  - [`Pagination.js`](./dist/Pagination.js) - Compiled JavaScript file of the package.
- `src/`
  - [`index.ts`](./src/index.ts) - Entry point file of the package.
  - [`Pagination.tsx`](./src/Pagination.tsx) - The main implementation of the pagination component.
- [`.babelrc`](./.babelrc) - Babel configuration file.
- [`jest.config.js`](./jest.config.js) - Jest configuration file.
- [`package.json`](./package.json) - Package metadata and dependency information.
- [`tsconfig.json`](./tsconfig.json) - TypeScript configuration file.


## Examples
Want to see it in action? [CLICK HERE!](https://npm-i-nextjs-pagination.bankkroll.repl.co/) to check our the example on replit.

(please give it a few seconds to start up the server when you load)

### TypeScript Example

```tsx
import { Pagination } from 'nextjs-pagination';

const ExamplePage: React.FC = () => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      totalItems={500}
      itemsPerPage={20}
      onPageChange={handlePageChange}
      color="green"
      shape="circle"
      buttonCount={7}
      showNextPrev={true}
      showFirstLast={true}
      onSuccess={(page: number) => console.log("Current page: ", page)}
      onError={(error: Error) => console.error(error)}
      firstText="First"
      lastText="Last"
      prevText="Prev"
      nextText="Next"
    />
  );
};
```

### JavaScript Example

```jsx
import Pagination from 'nextjs-pagination';

const ExamplePage = () => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      totalItems={500}
      itemsPerPage={20}
      onPageChange={handlePageChange}
      color="green"
      shape="circle"
      buttonCount={7}
      showNextPrev={true}
      showFirstLast={true}
      onSuccess={(page) => console.log("Current page: ", page)}
      onError={(error) => console.error(error)}
      firstText="First"
      lastText="Last"
      prevText="Prev"
      nextText="Next"
    />
  );
};

```

## Contributing

We welcome contributions! Whether it's a bug report, feature request, or a code contribution, we greatly appreciate all help to improve Nextjs-Pagination. For major changes, please open an issue first to discuss what you would like to change.

## License

Nextjs-Pagination is [MIT licensed](./LICENSE).