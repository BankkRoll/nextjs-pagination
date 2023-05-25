# Nextjs-Pagination

Nextjs-Pagination is a powerful, customizable, and user-friendly pagination component developed specifically for Next.js projects. Engineered with a keen focus on enhancing user experience, it provides comprehensive configuration flexibility allowing you to fine-tune the pagination functionality and aesthetics according to your unique requirements. The component is developed in TypeScript, thereby providing the benefits of type safety and autocompletion support in editors that support these features.

## Features

- Customizable button color and shape to match your design requirements.
- Configuration option to set the maximum number of page buttons to display at a time.
- Options to show or hide 'Next' and 'Prev' buttons according to your usability needs.
- Ability to show or hide 'First' and 'Last' buttons.
- Callback functions that can be hooked to successful and failed page changes, providing flexibility to handle different scenarios.

## Installation

Install the package using npm by executing the following command in your terminal:

```bash
npm install nextjs-pagination
```

## Usage

### Importing the Component

Firstly, you need to import the Pagination component from the `nextjs-pagination` package. The import statement varies based on whether you are using JavaScript or TypeScript:

**JavaScript:**

```jsx
import Pagination from 'nextjs-pagination';
```

**TypeScript:**

```tsx
import { Pagination } from 'nextjs-pagination';
```

### Using the Component

Once the Pagination component is imported, you can use it in your components like this:

```jsx
<Pagination totalItems={100} itemsPerPage={10} />
```

The above code snippet will render a pagination component for 100 items with 10 items per page.

## API

Here is a detailed list of props that you can pass to the Pagination component for configuration:

Prop | Description | Type | Default | Required
---- | ----------- | ---- | ------- | --------
totalItems | The total number of items that need to be paginated. | number | - | Yes
itemsPerPage | The number of items to be displayed per page. | number | - | Yes
color | The color of the buttons. | string | '#007bff' | No
shape | The shape of the buttons. The options are 'circle' or 'square'. | string | 'square' | No
buttonCount | The maximum number of page buttons that can be displayed at a time. | number | 5 | No
showNextPrev | Flag to control the visibility of 'Next' and 'Prev' buttons. | boolean | false | No
showFirstLast | Flag to control the visibility of 'First' and 'Last' buttons. | boolean | false | No
onSuccess | Callback function which will be called when a page change occurs successfully. | function | () => {} | No
onError | Callback function which will be called when a page change error occurs. | function | () => {} | No

## Example

Here is an example of how to use the Pagination component with a customized set of props:

```jsx
<Pagination
  totalItems={500}
  itemsPerPage={20}
  color="green"
  shape="circle"
  buttonCount={7}
  showNextPrev={true}
  showFirstLast={true}
  onSuccess={(page) => console.log("Current page: ", page)}
  onError={(error) => console.error("Page change error: ", error)}
/>
```

## Contributing

We welcome contributions! Whether it's a bug report, feature request or a code contribution, we greatly appreciate all help to improve Nextjs-Pagination. For major changes, please open an issue first to discuss what you would like to change.

## License

Nextjs-Pagination is [MIT licensed](./LICENSE).

