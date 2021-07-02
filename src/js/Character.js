export default function orderByProps(obj, props) {
  const arr = [];
  for (const prop in obj) {
    arr.push(prop);
  }
  arr.sort();
  for (const item of props) {
    const index = arr.indexOf(item);
    delete arr.splice(index, 1);
  }
  const sortedArgs = props.concat(arr);
  const sortedPerson = {};
  for (const arg of sortedArgs) {
    sortedPerson[arg] = obj[arg];
  }
  return sortedPerson;
}
