//your code here!

const list = document.getElementById("infi-list");
let count = 1;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Load initial 10 items
addItems(10);

// Infinite scroll listener
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // Near bottom
  if (scrollTop + windowHeight >= fullHeight - 10) {
    addItems(2);
  }
});
