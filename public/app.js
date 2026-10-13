let count = 0;
document.getElementById('btn').addEventListener('click', () => {
  count += 1;
  document.getElementById('msg').textContent = `Button clicked ${count} time(s)`;
});
