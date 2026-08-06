import {Page} from "@playwright/test";

export default class PaymentPage{
    constructor(public page:Page){

    }

    async enterFirstName(firstname:string){
        await this.page.locator("#input-payment-firstname").type(firstname);
    }
    async enterLastName(lastname:string){
        await this.page.locator("#input-payment-lastname").type(lastname);
    }
    async enteremail(email:string){
        await this.page.locator("#input-payment-email").type(email);
    }
    async enterTelephone(telephone:string){
        await this.page.locator("#input-payment-telephone").type(telephone);
    }
    async enterPassword(password:string){
        await this.page.locator("#input-payment-password").type(password);
    }
    async enterConfirmPassword(cPassword:string){
        await this.page.locator("#input-payment-confirm").type(cPassword);
    }

}