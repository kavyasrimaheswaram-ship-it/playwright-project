import { Page} from "@playwright/test";

export default class RegisterPage{
    constructor(public page:Page){

    }
    async enterFirstName(firstname:string){
        await this.page.getByRole('textbox', { name: 'First Name' }).type(firstname);
    }
    async enterLastName(lastname:string){
        await this.page.getByRole('textbox', { name: 'Last Name' }).type(lastname);
    }
    async enteremail(email:string){
        await this.page.getByRole('textbox', { name: 'E-Mail' }).type(email);
    }
    async enterTelephone(telephone:string){
        await this.page.getByRole('textbox', { name: 'Telephone' }).type(telephone);
    }
    async enterPassword(password:string){
        //await this.page.getByRole('textbox', { name: 'password' }).type(password);
        //await this.page.getByPlaceholder('Password').fill(password);
        await this.page.locator('input[name="password"]').fill(password);

    }
    async enterConfirmPassword(cPassword:string){
        await this.page.locator('input[name="confirm"]').fill(cPassword);
        //await this.page.getByPlaceholder('Password Confirm').nth(1).fill(cPassword);
    }
   isSubscribeChecked() {
      return this.page.locator("#input-newsletter-no");
   }
   async clickTermandCondition() {
      await this.page.click("//label[@for='input-agree']")
   }
    async clickContinue(){
        await Promise.all([
         this.page.waitForNavigation({ waitUntil: "networkidle" }),
         await this.page.click("input[value='Continue']")
      ])
    }
    async errorMessage(){
          await this.page.locator("//div[@class='alert alert-danger alert-dismissible']").isVisible()    
       const msg= await this.page.locator("//div[@class='alert alert-danger alert-dismissible']").textContent();
      // console.log(msg)
       return msg;
        
    }
     async successMessage(){
         const msg = await this.page.locator('h1.page-title').textContent();
        //console.log(msg);
        return msg;
        
    }
}