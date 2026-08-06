# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Add to cart_05
- Location: tests\login.spec.ts:78:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//*[@id=\'content\']/h1')
Expected substring: " Your order has been placed!"
Received string:    "Confirm Order"

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//*[@id=\'content\']/h1')
    4 × locator resolved to <h1 class="page-title mb-3">Confirm Order</h1>
      - unexpected value "Confirm Order"
  - Test timeout of 30000ms exceeded.

```

```yaml
- heading "Confirm Order" [level=1]
```

# Test source

```ts
  49  |     page.waitForTimeout(1000);
  50  |     await register.clickContinue();
  51  |     expect(login.errorMsg()).toContain("Warning: You must agree to the Privacy Policy!");
  52  | 
  53  | });
  54  | 
  55  | test('Register_Test_04', async ({ page, baseURL }, testInfo) => {
  56  | 
  57  |     const register = new RegisterPage(page);
  58  |     const login = new LoginPage(page)
  59  |     await page.goto(`${baseURL}route=account/register`);
  60  |     await register.enterFirstName("k");
  61  |     await register.enterLastName("s");
  62  |     await register.enteremail("k.1@gmail.com");
  63  |     await register.enterTelephone("1234567890");
  64  |     await register.enterPassword("123test");
  65  |     await register.enterConfirmPassword("123test");
  66  |     expect(register.isSubscribeChecked()).toBeChecked();
  67  |     await register.clickTermandCondition();
  68  |     await register.clickContinue();
  69  |     if (await login.errorMsg()) {
  70  |         const tes = login.errorMsg();
  71  |         testInfo.annotations.push({ type: 'Register Test Case', description: ': ' + tes });
  72  |         test.fail();
  73  | 
  74  |     }
  75  | 
  76  | });
  77  | 
  78  | test.only("Add to cart_05", async ({ page, baseURL }) => {
  79  |     const login = new LoginPage(page);
  80  |     const homepage = new HomePage(page);
  81  |     const special = new SpecialHotPage(page);
  82  |     const payment = new PaymentPage(page)
  83  |     await page.goto(`${baseURL}route=account/login`)
  84  |     await login.login(email, password);
  85  |     await homepage.clickOnMenu();
  86  |     const test_e = await page.locator("//div[contains(@class,'content-products')]").textContent();
  87  |     console.log(test_e);
  88  |     if (test_e?.includes("There are no special offer products to list.")) {
  89  |         console.log("Alert is  visible");
  90  |         await page.waitForSelector("//span[contains(@class,'title') and contains(text(),'Mega Menu')]", { state: 'visible' });
  91  |         await page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]").hover();
  92  |         await page.getByRole('link', { name: 'Headphones' }).click();
  93  |         await page.getByRole('heading', { level: 4, name: 'HTC Touch HD' }).click();
  94  |         await page.getByRole('button', { name: 'Add to Cart' }).click();
  95  |         await page.getByRole('button', { name: 'Close' }).click();
  96  |         await page.locator('a[href="#cart-total-drawer"]').nth(1).click();
  97  |         await page.getByRole('button', { name: 'Checkout' }).click();
  98  | 
  99  | 
  100 |         await page.locator("input[id^='quantity']").click();
  101 |         //await page.locator("input[id^='quantity']").clear();
  102 |         await page.locator("input[id^='quantity']").fill("1");
  103 | 
  104 |         //await page.wai
  105 |         // const tre = await page.getByRole('button', { name: 'Update' }).isVisible();
  106 |         //console.log(tre);
  107 |         await page.locator("//*[@id='checkout-cart']/table/tbody/tr/td[3]/div/div/button[1]").click({ force: true });
  108 |         //page.waitForTimeout(3000)
  109 |         await page.waitForLoadState('domcontentloaded');
  110 |         await page.locator('#payment-address').getByText('I want to use a new address').click();
  111 | 
  112 |         // await page.locator('#input-payment-address-1').fill("addd");
  113 | 
  114 |         //*[@id="input-payment-address-new"]
  115 |         //await page.getByRole('radio', { name: 'payment_address' }).click();
  116 |         // await payment.enterFirstName("k");
  117 |         // await payment.enterLastName("s");
  118 |         // await payment.enteremail("k.1@gmail.com");
  119 |         // await payment.enterTelephone("1234567890");
  120 |         // await payment.enterPassword("123test");
  121 |         // await payment.enterConfirmPassword("123test");
  122 |         await page.locator('#input-payment-firstname').fill("addd");
  123 |         await page.locator('#input-payment-lastname').fill("addd");
  124 | 
  125 |         await page.locator('#input-payment-address-1').scrollIntoViewIfNeeded();
  126 |         await page.locator('#input-payment-address-1').fill("addd");
  127 | 
  128 |         await page.locator("#input-payment-city").fill("addd");
  129 |         await page.locator("#input-payment-postcode").fill("addd");
  130 |        // await page.waitForSelector('#input-payment-country:not([disabled])');
  131 |         //  await page.locator("#input-payment-country").click();
  132 |         //console.log(tres)
  133 |         // await page.locator('#input-payment-city').scrollIntoViewIfNeeded()
  134 |         await page.selectOption("#input-payment-country", {
  135 |             label: 'India'
  136 |         })
  137 |         await page.waitForSelector('#input-payment-zone:not([disabled])');
  138 |         await page.selectOption("#input-payment-zone", {
  139 |             label: 'Puducherry'
  140 |         })
  141 | 
  142 |         // await page.locator('#input-payment-postcode').scrollIntoViewIfNeeded();
  143 |     await page.waitForSelector('#input-agree', { state: 'visible' });
  144 |         await page.getByRole('checkbox', { name: 'agree' }).check({ force: true });
  145 |         await page.getByRole('button', { name: 'Continue' }).click();
  146 |        // await page.waitForSelector("#button-confirm");
  147 |         await page.waitForSelector('#button-confirm', { state: 'visible' });
  148 |         await page.locator('#button-confirm').click({ force: true });
> 149 |         expect(await page.locator("//*[@id='content']/h1")).toContainText(" Your order has been placed!")
      |                                                             ^ Error: expect(locator).toContainText(expected) failed
  150 | 
  151 |     } else {
  152 |         console.log("Alert is not visible");
  153 |     }
  154 | 
  155 |     //await page.locator("").locator("")
  156 |     //await special.addFIrstProductToTheCart();
  157 |     //const isCartVisible=await special.isToastVisible();
  158 |     //expect(isCartVisible).toBeVisible();
  159 | })
  160 | 
  161 | 
  162 | 
```