// Function to make the red button "fly away"
function flyAway(button) {
  const x = Math.random() * (window.innerWidth - button.clientWidth);
  const y = Math.random() * (window.innerHeight - button.clientHeight);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// function to open link in new tab
function openInNewTab(url) {
  window.open(url, "_blank");
}
