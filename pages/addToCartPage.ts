import { Page } from "@playwright/test";

export default class addToCartPage {

    constructor(public page: Page) {

    }
    async errorMessageCart() {
        const errMsg = await this.page.locator("//div[contains(@class,'content-products')]").textContent();
        return errMsg;
    }
    async clickMegaMenu() {
        // await Promise.all([
        //     this.page.waitForLoadState('networkidle'),
        //     await this.page.waitForSelector("//span[contains(@class,'title') and contains(text(),'Mega Menu')]", { state: 'visible' }),
        //     await this.page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]").hover()
        // ])
        await this.page.waitForLoadState('networkidle');
        const megaMenu = this.page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]");
        await megaMenu.waitFor({ state: 'visible' });
        await megaMenu.scrollIntoViewIfNeeded();
        await megaMenu.hover();
    }


    async productAddToCart() {
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            await this.page.getByRole('link', { name: 'Headphones' }).click(),
            await this.page.getByRole('heading', { level: 4, name: 'HTC Touch HD' }).click(),
            await this.page.getByRole('button', { name: 'Add to Cart' }).click(),
            await this.page.getByRole('button', { name: 'Close' }).waitFor({ state: 'visible' }),
            await this.page.getByRole('button', { name: 'Close' }).click({ force: true }),
            await this.page.locator('a[href="#cart-total-drawer"]').nth(1).click(),
            await this.page.getByRole('button', { name: 'Checkout' }).waitFor({ state: 'visible' }),
            await this.page.getByRole('button', { name: 'Checkout' }).click()
        ])
    }

    async productQuatityUpdate() {
        await this.page.locator("input[id^='quantity']").click();
        await this.page.locator("input[id^='quantity']").fill("10");
        await this.page.locator("//*[@id='checkout-cart']/table/tbody/tr/td[3]/div/div/button[1]").click({ force: true });
    }
    async paymentAddress(address1: string) {
        await Promise.all([
            this.page.waitForLoadState('domcontentloaded'),
            await this.page.locator('#payment-address').getByText('I want to use a new address').click(),
            await this.page.locator('#input-payment-address-1').scrollIntoViewIfNeeded(),
            await this.page.locator('#input-payment-address-1').fill(address1)
        ])
    }
    async paymentCity(city: string) {
        await Promise.all([
            await this.page.locator('#input-payment-city').scrollIntoViewIfNeeded(),
            await this.page.locator("#input-payment-city").fill(city)
        ])
    }
    async paymentPostalCode(postalcode: string) {
        await Promise.all([
            await this.page.locator("#input-payment-postcode").fill(postalcode)
        ])
    }
    async paymentSelectCountry(country: string) {
        await Promise.all([
            await this.page.selectOption("#input-payment-country", {
                label: country
            })
        ])
    }
    async paymentSelectZone(zone: string) {
        await Promise.all([
            await this.page.waitForSelector('#input-payment-zone:not([disabled])'),
            await this.page.selectOption("#input-payment-zone", {
                label: zone
            })
        ])
    }
    async clickAgree() {
        await this.page.waitForSelector('#input-agree', { state: 'visible' });
        await this.page.getByRole('checkbox', { name: 'agree' }).check({ force: true });
    }
    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue ' }).click();
    }
    async clickConfirmOrder() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.waitForSelector('#button-confirm', { state: 'visible' }),
            await this.page.getByRole('button', { name: 'Confirm Order ' }).click({ force: true })
        ])
    }
    async successMessage() {
       // this.page.waitForNavigation();
        const msg = await this.page.locator('h1.page-title').textContent();
        console.log(msg);

        return msg;


    }


}