export class Book {
    _id: number;
    name: string;
    description: string;
    grade: number;
    price: number;
    discount: boolean;
    bestseller: boolean;
    picture: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.grade = obj && obj.grade || 0;
        this.price = obj && obj.price || 0;
        this.discount = obj && obj.discount || '';
        this.bestseller = obj && obj.bestseller || '';
        this.picture = obj && obj.picture || '';
    }
}