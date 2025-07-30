// Promises and Async/Await
fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

async function loadData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
