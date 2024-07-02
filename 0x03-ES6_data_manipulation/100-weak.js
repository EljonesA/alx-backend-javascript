// Create a WeakMap instance
export const weakMap = new WeakMap();

// Function to track the number of calls to each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the WeakMap
  const count = weakMap.get(endpoint) || 0;

  // increment the count
  weakMap.set(endpoint, count + 1);

  // Throw an error if the number of queries is >= 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
