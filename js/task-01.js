const listItemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemRef.length}`);

for (const item of listItemRef) {
  const subcatQuantityRef = item.querySelectorAll("li").length;
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${subcatQuantityRef}`);
}
