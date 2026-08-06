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
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: ' Your order has been placed!' })

```

# Page snapshot

```yaml
- generic [ref=f6e1]:
  - generic [ref=f6e2]:
    - generic [ref=f6e3]:
      - heading [level=5] [ref=f6e4]:
        - text: Top categories
        - link "close" [ref=f6e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f6e8]:
        - list [ref=f6e10]:
          - listitem [ref=f6e11]:
            - link "Components" [ref=f6e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f6e18]:
            - link "Cameras" [ref=f6e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f6e25]:
            - link "Phone, Tablets & Ipod" [ref=f6e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f6e32]:
            - link "Software" [ref=f6e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f6e39]:
            - link "MP3 Players" [ref=f6e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f6e46]:
            - link "Laptops & Notebooks" [ref=f6e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f6e53]:
            - link "Desktops and Monitors" [ref=f6e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f6e60]:
            - link "Printers & Scanners" [ref=f6e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f6e67]:
            - link "Mice and Trackballs" [ref=f6e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f6e74]:
            - link "Fashion and Accessories" [ref=f6e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e81]:
            - link "Beauty and Saloon" [ref=f6e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e88]:
            - link "Autoparts and Accessories" [ref=f6e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e95]:
            - link "Washing machine" [ref=f6e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e102]:
            - link "Gaming consoles" [ref=f6e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e109]:
            - link "Air conditioner" [ref=f6e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e116]:
            - link "Web Cameras" [ref=f6e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f6e123]:
      - heading [level=5] [ref=f6e124]:
        - text: Quick Links
        - link "close" [ref=f6e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f6e126]:
        - navigation [ref=f6e128]:
          - list [ref=f6e130]:
            - listitem [ref=f6e131]:
              - link " Special Hot" [ref=f6e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f6e133]: 
                - generic [ref=f6e134]: Special
                - generic [ref=f6e136]: Hot
            - listitem [ref=f6e137]:
              - link " Wishlist" [ref=f6e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f6e139]: 
                - generic [ref=f6e140]: Wishlist
            - listitem [ref=f6e142]:
              - link " Compare" [ref=f6e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f6e144]: 
                - generic [ref=f6e145]: Compare
            - listitem [ref=f6e147]:
              - link " My account" [ref=f6e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f6e149]: 
                - generic [ref=f6e150]: My account
            - listitem [ref=f6e152]:
              - link " Blog" [ref=f6e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f6e154]: 
                - generic [ref=f6e155]: Blog
            - listitem [ref=f6e157]:
              - link " Tracking" [ref=f6e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f6e159]: 
                - generic [ref=f6e160]: Tracking
            - listitem [ref=f6e162]:
              - link " Contact us" [ref=f6e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f6e164]: 
                - generic [ref=f6e165]: Contact us
        - separator [ref=f6e168]
        - paragraph [ref=f6e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f6e172]:
      - heading [level=5] [ref=f6e173]:
        - text: Cart
        - link "close" [ref=f6e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f6e175]:
        - generic [ref=f6e176]:
          - table [ref=f6e178]:
            - rowgroup [ref=f6e179]:
              - row [ref=f6e180]:
                - cell [ref=f6e181]:
                  - link [ref=f6e182] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                    - img "HTC Touch HD" [ref=f6e183]
                - cell [ref=f6e184]:
                  - link "HTC Touch HD" [ref=f6e185] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                  - text: "Model: Product 1 Reward Points: 400"
                - cell "x1" [ref=f6e186]
                - cell "$120.00" [ref=f6e187]
          - table [ref=f6e188]:
            - rowgroup [ref=f6e189]:
              - row [ref=f6e190]:
                - cell "Sub-Total:" [ref=f6e191]
                - cell [ref=f6e192]:
                  - strong [ref=f6e193]: $120.00
              - row [ref=f6e194]:
                - cell "Flat Shipping Rate:" [ref=f6e195]
                - cell [ref=f6e196]:
                  - strong [ref=f6e197]: $5.00
              - row [ref=f6e198]:
                - cell "Total:" [ref=f6e199]
                - cell [ref=f6e200]:
                  - strong [ref=f6e201]: $125.00
        - generic [ref=f6e203]:
          - button " Edit cart" [ref=f6e205] [cursor=pointer]:
            - generic [ref=f6e206]: 
            - text: Edit cart
          - button " Checkout" [ref=f6e208] [cursor=pointer]:
            - generic [ref=f6e209]: 
            - text: Checkout
    - generic [ref=f6e210]:
      - banner [ref=f6e211]:
        - button "" [ref=f6e213] [cursor=pointer]
        - generic [ref=f6e215]:
          - generic [ref=f6e216]:
            - figure [ref=f6e218]:
              - link [ref=f6e219] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f6e220]
            - generic [ref=f6e224]:
              - generic [ref=f6e226]:
                - button "All Categories" [ref=f6e228] [cursor=pointer]
                - textbox "Search For Products" [ref=f6e230]
              - button "Search" [ref=f6e232] [cursor=pointer]
            - link "Compare" [ref=f6e234] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f6e239] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "1" [ref=f6e244] [cursor=pointer]
          - text: 
        - generic [ref=f6e250]:
          - generic [ref=f6e252] [cursor=pointer]:
            - button "Shop by Category" [ref=f6e254]
            - navigation [ref=f6e259]:
              - list [ref=f6e261]:
                - listitem [ref=f6e262]:
                  - link "Home" [ref=f6e263]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f6e266]:
                  - link "Special Hot" [ref=f6e267]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f6e268]: Special
                    - generic [ref=f6e270]: Hot
                - listitem [ref=f6e271]:
                  - link "Blog" [ref=f6e272]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f6e275]:
                  - button "Mega Menu" [ref=f6e276]
                - listitem [ref=f6e279]:
                  - button "AddOns Featured" [ref=f6e280]:
                    - generic [ref=f6e281]: AddOns
                    - generic [ref=f6e283]: Featured
                - listitem [ref=f6e284]:
                  - button " My account" [ref=f6e285]:
                    - generic [ref=f6e286]: 
                    - generic [ref=f6e287]: My account
          - text:  
          - paragraph [ref=f6e291]:
            - strong [ref=f6e292]: This is a dummy website for Web Automation Testing
      - generic [ref=f6e293]:
        - navigation "breadcrumb" [ref=f6e294]:
          - list [ref=f6e295]:
            - listitem [ref=f6e296]:
              - link "" [ref=f6e297] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f6e299]:
              - text: /
              - link "Shopping Cart" [ref=f6e300] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart
            - listitem [ref=f6e301]:
              - text: /
              - link "Checkout" [ref=f6e302] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout
            - listitem [ref=f6e303]: / Confirm Order
        - generic [ref=f6e305]:
          - heading "Confirm Order" [level=1] [ref=f6e306]
          - table [ref=f6e308]:
            - rowgroup [ref=f6e309]:
              - row [ref=f6e310]:
                - cell "Product Name" [ref=f6e311]
                - cell "Model" [ref=f6e312]
                - cell "Quantity" [ref=f6e313]
                - cell "Price" [ref=f6e314]
                - cell "Total" [ref=f6e315]
            - rowgroup [ref=f6e316]:
              - row [ref=f6e317]:
                - cell "HTC Touch HD" [ref=f6e318]
                - cell "Product 1" [ref=f6e319]
                - cell "1" [ref=f6e320]
                - cell "$120.00" [ref=f6e321]
                - cell "$120.00" [ref=f6e322]
            - rowgroup [ref=f6e323]:
              - row [ref=f6e324]:
                - cell [ref=f6e325]:
                  - strong [ref=f6e326]: "Sub-Total:"
                - cell "$120.00" [ref=f6e327]
              - row [ref=f6e328]:
                - cell [ref=f6e329]:
                  - strong [ref=f6e330]: "Flat Shipping Rate:"
                - cell "$5.00" [ref=f6e331]
              - row [ref=f6e332]:
                - cell [ref=f6e333]:
                  - strong [ref=f6e334]: "Total:"
                - cell "$125.00" [ref=f6e335]
          - generic [ref=f6e336]:
            - generic [ref=f6e337]:
              - heading "Payment Address" [level=4] [ref=f6e338]
              - generic [ref=f6e339]: addd adddadddaddd adddPuducherry,India
            - generic [ref=f6e341]:
              - heading "Shipping Address" [level=4] [ref=f6e342]
              - generic [ref=f6e343]: addd adddadddaddd adddPuducherry,India
          - heading "Shipping Method:" [level=4] [ref=f6e345]
          - generic [ref=f6e346]: Flat Shipping Rate
          - generic [ref=f6e348]:
            - link " Edit" [ref=f6e349] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout
              - generic [ref=f6e350]: 
              - text: Edit
            - button "Confirm Order " [active] [ref=f6e351] [cursor=pointer]:
              - status [ref=f6e352]
              - text: Confirm Order
              - generic [ref=f6e353]: 
      - contentinfo [ref=f6e354]:
        - paragraph [ref=f6e360]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
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
  130 |         // await page.waitForSelector('#input-payment-country:not([disabled])');
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
  143 |         await page.waitForSelector('#input-agree', { state: 'visible' });
  144 |         await page.getByRole('checkbox', { name: 'agree' }).check({ force: true });
  145 |         //     await page.getByRole('button', { name: 'Continue' }).click();
  146 |         //    // await page.waitForSelector("#button-confirm");
  147 |         //     await page.waitForSelector('#button-confirm', { state: 'visible' });
  148 |         //     await page.locator('#button-confirm').click({ force: true });
  149 |         //    
  150 |         await page.getByRole('button', { name: 'Continue ' }).click();
  151 |         await page.getByRole('button', { name: 'Confirm Order ' }).click();
> 152 |         const tre = await page.getByRole('heading', { name: ' Your order has been placed!' }).textContent();
      |                                                                                                ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  153 |         console.log(tre)
  154 |         expect(tre).toContain(" Your order has been placed!")
  155 | 
  156 |     } else {
  157 |         console.log("Alert is not visible");
  158 |     }
  159 | 
  160 |     //await page.locator("").locator("")
  161 |     //await special.addFIrstProductToTheCart();
  162 |     //const isCartVisible=await special.isToastVisible();
  163 |     //expect(isCartVisible).toBeVisible();
  164 | })
  165 | 
  166 | 
  167 | 
```