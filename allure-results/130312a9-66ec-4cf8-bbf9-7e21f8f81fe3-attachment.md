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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Checkout' })
    - locator resolved to <a role="button" target="_self" class="icon-right both btn btn-secondary btn-lg btn-block" href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    21 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - element is outside of the viewport
     - retrying click action
       - waiting 500ms
  - element was detached from the DOM, retrying
    - locator resolved to <a role="button" target="_self" class="icon-right both btn btn-secondary btn-lg btn-block" href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - heading "Top categories close" [level=5] [ref=f6e4]:
      - text: Top categories
      - link "close":
        - /url: "#mz-component-1626147655"
    - navigation [ref=f6e7]:
      - list [ref=f6e9]:
        - listitem [ref=f6e10]:
          - link "Components" [ref=f6e11] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
        - listitem [ref=f6e16]:
          - link "Cameras" [ref=f6e17] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
        - listitem [ref=f6e22]:
          - link "Phone, Tablets & Ipod" [ref=f6e23] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
        - listitem [ref=f6e28]:
          - link "Software" [ref=f6e29] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
        - listitem [ref=f6e34]:
          - link "MP3 Players" [ref=f6e35] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
        - listitem [ref=f6e40]:
          - link "Laptops & Notebooks" [ref=f6e41] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
        - listitem [ref=f6e46]:
          - link "Desktops and Monitors" [ref=f6e47] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
        - listitem [ref=f6e52]:
          - link "Printers & Scanners" [ref=f6e53] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
        - listitem [ref=f6e58]:
          - link "Mice and Trackballs" [ref=f6e59] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
        - listitem [ref=f6e64]:
          - link "Fashion and Accessories" [ref=f6e65] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e70]:
          - link "Beauty and Saloon" [ref=f6e71] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e76]:
          - link "Autoparts and Accessories" [ref=f6e77] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e82]:
          - link "Washing machine" [ref=f6e83] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e88]:
          - link "Gaming consoles" [ref=f6e89] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e94]:
          - link "Air conditioner" [ref=f6e95] [cursor=pointer]:
            - /url: ""
        - listitem [ref=f6e100]:
          - link "Web Cameras" [ref=f6e101] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
  - generic [ref=f6e106]:
    - heading "Quick Links close" [level=5] [ref=f6e107]:
      - text: Quick Links
      - link "close":
        - /url: "#mz-component-162614767"
    - generic [ref=f6e108]:
      - navigation [ref=f6e110]:
        - list [ref=f6e112]:
          - listitem [ref=f6e113]:
            - link "Special Hot" [ref=f6e114] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
              - generic [ref=f6e115]: Special
              - generic [ref=f6e117]: Hot
          - listitem [ref=f6e118]:
            - link "Wishlist" [ref=f6e119] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
          - listitem [ref=f6e122]:
            - link "Compare" [ref=f6e123] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
          - listitem [ref=f6e126]:
            - link "My account" [ref=f6e127] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
          - listitem [ref=f6e130]:
            - link "Blog" [ref=f6e131] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
          - listitem [ref=f6e134]:
            - link "Tracking" [ref=f6e135] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
          - listitem [ref=f6e138]:
            - link "Contact us" [ref=f6e139] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
      - separator [ref=f6e143]
      - paragraph [ref=f6e146]: Place here any module, widget, design or HTML. for example menu, categories
  - generic [ref=f6e147]:
    - heading "Cart close" [level=5] [ref=f6e148]:
      - text: Cart
      - link "close":
        - /url: "#cart-total-drawer"
    - generic [ref=f6e149]:
      - generic [ref=f6e150]:
        - table [ref=f6e152]:
          - rowgroup [ref=f6e153]:
            - row [ref=f6e154]:
              - cell [ref=f6e155]:
                - link [ref=f6e156] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                  - img "HTC Touch HD" [ref=f6e157]
              - cell [ref=f6e158]:
                - link "HTC Touch HD" [ref=f6e159] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                - text: "Model: Product 1 Reward Points: 400"
              - cell "x1" [ref=f6e160]
              - cell "$146.00" [ref=f6e161]
        - table [ref=f6e162]:
          - rowgroup [ref=f6e163]:
            - row [ref=f6e164]:
              - cell "Sub-Total:" [ref=f6e165]
              - cell [ref=f6e166]:
                - strong [ref=f6e167]: $120.00
            - row [ref=f6e168]:
              - cell "Eco Tax (-2.00):" [ref=f6e169]
              - cell [ref=f6e170]:
                - strong [ref=f6e171]: $2.00
            - row [ref=f6e172]:
              - cell "VAT (20%):" [ref=f6e173]
              - cell [ref=f6e174]:
                - strong [ref=f6e175]: $24.00
            - row [ref=f6e176]:
              - cell "Total:" [ref=f6e177]
              - cell [ref=f6e178]:
                - strong [ref=f6e179]: $146.00
      - generic [ref=f6e181]:
        - button "Edit cart" [ref=f6e183] [cursor=pointer]
        - button "Checkout" [ref=f6e185] [cursor=pointer]
  - text:  
  - generic [ref=f6e186]:
    - banner [ref=f6e187]:
      - generic:
        - generic:
          - generic:
            - generic:
              - button
      - generic [ref=f6e189]:
        - figure [ref=f6e191]:
          - link [ref=f6e192] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - img "Poco Electro" [ref=f6e193]
        - generic [ref=f6e197]:
          - generic [ref=f6e199]:
            - button "All Categories" [ref=f6e201] [cursor=pointer]
            - textbox "Search For Products" [ref=f6e203]
          - button "Search" [ref=f6e205] [cursor=pointer]
        - link "Compare" [ref=f6e207] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
        - link "Wishlist" [ref=f6e211] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
        - button "1" [ref=f6e215] [cursor=pointer]
      - generic [ref=f6e220]:
        - generic [ref=f6e222] [cursor=pointer]:
          - button "Shop by Category" [ref=f6e224]
          - navigation [ref=f6e228]:
            - list [ref=f6e230]:
              - listitem [ref=f6e231]:
                - link "Home" [ref=f6e232]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
              - listitem [ref=f6e235]:
                - link "Special Hot" [ref=f6e236]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                  - generic [ref=f6e237]: Special
                  - generic [ref=f6e239]: Hot
              - listitem [ref=f6e240]:
                - link "Blog" [ref=f6e241]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
              - listitem [ref=f6e244]:
                - button "Mega Menu" [ref=f6e245]
              - listitem [ref=f6e248]:
                - button "AddOns Featured" [ref=f6e249]:
                  - generic [ref=f6e250]: AddOns
                  - generic [ref=f6e252]: Featured
              - listitem [ref=f6e253]:
                - button "My account" [ref=f6e254]
        - text: 
        - paragraph [ref=f6e259]:
          - strong [ref=f6e260]: This is a dummy website for Web Automation Testing
    - generic [ref=f6e261]:
      - figure [ref=f6e265]:
        - link [ref=f6e266] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f6e267]
      - generic [ref=f6e269]:
        - navigation "breadcrumb" [ref=f6e271]:
          - list [ref=f6e272]:
            - listitem:
              - link "Home":
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f6e273]:
              - text: /
              - link "Components" [ref=f6e274] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
            - listitem [ref=f6e275]: / HTC Touch HD
        - generic [ref=f6e279]:
          - generic [ref=f6e280]:
            - button "Add to Wish List" [ref=f6e281] [cursor=pointer]
            - link [ref=f6e282] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/1-500x500.webp
              - img "HTC Touch HD" [ref=f6e283]
          - generic [ref=f6e286]:
            - link [ref=f6e288] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/3-500x500.webp
              - img "HTC Touch HD" [ref=f6e289]
            - link [ref=f6e291] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/8-500x500.webp
              - img "HTC Touch HD" [ref=f6e292]
            - link [ref=f6e294] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/6-500x500.webp
              - img "HTC Touch HD" [ref=f6e295]
            - link [ref=f6e297] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/7-500x500.webp
              - img "HTC Touch HD" [ref=f6e298]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import LoginPage from '../pages/loginPage';
  3   | import RegisterPage from '../pages/registerPage';
  4   | import HomePage from '../pages/homePage';
  5   | import SpecialHotPage from '../pages/specialHotPage';
  6   | import PaymentPage from '../pages/paymentPage';
  7   | 
  8   | const email = "ks01@gmail.com";
  9   | const password = "Kavya123";
  10  | 
  11  | test('Login_Test_01', async ({ page, baseURL }, testInfo) => {
  12  |     const login = new LoginPage(page);
  13  |     await page.goto(`${baseURL}route=account/login`);
  14  |     await login.enterEmailAddress(email);
  15  |     await login.enterPassword(password);
  16  |     await login.clickLogin();
  17  |     expect(await page.title()).toBe("My Account")
  18  |     testInfo.annotations.push({
  19  |         type: 'Test Case Name',
  20  |         description: 'User Login Module'
  21  |     });
  22  | });
  23  | 
  24  | 
  25  | test('Login_Error_Test_02', async ({ page, baseURL }, testInfo) => {
  26  |     const email_e = "c.m@gmail.com";
  27  |     const password_e = "12345";
  28  |     const login = new LoginPage(page);
  29  |     await page.goto(`${baseURL}route=account/login`);
  30  |     await login.enterEmailAddress(email_e);
  31  |     await login.enterPassword(password_e);
  32  |     await login.clickLogin();
  33  | 
  34  |     if (await login.errorMsg()) {
  35  |         console.log(await login.errorMsg())
  36  |     }
  37  |     testInfo.annotations.push({
  38  |         type: 'Test Case Name',
  39  |         description: 'Incorrect Username and Password and message is :  ' + await login.errorMsg()
  40  |     });
  41  | });
  42  | 
  43  | 
  44  | test('Register_Error_Test_03', async ({ page, baseURL }) => {
  45  | 
  46  |     const register = new RegisterPage(page);
  47  |     const login = new LoginPage(page)
  48  |     await page.goto(`${baseURL}route=account/register`);
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
> 97  |         await page.getByRole('button', { name: 'Checkout' }).click();
      |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  146 |         await page.locator("#button-confirm").click();
  147 |         //await page.getByRole('button', { name: 'Confirm Order ' }).click();
  148 |         expect(await page.locator("//*[@id='content']/h1")).toContainText(" Your order has been placed!")
  149 | 
  150 |     } else {
  151 |         console.log("Alert is not visible");
  152 |     }
  153 | 
  154 |     //await page.locator("").locator("")
  155 |     //await special.addFIrstProductToTheCart();
  156 |     //const isCartVisible=await special.isToastVisible();
  157 |     //expect(isCartVisible).toBeVisible();
  158 | })
  159 | 
  160 | 
  161 | 
```