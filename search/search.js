    // Para obtener la referencia al formulario y la tabla de resultados creamos la variable form y la variable resultados
    const form = document.getElementById('search-form');
    const resultsTable = document.getElementById('results-table');

    // Este es el evento 'submit' del formulario
    form.addEventListener('submit', async event => {
      event.preventDefault();

      // Obtenemos el valor del campo de texto de búsqueda
      const searchText = document.getElementById('search-text').value;

      // Enviamos la petición al servidor con la consulta que queremos hacer en nuestra base de datos mySQL
      const response = await fetch(`search.php?searchText=${encodeURIComponent(searchText)}`);

      // Procesamos la respuesta del servidor en formato json
      const results = await response.json();

      // Limpiamos la tabla de los resultados obtenidos
      resultsTable.tBodies[0].innerHTML = '';

      // Finalmente, mostramos los resultados en la tabla con un foreach conforme a la respuesta del servidor de la búsqueda
      results.forEach(result => {
        const row = resultsTable.tBodies[0].insertRow();
        row.insertCell().textContent = result.title; 
        row.insertCell().textContent = result.synopsis;
        row.insertCell().textContent = result.writer;
        row.insertCell().textContent = result.type;
        row.insertCell().textContent = result.ISBN;
      });
    });
