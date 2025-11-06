import { afficherCategories } from "../modules/categories.js";
import { afficherArticles } from "../modules/articles.js";
afficherCategories()
afficherArticles()

const btn = document.getElementById("dark-mode");
const root = document.documentElement;

btn.addEventListener("click", () => {
  root.classList.toggle("dark");
});