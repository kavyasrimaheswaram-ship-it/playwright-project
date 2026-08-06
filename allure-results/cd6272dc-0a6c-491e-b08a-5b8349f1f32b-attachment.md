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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#input-payment-city')
    - locator resolved to <input value="" type="text" name="city" placeholder="City" class="form-control" id="input-payment-city"/>
    - fill("Test")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - generic [ref=f5e2]:
    - generic [ref=f5e3]:
      - heading [level=5] [ref=f5e4]:
        - text: Top categories
        - link "close" [ref=f5e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f5e8]:
        - list [ref=f5e10]:
          - listitem [ref=f5e11]:
            - link "Components" [ref=f5e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f5e18]:
            - link "Cameras" [ref=f5e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f5e25]:
            - link "Phone, Tablets & Ipod" [ref=f5e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f5e32]:
            - link "Software" [ref=f5e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f5e39]:
            - link "MP3 Players" [ref=f5e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f5e46]:
            - link "Laptops & Notebooks" [ref=f5e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f5e53]:
            - link "Desktops and Monitors" [ref=f5e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f5e60]:
            - link "Printers & Scanners" [ref=f5e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f5e67]:
            - link "Mice and Trackballs" [ref=f5e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f5e74]:
            - link "Fashion and Accessories" [ref=f5e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e81]:
            - link "Beauty and Saloon" [ref=f5e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e88]:
            - link "Autoparts and Accessories" [ref=f5e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e95]:
            - link "Washing machine" [ref=f5e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e102]:
            - link "Gaming consoles" [ref=f5e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e109]:
            - link "Air conditioner" [ref=f5e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f5e116]:
            - link "Web Cameras" [ref=f5e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f5e123]:
      - heading [level=5] [ref=f5e124]:
        - text: Quick Links
        - link "close" [ref=f5e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f5e126]:
        - navigation [ref=f5e128]:
          - list [ref=f5e130]:
            - listitem [ref=f5e131]:
              - link " Special Hot" [ref=f5e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f5e133]: 
                - generic [ref=f5e134]: Special
                - generic [ref=f5e136]: Hot
            - listitem [ref=f5e137]:
              - link " Wishlist" [ref=f5e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f5e139]: 
                - generic [ref=f5e140]: Wishlist
            - listitem [ref=f5e142]:
              - link " Compare" [ref=f5e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f5e144]: 
                - generic [ref=f5e145]: Compare
            - listitem [ref=f5e147]:
              - link " My account" [ref=f5e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f5e149]: 
                - generic [ref=f5e150]: My account
            - listitem [ref=f5e152]:
              - link " Blog" [ref=f5e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f5e154]: 
                - generic [ref=f5e155]: Blog
            - listitem [ref=f5e157]:
              - link " Tracking" [ref=f5e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f5e159]: 
                - generic [ref=f5e160]: Tracking
            - listitem [ref=f5e162]:
              - link " Contact us" [ref=f5e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f5e164]: 
                - generic [ref=f5e165]: Contact us
        - separator [ref=f5e168]
        - paragraph [ref=f5e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f5e172]:
      - heading [level=5] [ref=f5e173]:
        - text: Cart
        - link "close" [ref=f5e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f5e175]:
        - generic [ref=f5e176]:
          - table [ref=f5e178]:
            - rowgroup [ref=f5e179]:
              - row [ref=f5e180]:
                - cell [ref=f5e181]:
                  - link [ref=f5e182] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                    - img "HTC Touch HD" [ref=f5e183]
                - cell [ref=f5e184]:
                  - link "HTC Touch HD" [ref=f5e185] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                  - text: "Model: Product 1 Reward Points: 400"
                - cell "x1" [ref=f5e186]
                - cell "$146.00" [ref=f5e187]
          - table [ref=f5e188]:
            - rowgroup [ref=f5e189]:
              - row [ref=f5e190]:
                - cell "Sub-Total:" [ref=f5e191]
                - cell [ref=f5e192]:
                  - strong [ref=f5e193]: $120.00
              - row [ref=f5e194]:
                - cell "Flat Shipping Rate:" [ref=f5e195]
                - cell [ref=f5e196]:
                  - strong [ref=f5e197]: $5.00
              - row [ref=f5e198]:
                - cell "Eco Tax (-2.00):" [ref=f5e199]
                - cell [ref=f5e200]:
                  - strong [ref=f5e201]: $4.00
              - row [ref=f5e202]:
                - cell "VAT (20%):" [ref=f5e203]
                - cell [ref=f5e204]:
                  - strong [ref=f5e205]: $25.00
              - row [ref=f5e206]:
                - cell "Total:" [ref=f5e207]
                - cell [ref=f5e208]:
                  - strong [ref=f5e209]: $154.00
        - generic [ref=f5e211]:
          - button " Edit cart" [ref=f5e213] [cursor=pointer]:
            - generic [ref=f5e214]: 
            - text: Edit cart
          - button " Checkout" [ref=f5e216] [cursor=pointer]:
            - generic [ref=f5e217]: 
            - text: Checkout
    - generic [ref=f5e218]:
      - banner [ref=f5e219]:
        - button "" [ref=f5e221] [cursor=pointer]
        - generic [ref=f5e223]:
          - generic [ref=f5e224]:
            - figure [ref=f5e226]:
              - link [ref=f5e227] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f5e228]
            - generic [ref=f5e232]:
              - generic [ref=f5e234]:
                - button "All Categories" [ref=f5e236] [cursor=pointer]
                - textbox "Search For Products" [ref=f5e238]
              - button "Search" [ref=f5e240] [cursor=pointer]
            - link "Compare" [ref=f5e242] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f5e247] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "1" [ref=f5e252] [cursor=pointer]
          - text: 
        - generic [ref=f5e258]:
          - generic [ref=f5e260] [cursor=pointer]:
            - button "Shop by Category" [ref=f5e262]
            - navigation [ref=f5e267]:
              - list [ref=f5e269]:
                - listitem [ref=f5e270]:
                  - link "Home" [ref=f5e271]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f5e274]:
                  - link "Special Hot" [ref=f5e275]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f5e276]: Special
                    - generic [ref=f5e278]: Hot
                - listitem [ref=f5e279]:
                  - link "Blog" [ref=f5e280]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f5e283]:
                  - button "Mega Menu" [ref=f5e284]
                - listitem [ref=f5e287]:
                  - button "AddOns Featured" [ref=f5e288]:
                    - generic [ref=f5e289]: AddOns
                    - generic [ref=f5e291]: Featured
                - listitem [ref=f5e292]:
                  - button " My account" [ref=f5e293]:
                    - generic [ref=f5e294]: 
                    - generic [ref=f5e295]: My account
          - text:  
          - paragraph [ref=f5e299]:
            - strong [ref=f5e300]: This is a dummy website for Web Automation Testing
      - generic [ref=f5e301]:
        - navigation "breadcrumb" [ref=f5e302]:
          - list [ref=f5e303]:
            - listitem [ref=f5e304]:
              - link "" [ref=f5e305] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f5e307]:
              - text: /
              - link "Shopping Cart" [ref=f5e308] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart
            - listitem [ref=f5e309]: / Checkout
        - generic [ref=f5e313]:
          - generic [ref=f5e315]:
            - generic [ref=f5e316]:
              - heading "Telephone" [level=4] [ref=f5e317]
              - generic [ref=f5e318]:
                - textbox "Telephone" [ref=f5e319]: "1234567890"
                - generic [ref=f5e320]: Enter valid phone number with country code!
            - generic [ref=f5e321]:
              - heading "Billing Address" [level=4] [ref=f5e322]
              - generic [ref=f5e323]:
                - generic [ref=f5e324]:
                  - radio "I want to use an existing address" [checked] [ref=f5e325]
                  - generic [ref=f5e326]: I want to use an existing address
                - combobox [ref=f5e328]:
                  - option "ksksk kkkkkk, hhhhhhh, hhhhhhhhhh, Lancashire, United Kingdom" [selected]
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "qqqq qqqq, wereee, qwerw, Lancashire, United Kingdom"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "addd addd, addd, addd, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "111w qqqqq, qqqqq, qqqqqqq, Lancashire, United Kingdom"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
                  - option "K S, Test, Test, Puducherry, India"
              - generic [ref=f5e330]:
                - radio "I want to use a new address" [ref=f5e331]
                - generic [ref=f5e332]: I want to use a new address
              - text: "* * * * * * *"
              - generic [ref=f5e333]:
                - checkbox "My delivery and billing addresses are the same." [checked] [ref=f5e334]
                - generic [ref=f5e335]: My delivery and billing addresses are the same.
            - text: "* * * * * * *"
            - generic [ref=f5e336]:
              - heading "Please select the preferred payment method to use on this order." [level=4] [ref=f5e337]
              - generic [ref=f5e338]:
                - radio "Cash On Delivery" [checked] [ref=f5e339]
                - generic [ref=f5e340]: Cash On Delivery
            - generic [ref=f5e341]:
              - heading "Please select the preferred shipping method to use on this order." [level=4] [ref=f5e342]
              - paragraph [ref=f5e343]:
                - strong [ref=f5e344]: Flat Rate
              - generic [ref=f5e345]:
                - radio "Flat Shipping Rate - $8.00" [checked] [ref=f5e346]
                - generic [ref=f5e347]: Flat Shipping Rate - $8.00
          - generic [ref=f5e349]:
            - generic [ref=f5e350]:
              - table [ref=f5e352]:
                - rowgroup [ref=f5e353]:
                  - row [ref=f5e354]:
                    - columnheader "Image" [ref=f5e355]
                    - columnheader "Product Name" [ref=f5e356]
                    - columnheader "Quantity" [ref=f5e357]
                    - columnheader "Unit Price" [ref=f5e358]
                    - columnheader "Total" [ref=f5e359]
                - rowgroup [ref=f5e360]:
                  - row [ref=f5e361]:
                    - cell [ref=f5e362]:
                      - link [ref=f5e363] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                        - img "HTC Touch HD" [ref=f5e364]
                    - cell [ref=f5e365]:
                      - link "HTC Touch HD" [ref=f5e366] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                      - text: "Model: Product 1 Reward Points: 400"
                    - cell [ref=f5e367]:
                      - generic [ref=f5e368]:
                        - spinbutton [active] [ref=f5e369]: "1"
                        - generic [ref=f5e370]:
                          - button "" [ref=f5e371] [cursor=pointer]
                          - button "" [ref=f5e373] [cursor=pointer]
                    - cell "$146.00" [ref=f5e375]
                    - cell "$146.00" [ref=f5e376]
              - table [ref=f5e377]:
                - rowgroup [ref=f5e378]:
                  - row [ref=f5e379]:
                    - cell "Sub-Total:" [ref=f5e380]
                    - cell [ref=f5e381]:
                      - strong [ref=f5e382]: $120.00
                  - row [ref=f5e383]:
                    - cell "Flat Shipping Rate:" [ref=f5e384]
                    - cell [ref=f5e385]:
                      - strong [ref=f5e386]: $5.00
                  - row [ref=f5e387]:
                    - cell "Eco Tax (-2.00):" [ref=f5e388]
                    - cell [ref=f5e389]:
                      - strong [ref=f5e390]: $4.00
                  - row [ref=f5e391]:
                    - cell "VAT (20%):" [ref=f5e392]
                    - cell [ref=f5e393]:
                      - strong [ref=f5e394]: $25.00
                  - row [ref=f5e395]:
                    - cell "Total:" [ref=f5e396]
                    - cell [ref=f5e397]:
                      - strong [ref=f5e398]: $154.00
              - generic [ref=f5e399]:
                - heading "Use Coupon Code " [level=5] [ref=f5e401] [cursor=pointer]:
                  - text: Use Coupon Code
                  - generic [ref=f5e402]: 
                - heading "Use Gift Certificate " [level=5] [ref=f5e404] [cursor=pointer]:
                  - text: Use Gift Certificate
                  - generic [ref=f5e405]: 
            - generic [ref=f5e406]:
              - generic [ref=f5e407]: Add Comments About Your Order
              - textbox "Add Comments About Your Order" [ref=f5e408]
            - generic [ref=f5e409]:
              - checkbox "I have read and agree to the Terms & Conditions" [ref=f5e410]
              - generic [ref=f5e411]:
                - text: I have read and agree to the
                - link "Terms & Conditions" [ref=f5e412] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/information/agree&information_id=5
            - paragraph [ref=f5e414]: "* - Fields are required"
            - button "Continue " [ref=f5e415] [cursor=pointer]:
              - text: Continue
              - generic [ref=f5e416]: 
      - contentinfo [ref=f5e417]:
        - paragraph [ref=f5e423]: © LambdaTest - Powered by OpenCart
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
> 50 |             await this.page.locator("#input-payment-city").fill(city)
     |                                                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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
  88 |          this.page.waitForNavigation();
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