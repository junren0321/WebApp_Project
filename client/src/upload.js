// Initialize arrays to store authors and categories
let authorsarray = [];
let categories = [];

function appendAuthor() {
    const authorInput = document.getElementById("author");
    const authorValue = authorInput.value.trim();
    if (authorValue) {
        authorsarray.push(authorValue); // Store in array for submission
        authorInput.value = "";
        displayAuthors();
    }
}

function displayAuthors() {
  const addedAuthorsElement = document.getElementById("addedAuthors");
  addedAuthorsElement.textContent = "Added Authors: " + authorsarray.join(", ");
}

function deleteAuthor() {
    authorsarray = []; // Clear the array
    displayAuthors();
}

function appendCategory() {
  const categorySelect = document.getElementById("tags");
  const selectedCategory = categorySelect.value.trim(); // Assuming a single selection for simplicity
  if (selectedCategory && !categories.includes(selectedCategory)) {
      categories.push(selectedCategory); // Add to array if not already included
    //   categorySelect.value = "";
      displayCategories(); // Update the display
  }
}

function deleteCategory() {
    categories = []; // Clear the array
    displayCategories();
}

function displayCategories() {
    const selectedCategoriesElement = document.getElementById("selectedcategories");
    selectedCategoriesElement.textContent = "Selected Categories: " + categories.join(", ");
}

const uploadForm = document.getElementById('uploadform');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('jwt');
    if (!token) {
        // Optionally notify the user they need to log in
        alert('You need to be logged in to upload a picture book.');
        return;
    }
    // Validate input
    if (authorsarray.length === 0 || categories.length === 0) {
        alert("Please add at least one author and one category.");
        return;
    }

    const ISBNInput = document.getElementById('isbn').value;
    if(ISBNInput == ""){
      alert("Please provide the ISBN.");
      return;
    }

    // Prepare FormData
    const formData = new FormData(uploadForm);
    formData.delete('author');
    formData.delete('tags');
    authorsarray.forEach(author => formData.append('authors', author));
    categories.forEach(category => formData.append('tags', category));

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData, // Sending FormData directly
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            alert('Book successfully uploaded!');
            console.log('Book uploaded successfully');
            // Reset the form and arrays after successful upload
            uploadForm.reset();
            authorsarray = [];
            categories = [];
            displayAuthors();
            displayCategories();
        } else {
            alert('Failed to upload book. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during uploading. Please check the console for details.');
    }
});