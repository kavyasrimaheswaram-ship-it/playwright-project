# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Add to cart_05
- Location: tests\login.spec.ts:88:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: " Your order has been placed!"
Received string:    "Confirm Order"
```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - generic [ref=f7e2]:
    - generic [ref=f7e3]:
      - heading [level=5] [ref=f7e4]:
        - text: Top categories
        - link "close" [ref=f7e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f7e8]:
        - list [ref=f7e10]:
          - listitem [ref=f7e11]:
            - link "Components" [ref=f7e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f7e18]:
            - link "Cameras" [ref=f7e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f7e25]:
            - link "Phone, Tablets & Ipod" [ref=f7e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f7e32]:
            - link "Software" [ref=f7e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f7e39]:
            - link "MP3 Players" [ref=f7e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f7e46]:
            - link "Laptops & Notebooks" [ref=f7e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f7e53]:
            - link "Desktops and Monitors" [ref=f7e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f7e60]:
            - link "Printers & Scanners" [ref=f7e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f7e67]:
            - link "Mice and Trackballs" [ref=f7e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f7e74]:
            - link "Fashion and Accessories" [ref=f7e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e81]:
            - link "Beauty and Saloon" [ref=f7e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e88]:
            - link "Autoparts and Accessories" [ref=f7e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e95]:
            - link "Washing machine" [ref=f7e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e102]:
            - link "Gaming consoles" [ref=f7e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e109]:
            - link "Air conditioner" [ref=f7e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f7e116]:
            - link "Web Cameras" [ref=f7e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f7e123]:
      - heading [level=5] [ref=f7e124]:
        - text: Quick Links
        - link "close" [ref=f7e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f7e126]:
        - navigation [ref=f7e128]:
          - list [ref=f7e130]:
            - listitem [ref=f7e131]:
              - link " Special Hot" [ref=f7e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f7e133]: 
                - generic [ref=f7e134]: Special
                - generic [ref=f7e136]: Hot
            - listitem [ref=f7e137]:
              - link " Wishlist" [ref=f7e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f7e139]: 
                - generic [ref=f7e140]: Wishlist
            - listitem [ref=f7e142]:
              - link " Compare" [ref=f7e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f7e144]: 
                - generic [ref=f7e145]: Compare
            - listitem [ref=f7e147]:
              - link " My account" [ref=f7e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f7e149]: 
                - generic [ref=f7e150]: My account
            - listitem [ref=f7e152]:
              - link " Blog" [ref=f7e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f7e154]: 
                - generic [ref=f7e155]: Blog
            - listitem [ref=f7e157]:
              - link " Tracking" [ref=f7e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f7e159]: 
                - generic [ref=f7e160]: Tracking
            - listitem [ref=f7e162]:
              - link " Contact us" [ref=f7e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f7e164]: 
                - generic [ref=f7e165]: Contact us
        - separator [ref=f7e168]
        - paragraph [ref=f7e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f7e172]:
      - heading [level=5] [ref=f7e173]:
        - text: Cart
        - link "close" [ref=f7e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f7e175]:
        - generic [ref=f7e176]:
          - paragraph [ref=f7e177]: Your shopping cart is empty!
          - table [ref=f7e178]:
            - rowgroup [ref=f7e179]:
              - row [ref=f7e180]:
                - cell "Sub-Total:" [ref=f7e181]
                - cell [ref=f7e182]:
                  - strong [ref=f7e183]: $0.00
              - row [ref=f7e184]:
                - cell "Total:" [ref=f7e185]
                - cell [ref=f7e186]:
                  - strong [ref=f7e187]: $0.00
        - generic [ref=f7e189]:
          - button " Edit cart" [ref=f7e191] [cursor=pointer]:
            - generic [ref=f7e192]: 
            - text: Edit cart
          - button " Checkout" [ref=f7e194] [cursor=pointer]:
            - generic [ref=f7e195]: 
            - text: Checkout
    - generic [ref=f7e196]:
      - banner [ref=f7e197]:
        - button "" [ref=f7e199] [cursor=pointer]
        - generic [ref=f7e201]:
          - generic [ref=f7e202]:
            - figure [ref=f7e204]:
              - link [ref=f7e205] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f7e206]
            - generic [ref=f7e210]:
              - generic [ref=f7e212]:
                - button "All Categories" [ref=f7e214] [cursor=pointer]
                - textbox "Search For Products" [ref=f7e216]
              - button "Search" [ref=f7e218] [cursor=pointer]
            - link "Compare" [ref=f7e220] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f7e225] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "0" [ref=f7e230] [cursor=pointer]
          - text: 
        - generic [ref=f7e236]:
          - generic [ref=f7e238] [cursor=pointer]:
            - button "Shop by Category" [ref=f7e240]
            - navigation [ref=f7e245]:
              - list [ref=f7e247]:
                - listitem [ref=f7e248]:
                  - link "Home" [ref=f7e249]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f7e252]:
                  - link "Special Hot" [ref=f7e253]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f7e254]: Special
                    - generic [ref=f7e256]: Hot
                - listitem [ref=f7e257]:
                  - link "Blog" [ref=f7e258]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f7e261]:
                  - button "Mega Menu" [ref=f7e262]
                - listitem [ref=f7e265]:
                  - button "AddOns Featured" [ref=f7e266]:
                    - generic [ref=f7e267]: AddOns
                    - generic [ref=f7e269]: Featured
                - listitem [ref=f7e270]:
                  - button " My account" [ref=f7e271]:
                    - generic [ref=f7e272]: 
                    - generic [ref=f7e273]: My account
          - text:  
          - paragraph [ref=f7e277]:
            - strong [ref=f7e278]: This is a dummy website for Web Automation Testing
      - generic [ref=f7e279]:
        - navigation "breadcrumb" [ref=f7e280]:
          - list [ref=f7e281]:
            - listitem [ref=f7e282]:
              - link "" [ref=f7e283] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f7e285]:
              - text: /
              - link "Shopping Cart" [ref=f7e286] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart
            - listitem [ref=f7e287]:
              - text: /
              - link "Checkout" [ref=f7e288] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout
            - listitem [ref=f7e289]: / Success
        - generic [ref=f7e291]:
          - heading " Your order has been placed!" [level=1] [ref=f7e292]:
            - generic [ref=f7e293]: 
            - text: Your order has been placed!
          - paragraph
          - paragraph [ref=f7e294]: Your order has been successfully processed!
          - paragraph [ref=f7e295]:
            - text: You can view your order history by going to the
            - link "my account" [ref=f7e296] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
            - text: page and by clicking on
            - link "history" [ref=f7e297] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
            - text: .
          - paragraph [ref=f7e298]:
            - text: If your purchase has an associated download, you can go to the account
            - link "downloads" [ref=f7e299] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
            - text: page to view them.
          - paragraph [ref=f7e300]:
            - text: Please direct any questions you have to the
            - link "store owner" [ref=f7e301] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
            - text: .
          - paragraph [ref=f7e302]: Thanks for shopping with us online!
          - paragraph
          - link "Continue" [ref=f7e304] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
      - contentinfo [ref=f7e305]:
        - paragraph [ref=f7e311]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
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
  88  | test("Add to cart_05", async ({ page, baseURL }) => {
  89  |     const login = new LoginPage(page);
  90  |     const homepage = new HomePage(page);
  91  |     //const payment = new PaymentPage(page);
  92  |     const register = new RegisterPage(page);
  93  |     const addtocart = new addToCartPage(page)
  94  |     await page.goto(`${baseURL}route=account/login`)
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
  106 |     await addtocart.productCheck();
  107 |     await addtocart.productQuatityUpdate();
  108 |     await addtocart.paymentAddress("Test");
  109 |     await register.enterFirstName("K");
  110 |     await register.enterLastName("S");
  111 |     await addtocart.paymentCity("Test");
  112 |     await addtocart.paymentPostalCode("00000");
  113 |     await addtocart.paymentSelectCountry("India");
  114 |     await addtocart.paymentSelectZone("Puducherry");
  115 |     await addtocart.clickAgree();
  116 |     await addtocart.clickContinue();
  117 |     await addtocart.clickConfirmOrder();
  118 |     const message = await addtocart.successMessage();
> 119 |     expect(message).toContain(" Your order has been placed!")
      |                     ^ Error: expect(received).toContain(expected) // indexOf
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