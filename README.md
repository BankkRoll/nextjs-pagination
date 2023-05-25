# Nextjs-Pagination

Nextjs-Pagination is a powerful, customizable, and easy-to-use pagination component built specifically for Next.js projects. Designed with user experience in mind, it provides flexible configuration options so you can adjust the pagination behavior and look-and-feel to suit your needs. Nextjs-Pagination is built with TypeScript, offering type safety and autocompletion support in supported editors.

## Features

- Customizable button color and shape
- Set maximum number of page buttons to display
- Option to show or hide 'Next' and 'Prev' buttons
- Option to show or hide 'First' and 'Last' buttons
- Callback function for page changes

## Installation

Install the package using npm:

```bash
npm install nextjs-pagination
```

## Usage

First, import the Pagination component from the `nextjs-pagination` package:

```jsx
import Pagination from 'nextjs-pagination';
```

Then, use it in your components:

```jsx
<Pagination totalItems={100} itemsPerPage={10} />
```

This will render a pagination component for 100 items with 10 items per page.

## API

Below are the props that you can pass to the Pagination component:

Prop | Description | Type | Default
---- | ----------- | ---- | -------
totalItems | Total number of items | number | -
itemsPerPage | Number of items per page | number | -
color | Button color | string | '#007bff'
shape | Button shape ('circle' or 'square') | string | 'square'
buttonCount | Maximum number of page buttons | number | 5
showNextPrev | Whether to show 'Next' and 'Prev' buttons | boolean | false
showFirstLast | Whether to show 'First' and 'Last' buttons | boolean | false
onPageChange | Callback function called when page changes | function | () => {}

## Example

Here is an example of a Pagination component with customized props:

```jsx
import Pagination from 'nextjs-pagination';

//...

<Pagination
  totalItems={500}
  itemsPerPage={20}
  color="green"
  shape="circle"
  buttonCount={7}
  showNextPrev={true}
  showFirstLast={true}
  onPageChange={(page) => console.log("Current page: ", page)}
/>
```

## Contributing

We welcome contributions! Whether it's a bug report, feature request or a code contribution, we greatly appreciate all help to improve Nextjs-Pagination. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Nextjs-Pagination is [MIT licensed](./LICENSE).
