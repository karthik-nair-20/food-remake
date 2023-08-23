import { Food } from "./food";

export class CartItem{

    constructor(food:Food){
        this.fo0d = food;
        this.price;
    }
    fo0d!:Food;
    quantity:number = 1;

    get price():number{
        return this.fo0d.price *this.quantity;

    }
}