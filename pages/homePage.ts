import { Page } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }
    async clickOnMenu() {
        await Promise.all([
            // this.page.waitForNavigation({ waitUntil: "networkidle" }),
            await this.page.click("//*[@id='widget-navbar-217834']/ul/li[2]/a")

        ])

    }
    async clickContinue() {
        const continueBtn = this.page.locator('#button-continue');
        await continueBtn.waitFor({ state: 'visible' });
        await continueBtn.click();
    }
    async clickMegastore() {
        this.page.getByRole('button', { name: ' Mega Menu' })
    }
}