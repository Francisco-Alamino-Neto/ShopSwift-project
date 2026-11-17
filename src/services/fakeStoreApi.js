const API_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Nao foi possivel carregar os produtos.");
  }

  return response.json();
};