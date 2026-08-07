import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';
import PaymentPage from '../pages/paymentPage';
import addToCartPage from '../pages/addToCartPage';

const email = "ks01@gmail.com";
const password = "Kavya123";

test('Login_Test_01', async ({ page, baseURL }, testInfo) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmailAddress(email);
    await login.enterPassword(password);
    await login.clickLogin();
    expect(await page.title()).toBe("My Account")
    testInfo.annotations.push({
        type: 'Test Case Name',
        description: 'User Login Module - Success'
    });
});


test('Login_Error_Test_02', async ({ page, baseURL }, testInfo) => {
    const email_e = "c.m@gmail.com";
    const password_e = "12345";
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmailAddress(email_e);
    await login.enterPassword(password_e);
    await login.clickLogin();

    if (await login.errorMsg()) {
        console.log(await login.errorMsg())
    }
    testInfo.annotations.push({
        type: 'Test Case Name',
        description: 'Login with invalid credentials and message is :  ' + await login.errorMsg()
    });
});


test('Register_Error_Test_03', async ({ page, baseURL }, testInfo) => {

    const register = new RegisterPage(page);
    const login = new LoginPage(page)
    await page.goto(`${baseURL}route=account/register`);
    page.waitForTimeout(1000);
    await register.clickContinue();
    // expect(login.errorMsg()).toContain("Warning: You must agree to the Privacy Policy!");
    testInfo.annotations.push({
        type: 'Test Case Name',
        description: 'Register user without providing details and the message is' + await register.errorMessage()
    });

});

test('Register_Test_04', async ({ page, baseURL }, testInfo) => {

    const register = new RegisterPage(page);
    const login = new LoginPage(page)
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("k");
    await register.enterLastName("s");
    await register.enteremail("k.7@gmail.com");
    await register.enterTelephone("1234567890");
    await register.enterPassword("123test");
    await register.enterConfirmPassword("123test");
    expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermandCondition();
    await register.clickContinue();
    if (await register.successMessage() && (await page.url().includes('success'))) {
        const tes = await register.successMessage();
        console.log("success")
        testInfo.annotations.push({ type: 'Register Test Case', description: ': ' + tes });

    }
    if (await register.errorMessage() && (await page.url().includes('register'))) {
        const tes = await register.errorMessage();
        console.log("error")
        testInfo.annotations.push({ type: 'Register Test Case', description: ': ' + tes });

    }
});

test("Add to cart_05", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homepage = new HomePage(page);
    //const payment = new PaymentPage(page);
    const register = new RegisterPage(page);
    const addtocart = new addToCartPage(page)
    await page.goto(`${baseURL}route=account/login`)
    await login.login(email, password);
    await homepage.clickOnMenu();
    if (await addtocart.errorMessageCart()) {
        console.log("Alert is  visible");
    }
    else {
        console.log("Alert is not visible");
    }

    await addtocart.clickMegaMenu();
    await addtocart.productAddToCart();
    await addtocart.productCheck();
    await addtocart.productQuatityUpdate();
    await addtocart.paymentAddress("Test");
    await register.enterFirstName("K");
    await register.enterLastName("S");
    await addtocart.paymentCity("Test");
    await addtocart.paymentPostalCode("00000");
    await addtocart.paymentSelectCountry("India");
    await addtocart.paymentSelectZone("Puducherry");
    await addtocart.clickAgree();
    await addtocart.clickContinue();
    await addtocart.clickConfirmOrder();
    const message = await addtocart.successMessage();
    expect(message).toContain(" Your order has been placed!")




    // await page.locator('#input-payment-address-1').fill("addd");

    //*[@id="input-payment-address-new"]
    //await page.getByRole('radio', { name: 'payment_address' }).click();
    // await payment.enterFirstName("k");
    // await payment.enterLastName("s");
    // await payment.enteremail("k.1@gmail.com");
    // await payment.enterTelephone("1234567890");
    // await payment.enterPassword("123test");
    // await payment.enterConfirmPassword("123test");

    // await page.waitForSelector('#input-payment-country:not([disabled])');
    //  await page.locator("#input-payment-country").click();
    //console.log(tres)
    // await page.locator('#input-payment-city').scrollIntoViewIfNeeded()


    // await page.locator('#input-payment-postcode').scrollIntoViewIfNeeded();

    //     await page.getByRole('button', { name: 'Continue' }).click();
    //    // await page.waitForSelector("#button-confirm");
    //     await page.waitForSelector('#button-confirm', { state: 'visible' });
    //     await page.locator('#button-confirm').click({ force: true });
    //    





    //await page.locator("").locator("")
    //await special.addFIrstProductToTheCart();
    //const isCartVisible=await special.isToastVisible();
    //expect(isCartVisible).toBeVisible();
})


