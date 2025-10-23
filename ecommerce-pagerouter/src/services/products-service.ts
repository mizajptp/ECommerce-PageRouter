import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
    static getProducts = async () => {
        var productsResp = await fetch(this.getUrl('/products'));
        var products = await productsResp.json();
        return products;
    }

    static getProductById = async (id:number) => {
        var productResp = await fetch(this.getUrl(`/products/${id}`));
        var product = await productResp.json();
        return product;
    }
}