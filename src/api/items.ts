export async function getItems() {
  const res = await fetch('http://localhost:8081/items');
  if (!res.ok) {
    throw new Error('Failed to fetch items', { cause: res.statusText });
  }
  return res.json();

}