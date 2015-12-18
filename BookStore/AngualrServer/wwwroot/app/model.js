System.register([], function(exports_1) {
    var Book;
    return {
        setters:[],
        execute: function() {
            Book = (function () {
                function Book(id, title, author) {
                    this.id = id;
                    this.title = title;
                    this.author = author;
                }
                return Book;
            })();
            exports_1("Book", Book);
        }
    }
});
//# sourceMappingURL=model.js.map