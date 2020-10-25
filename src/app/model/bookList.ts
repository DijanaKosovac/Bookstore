import { Book } from './book';
export class BookList {
    results: Book[];

    constructor(obj?: any) {
        this.results = obj && obj.results.map(data => {
            return new Book(data);
        }) || [];
    }
}