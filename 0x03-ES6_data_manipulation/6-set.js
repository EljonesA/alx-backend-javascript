export default function setFromArray(array) {
  return `Set { ${Array.from(new Set(array)).join(', ')} }`;
}
