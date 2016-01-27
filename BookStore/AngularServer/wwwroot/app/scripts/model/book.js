var Book = (function () {
    function Book(id, title, author, checkK, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.checkK = checkK;
        this.genre = genre;
    }
    return Book;
})();
exports.Book = Book;
