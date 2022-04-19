const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

for (const li of list) {
  const subcatQuantity = li.querySelectorAll("li").length;
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${subcatQuantity}`);
}
