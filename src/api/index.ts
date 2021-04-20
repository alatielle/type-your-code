export interface Article{
  id: string;
  title: string;
  createdAt: string;
  text: string;
  author: string;
}

const API = "https://607c4e1a67e6530017573e47.mockapi.io";

export const fetchArticles = async () => {
  const response =  await fetch(`${API}/articles`);

  return response.json();
};
