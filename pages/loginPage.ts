import {Page} from "@playwright/test";

export default class LoginPage{
    constructor(public page:Page){

    }
async login(email:string,password:string){
    await this.enterEmailAddress(email);
    await this.enterPassword(password);
      await this.clickLogin();

}
    async enterPassword(password: string) {
       await this.page.locator("#input-password")
         .type(password)
    }
    async enterEmailAddress(email: string) {
       await this.page.locator("#input-email")
         .type(email)
   }
   async clickLogin(){

    await Promise.all([
        this.page.waitForNavigation(),
        await this.page.click("input[value='Login']")
    ])

    }

    async errorMsg(){  
        if(await this.page.locator("//div[contains(@class, 'alert-danger')]").isVisible())     {
       const msg= await this.page.locator("//div[contains(@class, 'alert-danger')]").textContent();
       return msg;
        }
    }


}