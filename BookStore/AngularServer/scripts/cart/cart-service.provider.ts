import {Component} from 'angular2/core';
import {Injectable} from "angular2/core";
import {Book} from "../model/book";
import {HostListener} from "angular2/core";
import {Directive} from "angular2/core";


@Injectable()
export class cartServiceProvider {

    public books = BOOKS;

    constructor() {
    }

    getBooks() {
        return this.books;
    }

    destroy() {
        this.books.forEach(book=> {
            BOOKS.pop();
        });
        BOOKS.pop();
    }

    addBook(book:Book) {
        this.books.push(book);
    }
    isEmptyCart(){
        return (this.books.length==0);
    }
}
var BOOKS:Book[] = new Array<Book>();