export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getMenu() {
  const response = await fetch(`${API_URL}/api/menu`);

  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }

  return response.json();
}