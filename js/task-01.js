const listItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItem.length}`);

for (const item of listItem) {
  const subcatQuantity = item.querySelectorAll("li").length;
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${subcatQuantity}`);
}
