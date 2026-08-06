# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Add to cart_05
- Location: tests\login.spec.ts:88:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: " Your order has been placed!"
Received string:    "Confirm Order"
```

```
Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
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
                  - text: "Model: Product 1 Reward Points: 4000"
                - cell "x10" [ref=f6e186]
                - cell "$1,200.00" [ref=f6e187]
          - table [ref=f6e188]:
            - rowgroup [ref=f6e189]:
              - row [ref=f6e190]:
                - cell "Sub-Total:" [ref=f6e191]
                - cell [ref=f6e192]:
                  - strong [ref=f6e193]: $1,200.00
              - row [ref=f6e194]:
                - cell "Flat Shipping Rate:" [ref=f6e195]
                - cell [ref=f6e196]:
                  - strong [ref=f6e197]: $5.00
              - row [ref=f6e198]:
                - cell "Total:" [ref=f6e199]
                - cell [ref=f6e200]:
                  - strong [ref=f6e201]: $1,205.00
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
            - button "10" [ref=f6e244] [cursor=pointer]
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
                - cell "10" [ref=f6e320]
                - cell "$120.00" [ref=f6e321]
                - cell "$1,200.00" [ref=f6e322]
            - rowgroup [ref=f6e323]:
              - row [ref=f6e324]:
                - cell [ref=f6e325]:
                  - strong [ref=f6e326]: "Sub-Total:"
                - cell "$1,200.00" [ref=f6e327]
              - row [ref=f6e328]:
                - cell [ref=f6e329]:
                  - strong [ref=f6e330]: "Flat Shipping Rate:"
                - cell "$5.00" [ref=f6e331]
              - row [ref=f6e332]:
                - cell [ref=f6e333]:
                  - strong [ref=f6e334]: "Total:"
                - cell "$1,205.00" [ref=f6e335]
          - generic [ref=f6e336]:
            - generic [ref=f6e337]:
              - heading "Payment Address" [level=4] [ref=f6e338]
              - generic [ref=f6e339]: K STestTest 00000Puducherry,India
            - generic [ref=f6e341]:
              - heading "Shipping Address" [level=4] [ref=f6e342]
              - generic [ref=f6e343]: K STestTest 00000Puducherry,India
          - heading "Shipping Method:" [level=4] [ref=f6e345]
          - generic [ref=f6e346]: Flat Shipping Rate
          - generic [ref=f6e348]:
            - link " Edit" [ref=f6e349] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout
              - generic [ref=f6e350]: 
              - text: Edit
            - button "Confirm Order " [ref=f6e351] [cursor=pointer]:
              - text: Confirm Order
              - generic [ref=f6e352]: 
      - contentinfo [ref=f6e353]:
        - paragraph [ref=f6e359]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export default class addToCartPage {
  4  | 
  5  |     constructor(public page: Page) {
  6  | 
  7  |     }
  8  |     async errorMessageCart() {
  9  |         const errMsg = await this.page.locator("//div[contains(@class,'content-products')]").textContent();
  10 |         return errMsg;
  11 |     }
  12 |     async clickMegaMenu() {
  13 |         await Promise.all([
  14 |             this.page.waitForLoadState('networkidle'),
  15 |             await this.page.waitForSelector("//span[contains(@class,'title') and contains(text(),'Mega Menu')]", { state: 'visible' }),
  16 |             await this.page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]").hover()
  17 |         ])
  18 |      
  19 |     }
  20 |     async productAddToCart() {
  21 |         await Promise.all([
  22 |             this.page.waitForLoadState("networkidle"),
  23 |             await this.page.getByRole('link', { name: 'Headphones' }).click(),
  24 |             await this.page.getByRole('heading', { level: 4, name: 'HTC Touch HD' }).click(),
  25 |             await this.page.getByRole('button', { name: 'Add to Cart' }).click(),
  26 |            // await this.page.getByRole('button', { name: 'Close' }).waitFor({ state: 'visible' }),
  27 |             await this.page.getByRole('button', { name: 'Close' }).click({force:true}),
  28 |             await this.page.locator('a[href="#cart-total-drawer"]').nth(1).click(),
  29 |              await this.page.getByRole('button', { name: 'Checkout' }).waitFor({ state: 'visible' }),
  30 |             await this.page.getByRole('button', { name: 'Checkout' }).click()
  31 |         ])
  32 |     }
  33 | 
  34 |     async productQuatityUpdate() {
  35 |         await this.page.locator("input[id^='quantity']").click();
  36 |         await this.page.locator("input[id^='quantity']").fill("10");
  37 |         await this.page.locator("//*[@id='checkout-cart']/table/tbody/tr/td[3]/div/div/button[1]").click({ force: true });
  38 |     }
  39 |     async paymentAddress(address1:string){
  40 |         await Promise.all([
  41 |             this.page.waitForLoadState('domcontentloaded'),
  42 |             await this.page.locator('#payment-address').getByText('I want to use a new address').click(),
  43 |             await this.page.locator('#input-payment-address-1').scrollIntoViewIfNeeded(),
  44 |             await this.page.locator('#input-payment-address-1').fill(address1)
  45 |         ])
  46 |     }
  47 |     async paymentCity(city:string){
  48 |         await Promise.all([
  49 |             await this.page.locator('#input-payment-city').scrollIntoViewIfNeeded(),
  50 |             await this.page.locator("#input-payment-city").fill(city)
  51 |         ])
  52 |     }
  53 |     async paymentPostalCode(postalcode:string){
  54 |         await Promise.all([
  55 |             await this.page.locator("#input-payment-postcode").fill(postalcode)
  56 |         ])
  57 |     }
  58 |     async paymentSelectCountry(country:string){
  59 |         await Promise.all([
  60 |             await this.page.selectOption("#input-payment-country", {
  61 |                 label: country
  62 |             })
  63 |         ])
  64 |     }
  65 |      async paymentSelectZone(zone:string){
  66 |         await Promise.all([
  67 |             await this.page.waitForSelector('#input-payment-zone:not([disabled])'),
  68 |             await this.page.selectOption("#input-payment-zone", {
  69 |                 label: zone
  70 |             })
  71 |         ])
  72 |     }
  73 |     async clickAgree(){
  74 |         await this.page.waitForSelector('#input-agree', { state: 'visible' });
  75 |         await this.page.getByRole('checkbox', { name: 'agree' }).check({ force: true });
  76 |     }
  77 |     async clickContinue(){
  78 |         await this.page.getByRole('button', { name: 'Continue ' }).click();
  79 |     }
  80 |     async clickConfirmOrder(){
  81 |         await Promise.all([
  82 |             this.page.waitForNavigation(),
  83 |             await this.page.waitForSelector('#button-confirm', { state: 'visible' }),
  84 |             await this.page.getByRole('button', { name: 'Confirm Order ' }).click({force:true})
  85 |         ])
  86 |     }
  87 |     async successMessage(){
> 88 |          this.page.waitForNavigation();
     |                    ^ Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
  89 |         const msg = await this.page.locator('h1.page-title').textContent();
  90 |         console.log(msg);
  91 |         
  92 |         return msg;
  93 | 
  94 |         
  95 |     }
  96 | 
  97 | 
  98 | }
```