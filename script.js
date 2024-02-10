document.getElementById('no-button').addEventListener('mousemove', function(event) {
    // Calculate new position within the viewport
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
  
    // Ensure the button moves away from the cursor
    const cursorX = event.clientX;
    const cursorY = event.clientY;
  
    // If the cursor is too close to the new X position, adjust it
    if (Math.abs(cursorX - newX) < 100) {
      newX = cursorX < window.innerWidth / 2 ? newX + 100 : newX - 100;
    }
  
    // If the cursor is too close to the new Y position, adjust it
    if (Math.abs(cursorY - newY) < 100) {
      newY = cursorY < window.innerHeight / 2 ? newY + 100 : newY - 100;
    }
  
    // Apply new position
    this.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
    this.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
    this.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
  });
  
  document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
