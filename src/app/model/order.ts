export class Order {
    _id: number;
    name: string[];
    price: number[];
    totalPrice: number;
    address: string;
    apartment: string;
    telephone: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.price = obj && obj.price || 0;
        this.totalPrice = obj && obj.totalPrice || 0;
        this.address = obj && obj.address || '';
        this.apartment = obj && obj.apartment || '';
        this.telephone = obj && obj.telephone || 0;
    }

}