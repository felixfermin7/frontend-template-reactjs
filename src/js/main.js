// src/js/main.js

async function fetchData() {
  const apiUrl = 'http://localhost:3000/api/data'; // Backend API URL

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();

    // Render the fetched data in the DOM
    const container = document.querySelector('.container');
    const dataContainer = document.createElement('div');
    dataContainer.classList.add('data-container');
    dataContainer.innerHTML = `
      <h2>Fetched Data</h2>
      <ul>
        ${data
          .map(
            (item) =>
              `<li><strong>${item.title}</strong>: ${item.description}</li>`
          )
          .join('')}
      </ul>
    `;
    container.appendChild(dataContainer);

    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);

    // Display an error message in the DOM
    const container = document.querySelector('.container');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to load data. Please try again later.';
    errorMessage.style.color = 'red';
    container.appendChild(errorMessage);

    throw error; // Re-throw the error for further handling
  }
}

document.getElementById('fetchDataBtn').addEventListener('click', async () => {
  try {
    const data = await fetchData(); // Fetch data from the backend
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('dataDisplay').innerHTML = '<p class="text-danger">Failed to fetch data.</p>';
  }
});