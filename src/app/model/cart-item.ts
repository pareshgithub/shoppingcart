export class CartItem {
    itemName : string;
    itemQty : number;
    itemPrice : number;
    totalPrice : number;
    constructor(itemName : string,
        itemQty : number,
        itemPrice : number) {
            this.itemName = itemName;
            this.itemQty = itemQty;
            this.itemPrice = itemPrice;
            this.totalPrice = itemQty * itemPrice;
    }
}
