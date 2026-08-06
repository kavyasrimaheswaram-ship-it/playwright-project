# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Add to cart_05
- Location: tests\login.spec.ts:88:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://ecommerce-playground.lambdatest.io/index.php?route=account/login", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import LoginPage from '../pages/loginPage';
  3   | import RegisterPage from '../pages/registerPage';
  4   | import HomePage from '../pages/homePage';
  5   | import SpecialHotPage from '../pages/specialHotPage';
  6   | import PaymentPage from '../pages/paymentPage';
  7   | import addToCartPage from '../pages/addToCartPage';
  8   | 
  9   | const email = "ks01@gmail.com";
  10  | const password = "Kavya123";
  11  | 
  12  | test('Login_Test_01', async ({ page, baseURL }, testInfo) => {
  13  |     const login = new LoginPage(page);
  14  |     await page.goto(`${baseURL}route=account/login`);
  15  |     await login.enterEmailAddress(email);
  16  |     await login.enterPassword(password);
  17  |     await login.clickLogin();
  18  |     expect(await page.title()).toBe("My Account")
  19  |     testInfo.annotations.push({
  20  |         type: 'Test Case Name',
  21  |         description: 'User Login Module - Success'
  22  |     });
  23  | });
  24  | 
  25  | 
  26  | test('Login_Error_Test_02', async ({ page, baseURL }, testInfo) => {
  27  |     const email_e = "c.m@gmail.com";
  28  |     const password_e = "12345";
  29  |     const login = new LoginPage(page);
  30  |     await page.goto(`${baseURL}route=account/login`);
  31  |     await login.enterEmailAddress(email_e);
  32  |     await login.enterPassword(password_e);
  33  |     await login.clickLogin();
  34  | 
  35  |     if (await login.errorMsg()) {
  36  |         console.log(await login.errorMsg())
  37  |     }
  38  |     testInfo.annotations.push({
  39  |         type: 'Test Case Name',
  40  |         description: 'Login with invalid credentials and message is :  ' + await login.errorMsg()
  41  |     });
  42  | });
  43  | 
  44  | 
  45  | test('Register_Error_Test_03', async ({ page, baseURL }, testInfo) => {
  46  | 
  47  |     const register = new RegisterPage(page);
  48  |     const login = new LoginPage(page)
  49  |     await page.goto(`${baseURL}route=account/register`);
  50  |     page.waitForTimeout(1000);
  51  |     await register.clickContinue();
  52  |     // expect(login.errorMsg()).toContain("Warning: You must agree to the Privacy Policy!");
  53  |     testInfo.annotations.push({
  54  |         type: 'Test Case Name',
  55  |         description: 'Register user without providing details and the message is' + await register.errorMessage()
  56  |     });
  57  | 
  58  | });
  59  | 
  60  | test('Register_Test_04', async ({ page, baseURL }, testInfo) => {
  61  | 
  62  |     const register = new RegisterPage(page);
  63  |     const login = new LoginPage(page)
  64  |     await page.goto(`${baseURL}route=account/register`);
  65  |     await register.enterFirstName("k");
  66  |     await register.enterLastName("s");
  67  |     await register.enteremail("k.7@gmail.com");
  68  |     await register.enterTelephone("1234567890");
  69  |     await register.enterPassword("123test");
  70  |     await register.enterConfirmPassword("123test");
  71  |     expect(register.isSubscribeChecked()).toBeChecked();
  72  |     await register.clickTermandCondition();
  73  |     await register.clickContinue();
  74  |     if (await register.successMessage() && (await page.url().includes('success'))) {
  75  |         const tes = await register.successMessage();
  76  |         console.log("success")
  77  |         testInfo.annotations.push({ type: 'Register Test Case', description: ': ' + tes });
  78  | 
  79  |     }
  80  |     if (await register.errorMessage() && (await page.url().includes('register'))) {
  81  |         const tes = await register.errorMessage();
  82  |         console.log("error")
  83  |         testInfo.annotations.push({ type: 'Register Test Case', description: ': ' + tes });
  84  | 
  85  |     }
  86  | });
  87  | 
  88  | test.only("Add to cart_05", async ({ page, baseURL }) => {
  89  |     const login = new LoginPage(page);
  90  |     const homepage = new HomePage(page);
  91  |     //const payment = new PaymentPage(page);
  92  |     const register = new RegisterPage(page);
  93  |     const addtocart = new addToCartPage(page)
> 94  |     await page.goto(`${baseURL}route=account/login`)
      |                ^ Error: page.goto: Target page, context or browser has been closed
  95  |     await login.login(email, password);
  96  |     await homepage.clickOnMenu();
  97  |     if (await addtocart.errorMessageCart()) {
  98  |         console.log("Alert is  visible");
  99  |     }
  100 |     else {
  101 |         console.log("Alert is not visible");
  102 |     }
  103 | 
  104 |     await addtocart.clickMegaMenu();
  105 |     await addtocart.productAddToCart();
  106 |     await addtocart.productQuatityUpdate();
  107 |     await addtocart.paymentAddress("Test");
  108 |     await register.enterFirstName("K");
  109 |     await register.enterLastName("S");
  110 |     await addtocart.paymentCity("Test");
  111 |     await addtocart.paymentPostalCode("00000");
  112 |     await addtocart.paymentSelectCountry("India");
  113 |     await addtocart.paymentSelectZone("Puducherry");
  114 |     await addtocart.clickAgree();
  115 |     await addtocart.clickContinue();
  116 |     await addtocart.clickConfirmOrder();
  117 |     const message = await addtocart.successMessage();
  118 |     console.log(message);
  119 |     expect(message).toContain(" Your order has been placed!")
  120 | 
  121 | 
  122 | 
  123 | 
  124 |     // await page.locator('#input-payment-address-1').fill("addd");
  125 | 
  126 |     //*[@id="input-payment-address-new"]
  127 |     //await page.getByRole('radio', { name: 'payment_address' }).click();
  128 |     // await payment.enterFirstName("k");
  129 |     // await payment.enterLastName("s");
  130 |     // await payment.enteremail("k.1@gmail.com");
  131 |     // await payment.enterTelephone("1234567890");
  132 |     // await payment.enterPassword("123test");
  133 |     // await payment.enterConfirmPassword("123test");
  134 | 
  135 |     // await page.waitForSelector('#input-payment-country:not([disabled])');
  136 |     //  await page.locator("#input-payment-country").click();
  137 |     //console.log(tres)
  138 |     // await page.locator('#input-payment-city').scrollIntoViewIfNeeded()
  139 | 
  140 | 
  141 |     // await page.locator('#input-payment-postcode').scrollIntoViewIfNeeded();
  142 | 
  143 |     //     await page.getByRole('button', { name: 'Continue' }).click();
  144 |     //    // await page.waitForSelector("#button-confirm");
  145 |     //     await page.waitForSelector('#button-confirm', { state: 'visible' });
  146 |     //     await page.locator('#button-confirm').click({ force: true });
  147 |     //    
  148 | 
  149 | 
  150 | 
  151 | 
  152 | 
  153 |     //await page.locator("").locator("")
  154 |     //await special.addFIrstProductToTheCart();
  155 |     //const isCartVisible=await special.isToastVisible();
  156 |     //expect(isCartVisible).toBeVisible();
  157 | })
  158 | 
  159 | 
  160 | 
```