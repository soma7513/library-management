const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

bookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const publicationDateInput = document.getElementById('publicationDate');
  const isbnInput = document.getElementById('isbn');
  const borrowingStatusInput = document.getElementById('borrowingStatus');

  const title = titleInput.value;
  const author = authorInput.value;
  const publicationDate = publicationDateInput.value;
  const isbn = isbnInput.value;
  const borrowingStatus = borrowingStatusInput.value;

  if (title.trim() === '' || author.trim() === '' || publicationDate.trim() === '' || isbn.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${publicationDate}</td>
    <td>${isbn}</td>
    <td>${borrowingStatus}</td>
    <td><button onclick="removeBook(this)">Delete</button></td>
  `;
  bookList.appendChild(newRow);

  titleInput.value = '';
  authorInput.value = '';
  publicationDateInput.value = '';
  isbnInput.value = '';
  borrowingStatusInput.value = 'Available';
});

function searchBooks() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const rows = bookList.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let found = false;
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }
    if (found) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
}

function removeBook(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
