const listItemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemRef.length}`);

for (const item of listItemRef) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
