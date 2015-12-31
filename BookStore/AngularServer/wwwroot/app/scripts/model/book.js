var Book = (function () {
    function Book(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
    return Book;
})();
exports.Book = Book;
