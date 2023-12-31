# use-query

`useState` to fetch data

## Install

`npm install use-query` or `yarn add use-query`

## Example:

### Default

```js
import useQuery from 'use-query';

let { loading, data, error } = useQuery(async () => {
  return fetch('...');
});
```
