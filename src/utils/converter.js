export default function converter(value, from, to) {
  if (from === 'km') {
    switch (to) {
      case 'm':
        return parseFloat(value) * 1000;
      default:
        break;
    }
  }
}
