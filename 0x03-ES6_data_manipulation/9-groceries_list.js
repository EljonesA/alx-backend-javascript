export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  let formattedOutput = 'Map {\n';
  const entries = Array.from(groceries.entries());
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    formattedOutput += `  '${key}' => ${value}`;
    if (i !== entries.length - 1) {
      formattedOutput += ',\n';
    } else {
      formattedOutput += '\n';
    }
  }
  formattedOutput += '}';

  return formattedOutput;
}
