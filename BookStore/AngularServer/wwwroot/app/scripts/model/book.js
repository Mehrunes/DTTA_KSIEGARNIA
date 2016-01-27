var Book = (function () {
    function Book(id, title, author, check, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.check = check;
        this.genre = genre;
    }
    return Book;
})();
exports.Book = Book;
