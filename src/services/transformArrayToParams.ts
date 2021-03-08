export default function transformArrayToParams(array: string[]) {
  return array.toString().replace(',', '&');
}
