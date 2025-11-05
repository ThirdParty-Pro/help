async function loadJSON(filePath) {
  const response = await fetch(filePath);
  return await response.json();
}

async function loadMarkdown(filePath) {
  const response = await fetch(filePath);
  return await response.text();
}

// Example: Load Tutorials List
async function showTutorials() {
  const tutorials = await loadJSON('./data/tutorials.json');
  const container = document.getElementById('main-content');

  tutorials.forEach(t => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${t.title}</h3><button onclick="loadTutorial('${t.file}')">View</button>`;
    container.appendChild(div);
  });
}

async function loadTutorial(file) {
  const markdown = await loadMarkdown('content/' + file);
  document.getElementById('main-content').innerHTML = `<pre>${markdown}</pre>`;
}