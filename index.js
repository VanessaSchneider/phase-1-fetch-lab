document.addEventListener(DOMContentLoaded, function(){

fetchBooks()
})


function fetchBooks() {
  fetch ("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(results => {

    results.forEach(book => renderBook(book))
    
  }
    
    
    )
}
function renderBook(book) {
const paragraph = document.creatElement("p")
paragraph.innerText = book

}









