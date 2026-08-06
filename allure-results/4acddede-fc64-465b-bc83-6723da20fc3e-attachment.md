# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login_Error_Test_02
- Location: tests\login.spec.ts:24:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//div[contains(@class, \'alert-danger\')]')
Expected substring: "Warning: No match for E-Mail Address and/or Password."
Received string:    " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//div[contains(@class, \'alert-danger\')]')
    4 × locator resolved to <div class="alert alert-danger alert-dismissible">…</div>
      - unexpected value " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
  - Test ended.

```

```yaml
- text: " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginPage from '../pages/loginPage';
  3  | import RegisterPage from '../pages/registerPage';
  4  | import HomePage from '../pages/homePage';
  5  | import SpecialHotPage from '../pages/specialHotPage';
  6  | 
  7  | const email = "ks01@gmail.com";
  8  | const password = "Kavya123";
  9  | 
  10 | test('Login_Test_01', async ({ page, baseURL },testInfo) => {
  11 |     const login = new LoginPage(page);
  12 |     await page.goto(`${baseURL}route=account/login`);
  13 |     await login.enterEmailAddress(email);
  14 |     await login.enterPassword(password);
  15 |     await login.clickLogin();
  16 |     expect(await page.title()).toBe("My Account")
  17 |   testInfo.annotations.push({
  18 |     type: 'feature',
  19 |     description: 'User Login Module'
  20 |   });
  21 | });
  22 | 
  23 | 
  24 | test('Login_Error_Test_02', async ({ page, baseURL }) => {
  25 |     const email_e = "c.m@gmail.com";
  26 |     const password_e = "12345";
  27 |     const login = new LoginPage(page);
  28 |     await page.goto(`${baseURL}route=account/login`);
  29 |     await login.enterEmailAddress(email_e);
  30 |     await login.enterPassword(password_e);
  31 |     await login.clickLogin();
  32 |     // const test_e= await page.locator("//div[contains(@class, 'alert-danger')]").textContent();
  33 |     // console.log(test_e);
> 34 |     expect(page.locator("//div[contains(@class, 'alert-danger')]")).toContainText("Warning: No match for E-Mail Address and/or Password.");
     |                                                                     ^ Error: expect(locator).toContainText(expected) failed
  35 | 
  36 | });
  37 | 
  38 | 
  39 | // test('Register_Error_Test_03', async ({ page, baseURL }) => {
  40 | 
  41 | //     const register = new RegisterPage(page);
  42 | //     await page.goto(`${baseURL}route=account/register`);
  43 | //     page.waitForTimeout(1000);
  44 | //     await register.clickContinue();
  45 | //     // const tes= await page.locator("//div[contains(@class, 'alert-danger')]").textContent();
  46 | //     // console.log(tes);
  47 | //     expect(page.locator("//div[contains(@class, 'alert-danger')]")).toContainText("Warning: You must agree to the Privacy Policy!");
  48 | 
  49 | // });
  50 | 
  51 | // test('Register_Test_04', async ({ page, baseURL }) => {
  52 | 
  53 | //     const register = new RegisterPage(page);
  54 | //     await page.goto(`${baseURL}route=account/register`);
  55 | //     await register.enterFirstName("k");
  56 | //     await register.enterLastName("s");
  57 | //     await register.enteremail("k.s@gmail.com");
  58 | //     await register.enterTelephone("1234567890");
  59 | //     await register.enterPassword("123test");
  60 | //     await register.enterConfirmPassword("123test");
  61 | //     expect(register.isSubscribeChecked()).toBeChecked();
  62 | //     await register.clickTermandCondition();
  63 | //     await register.clickContinue();
  64 | 
  65 | // });
  66 | 
  67 | // test("Add to cart_05", async ({ page, baseURL }) => {
  68 | //     const login = new LoginPage(page);
  69 | //     const homepage = new HomePage(page)
  70 | //     const special = new SpecialHotPage(page)
  71 | //     await page.goto(`${baseURL}route=account/login`)
  72 | //     await login.login(email, password);
  73 | //     await homepage.clickOnMenu();
  74 | //     const test_e = await page.locator("//div[contains(@class,'content-products')]").textContent();
  75 | //     console.log(test_e);
  76 | //     //expect(page.locator("//div[contains(@class, 'content-products')]")).toContainText("There are no special offer products to list."); 
  77 | //     if (test_e?.includes("There are no special offer products to list.")) {
  78 | //         console.log("Alert is  visible");
  79 | //        // homepage.clickContinue();
  80 | //         await page.waitForSelector("//span[contains(@class,'title') and contains(text(),'Mega Menu')]");
  81 | //         page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]").hover();
  82 | //         //page.waitForTimeout(3000)
  83 | //     } else {
  84 | //         console.log("Alert is not visible");
  85 | //     }
  86 | //     //await special.addFIrstProductToTheCart();
  87 | //     //const isCartVisible=await special.isToastVisible();
  88 | //     //expect(isCartVisible).toBeVisible();
  89 | // })
  90 | 
  91 | 
  92 | 
```