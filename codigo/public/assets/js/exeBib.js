document.addEventListener('DOMContentLoaded', function() {
  fetch('/codigo/db/db.json')
    .then(response => response.json())
    .then(data => {
      const booksContainer = document.getElementById('books-container');
      data.livros.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('livro');

        

        const title = document.createElement('h2');
        title.textContent = book.titulo;
        bookDiv.appendChild(title);

        

        const description = document.createElement('p');
        description.textContent = book.descricao;
        bookDiv.appendChild(description);

        booksContainer.appendChild(bookDiv);
      });

      const filterMateria = document.getElementById('filter-materia');
      filterMateria.addEventListener('change', function() {
        const selectedMateria = filterMateria.value;
        booksContainer.innerHTML = '';
        data.livros
          .filter(book => selectedMateria === 'all' || book.materia === selectedMateria)
          .forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('livro');

           

            const title = document.createElement('h2');
            title.textContent = book.titulo;
            bookDiv.appendChild(title);

           

            const description = document.createElement('p');
            description.textContent = book.descricao;
            bookDiv.appendChild(description);

            booksContainer.appendChild(bookDiv);
          });
      });
    })
    .catch(error => console.error('Error fetching the books:', error));
});