# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Add to cart_05
- Location: tests\login.spec.ts:77:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a[href="#cart-total-drawer"]') resolved to 3 elements:
    1) <a aria-label="close" href="#cart-total-drawer" data-toggle="mz-pure-drawer" class="fas fa-times text-reset ml-auto"></a> aka getByRole('heading', { name: 'Cart close' }).getByLabel('close')
    2) <a role="button" aria-expanded="false" href="#cart-total-drawer" data-toggle="mz-pure-drawer" aria-controls="cart-total-drawer" data-total_format="(\d+) item\(s\) \- (.+)" class="cart text-reset text-decoration-none no-title">…</a> aka getByRole('button', { name: '1' })
    3) <a role="button" aria-expanded="false" href="#cart-total-drawer" data-toggle="mz-pure-drawer" aria-controls="cart-total-drawer" data-total_format="(\d+) item\(s\) \- (.+)" class="cart text-reset text-decoration-none no-title">…</a> aka locator('#entry_217830').getByText('1 1 item(s) - $')

Call log:
  - waiting for locator('a[href="#cart-total-drawer"]')

```

# Page snapshot

```yaml
- generic [ref=f4e1]:
  - generic [ref=f4e2]:
    - generic [ref=f4e3]:
      - heading [level=5] [ref=f4e4]:
        - text: Top categories
        - link "close" [ref=f4e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f4e8]:
        - list [ref=f4e10]:
          - listitem [ref=f4e11]:
            - link "Components" [ref=f4e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f4e18]:
            - link "Cameras" [ref=f4e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f4e25]:
            - link "Phone, Tablets & Ipod" [ref=f4e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f4e32]:
            - link "Software" [ref=f4e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f4e39]:
            - link "MP3 Players" [ref=f4e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f4e46]:
            - link "Laptops & Notebooks" [ref=f4e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f4e53]:
            - link "Desktops and Monitors" [ref=f4e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f4e60]:
            - link "Printers & Scanners" [ref=f4e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f4e67]:
            - link "Mice and Trackballs" [ref=f4e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f4e74]:
            - link "Fashion and Accessories" [ref=f4e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e81]:
            - link "Beauty and Saloon" [ref=f4e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e88]:
            - link "Autoparts and Accessories" [ref=f4e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e95]:
            - link "Washing machine" [ref=f4e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e102]:
            - link "Gaming consoles" [ref=f4e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e109]:
            - link "Air conditioner" [ref=f4e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f4e116]:
            - link "Web Cameras" [ref=f4e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f4e123]:
      - heading [level=5] [ref=f4e124]:
        - text: Quick Links
        - link "close" [ref=f4e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f4e126]:
        - navigation [ref=f4e128]:
          - list [ref=f4e130]:
            - listitem [ref=f4e131]:
              - link " Special Hot" [ref=f4e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f4e133]: 
                - generic [ref=f4e134]: Special
                - generic [ref=f4e136]: Hot
            - listitem [ref=f4e137]:
              - link " Wishlist" [ref=f4e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f4e139]: 
                - generic [ref=f4e140]: Wishlist
            - listitem [ref=f4e142]:
              - link " Compare" [ref=f4e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f4e144]: 
                - generic [ref=f4e145]: Compare
            - listitem [ref=f4e147]:
              - link " My account" [ref=f4e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f4e149]: 
                - generic [ref=f4e150]: My account
            - listitem [ref=f4e152]:
              - link " Blog" [ref=f4e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f4e154]: 
                - generic [ref=f4e155]: Blog
            - listitem [ref=f4e157]:
              - link " Tracking" [ref=f4e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f4e159]: 
                - generic [ref=f4e160]: Tracking
            - listitem [ref=f4e162]:
              - link " Contact us" [ref=f4e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f4e164]: 
                - generic [ref=f4e165]: Contact us
        - separator [ref=f4e168]
        - paragraph [ref=f4e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f4e172]:
      - heading [level=5] [ref=f4e173]:
        - text: Cart
        - link "close" [ref=f4e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f4e175]:
        - generic [ref=f4e176]:
          - table [ref=f4e178]:
            - rowgroup [ref=f4e179]:
              - row [ref=f4e180]:
                - cell [ref=f4e181]:
                  - link [ref=f4e182] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                    - img "HTC Touch HD" [ref=f4e183]
                - cell [ref=f4e184]:
                  - link "HTC Touch HD" [ref=f4e185] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                  - text: "Model: Product 1 Reward Points: 400"
                - cell "x1" [ref=f4e186]
                - cell "$146.00" [ref=f4e187]
          - table [ref=f4e188]:
            - rowgroup [ref=f4e189]:
              - row [ref=f4e190]:
                - cell "Sub-Total:" [ref=f4e191]
                - cell [ref=f4e192]:
                  - strong [ref=f4e193]: $120.00
              - row [ref=f4e194]:
                - cell "Eco Tax (-2.00):" [ref=f4e195]
                - cell [ref=f4e196]:
                  - strong [ref=f4e197]: $2.00
              - row [ref=f4e198]:
                - cell "VAT (20%):" [ref=f4e199]
                - cell [ref=f4e200]:
                  - strong [ref=f4e201]: $24.00
              - row [ref=f4e202]:
                - cell "Total:" [ref=f4e203]
                - cell [ref=f4e204]:
                  - strong [ref=f4e205]: $146.00
        - generic [ref=f4e207]:
          - button " Edit cart" [ref=f4e209] [cursor=pointer]:
            - generic [ref=f4e210]: 
            - text: Edit cart
          - button " Checkout" [ref=f4e212] [cursor=pointer]:
            - generic [ref=f4e213]: 
            - text: Checkout
    - text: 
    - generic:    
    - text:  
    - generic [ref=f4e214]:
      - banner [ref=f4e215]:
        - button "" [ref=f4e217] [cursor=pointer]
        - generic [ref=f4e219]:
          - generic [ref=f4e220]:
            - figure [ref=f4e222]:
              - link [ref=f4e223] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f4e224]
            - generic [ref=f4e228]:
              - generic [ref=f4e230]:
                - button "All Categories" [ref=f4e232] [cursor=pointer]
                - textbox "Search For Products" [ref=f4e234]
              - button "Search" [ref=f4e236] [cursor=pointer]
            - link "Compare" [ref=f4e238] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f4e243] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "1" [ref=f4e248] [cursor=pointer]
          - text: 
        - generic [ref=f4e254]:
          - generic [ref=f4e256] [cursor=pointer]:
            - button "Shop by Category" [ref=f4e258]
            - navigation [ref=f4e263]:
              - list [ref=f4e265]:
                - listitem [ref=f4e266]:
                  - link "Home" [ref=f4e267]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f4e270]:
                  - link "Special Hot" [ref=f4e271]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f4e272]: Special
                    - generic [ref=f4e274]: Hot
                - listitem [ref=f4e275]:
                  - link "Blog" [ref=f4e276]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f4e279]:
                  - button "Mega Menu" [ref=f4e280]
                - listitem [ref=f4e283]:
                  - button "AddOns Featured" [ref=f4e284]:
                    - generic [ref=f4e285]: AddOns
                    - generic [ref=f4e287]: Featured
                - listitem [ref=f4e288]:
                  - button " My account" [ref=f4e289]:
                    - generic [ref=f4e290]: 
                    - generic [ref=f4e291]: My account
          - text:  
          - paragraph [ref=f4e295]:
            - strong [ref=f4e296]: This is a dummy website for Web Automation Testing
      - generic [ref=f4e297]:
        - figure [ref=f4e301]:
          - link [ref=f4e302] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
            - img "Apple Cinema 30\"" [ref=f4e303]
        - generic [ref=f4e305]:
          - navigation "breadcrumb" [ref=f4e307]:
            - list [ref=f4e308]:
              - listitem [ref=f4e309]:
                - link "Home" [ref=f4e310] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                  - generic [ref=f4e311]: 
              - listitem [ref=f4e312]:
                - text: /
                - link "Components" [ref=f4e313] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
              - listitem [ref=f4e314]: / HTC Touch HD
          - generic [ref=f4e315]:
            - generic [ref=f4e316]:
              - generic [ref=f4e318]:
                - generic [ref=f4e319]:
                  - button "" [ref=f4e320] [cursor=pointer]
                  - link [ref=f4e322] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/1-500x500.webp
                    - img "HTC Touch HD" [ref=f4e323]
                - generic [ref=f4e325]:
                  - generic [ref=f4e326]:
                    - group "1 / 4" [ref=f4e327]:
                      - link [ref=f4e328] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/3-500x500.webp
                        - img "HTC Touch HD" [ref=f4e329]
                    - group "2 / 4" [ref=f4e330]:
                      - link [ref=f4e331] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/8-500x500.webp
                        - img "HTC Touch HD" [ref=f4e332]
                    - group "3 / 4" [ref=f4e333]:
                      - link [ref=f4e334] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/6-500x500.webp
                        - img "HTC Touch HD" [ref=f4e335]
                    - group "4 / 4" [ref=f4e336]:
                      - link [ref=f4e337] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/7-500x500.webp
                        - img "HTC Touch HD" [ref=f4e338]
                  - text:    
              - text:      
              - generic [ref=f4e339]:
                - tablist [ref=f4e342]:
                  - listitem [ref=f4e343]:
                    - tab "Description" [selected] [ref=f4e344] [cursor=pointer]
                  - listitem [ref=f4e345]:
                    - tab "Reviews" [ref=f4e346] [cursor=pointer]
                  - listitem [ref=f4e347]:
                    - tab "Custom" [ref=f4e348] [cursor=pointer]
                - generic [ref=f4e352]:
                  - paragraph [ref=f4e353]: HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC Touch HD provides the next generation of mobile functionality, all at a simple touch. Fully integrated with Windows Mobile Professional 6.1, ultrafast 3.5G, GPS, 5MP camera, plus lots more - all delivered on a breathtakingly crisp 3.8" WVGA touchscreen - you can take control of your mobile world with the HTC Touch HD.
                  - paragraph [ref=f4e354]:
                    - strong [ref=f4e355]: Features
                  - list [ref=f4e356]:
                    - listitem [ref=f4e357]: Processor Qualcomm® MSM 7201A™ 528 MHz
                    - listitem [ref=f4e358]: Windows Mobile® 6.1 Professional Operating System
                    - listitem [ref=f4e359]: "Memory: 512 MB ROM, 288 MB RAM"
                    - listitem [ref=f4e360]: "Dimensions: 115 mm x 62.8 mm x 12 mm / 146.4 grams"
                    - listitem [ref=f4e361]: 3.8-inch TFT-LCD flat touch-sensitive screen with 480 x 800 WVGA resolution
                    - listitem [ref=f4e362]: "HSDPA/WCDMA: Europe/Asia: 900/2100 MHz; Up to 2 Mbps up-link and 7.2 Mbps down-link speeds"
                    - listitem [ref=f4e363]: "Quad-band GSM/GPRS/EDGE: Europe/Asia: 850/900/1800/1900 MHz (Band frequency, HSUPA availability, and data speed are operator dependent.)"
                    - listitem [ref=f4e364]: Device Control via HTC TouchFLO™ 3D & Touch-sensitive front panel buttons
                    - listitem [ref=f4e365]: GPS and A-GPS ready
                    - listitem [ref=f4e366]: Bluetooth® 2.0 with Enhanced Data Rate and A2DP for wireless stereo headsets
                    - listitem [ref=f4e367]: "Wi-Fi®: IEEE 802.11 b/g"
                    - listitem [ref=f4e368]: HTC ExtUSB™ (11-pin mini-USB 2.0)
                    - listitem [ref=f4e369]: 5 megapixel color camera with auto focus
                    - listitem [ref=f4e370]: VGA CMOS color camera
                    - listitem [ref=f4e371]: Built-in 3.5 mm audio jack, microphone, speaker, and FM radio
                    - listitem [ref=f4e372]: "Ring tone formats: AAC, AAC+, eAAC+, AMR-NB, AMR-WB, QCP, MP3, WMA, WAV"
                    - listitem [ref=f4e373]: 40 polyphonic and standard MIDI format 0 and 1 (SMF)/SP MIDI
                    - listitem [ref=f4e374]: Rechargeable Lithium-ion or Lithium-ion polymer 1350 mAh battery
                    - listitem [ref=f4e375]: "Expansion Slot: microSD™ memory card (SD 2.0 compatible)"
                    - listitem [ref=f4e376]: "AC Adapter Voltage range/frequency: 100 ~ 240V AC, 50/60 Hz DC output: 5V and 1A"
                    - listitem [ref=f4e377]: "Special Features: FM Radio, G-Sensor"
                  - link " Read more" [ref=f4e379] [cursor=pointer]:
                    - /url: "#"
                    - generic [ref=f4e380]: 
                    - text: Read more
            - generic [ref=f4e381]:
              - heading "HTC Touch HD" [level=1] [ref=f4e383]
              - list [ref=f4e387]:
                - listitem [ref=f4e388]: "Product Code: Product 1"
              - separator [ref=f4e390]
              - list [ref=f4e394]:
                - listitem [ref=f4e395]:
                  - text: "Brand:"
                  - link "HTC" [ref=f4e396] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=5
                - listitem [ref=f4e397]: "Viewed: 143672"
                - listitem [ref=f4e398]: "Reward Points: 400"
                - listitem [ref=f4e399]:
                  - text: "Availability:"
                  - generic [ref=f4e400]: In Stock
              - separator [ref=f4e402]
              - generic [ref=f4e407]:
                - heading "$146.00" [level=3] [ref=f4e408]
                - generic [ref=f4e409] [cursor=pointer]: 
              - generic [ref=f4e412]:
                - generic [ref=f4e414]:
                  - generic [ref=f4e416] [cursor=pointer]:
                    - button "Decrease quantity" [ref=f4e418]:
                      - generic [ref=f4e419]: 
                    - spinbutton "Qty" [ref=f4e420]: "1"
                    - button "Increase quantity" [ref=f4e422]:
                      - generic [ref=f4e423]: 
                  - button "Add to Cart" [active] [ref=f4e425] [cursor=pointer]
                  - button "Buy now" [ref=f4e427] [cursor=pointer]
                - button " Compare this Product" [ref=f4e429] [cursor=pointer]:
                  - generic [ref=f4e430]:
                    - generic [ref=f4e431]: 
                    - text: 
                  - text: Compare this Product
              - generic [ref=f4e433]:
                - button "Size chart" [ref=f4e435] [cursor=pointer]:
                  - generic [ref=f4e436]: 
                  - text: Size chart
                - button "Popup" [ref=f4e438] [cursor=pointer]:
                  - generic [ref=f4e439]: 
                  - text: Popup
                - button "Ask Question" [ref=f4e441] [cursor=pointer]:
                  - generic [ref=f4e442]: 
                  - text: Ask Question
              - separator [ref=f4e444]
              - generic [ref=f4e446]:
                - heading "Online payment" [level=5] [ref=f4e456]
                - heading "Easy Return" [level=5] [ref=f4e465]
                - heading "24x7 Service" [level=5] [ref=f4e476]
              - generic [ref=f4e478]:
                - generic [ref=f4e479]:
                  - generic [ref=f4e480]: 0/50 reviews
                  - generic [ref=f4e481]:
                    - generic [ref=f4e482] [cursor=pointer]: ★ 5
                    - generic [ref=f4e483] [cursor=pointer]: ★ 4
                    - generic [ref=f4e484] [cursor=pointer]: ★ 3
                    - generic [ref=f4e485] [cursor=pointer]: ★ 2
                    - generic [ref=f4e486] [cursor=pointer]: ★ 1
                    - generic [ref=f4e487] [cursor=pointer]: ★ 0
                - heading "Write a review" [level=5] [ref=f4e488]
                - textbox "Your Name" [ref=f4e490]: Kavya Sri
                - textbox "Your Review" [ref=f4e492]
                - button "Write Review" [ref=f4e495] [cursor=pointer]
        - generic [ref=f4e498]:
          - heading "FAQ (Frequently Asked Questions)" [level=3] [ref=f4e499]
          - generic [ref=f4e500]:
            - heading "How can I change my shipping address? " [level=5] [ref=f4e503] [cursor=pointer]:
              - generic [ref=f4e504]: How can I change my shipping address?
              - generic [ref=f4e505]: 
            - heading "How can I change my shipping address? " [level=5] [ref=f4e508] [cursor=pointer]:
              - generic [ref=f4e509]: How can I change my shipping address?
              - generic [ref=f4e510]: 
            - heading "How do I activate my account? " [level=5] [ref=f4e513] [cursor=pointer]:
              - generic [ref=f4e514]: How do I activate my account?
              - generic [ref=f4e515]: 
            - heading "What do you mean by points? How do I earn it? " [level=5] [ref=f4e518] [cursor=pointer]:
              - generic [ref=f4e519]: What do you mean by points? How do I earn it?
              - generic [ref=f4e520]: 
            - heading "Why is there a checkout limit? / What are all the checkout limits? " [level=5] [ref=f4e523] [cursor=pointer]:
              - generic [ref=f4e524]: Why is there a checkout limit? / What are all the checkout limits?
              - generic [ref=f4e525]: 
            - heading "Why must I make payment immediately at checkout? " [level=5] [ref=f4e528] [cursor=pointer]:
              - generic [ref=f4e529]: Why must I make payment immediately at checkout?
              - generic [ref=f4e530]: 
      - contentinfo [ref=f4e531]:
        - paragraph [ref=f4e537]: © LambdaTest - Powered by OpenCart
  - alert [ref=f4e540]:
    - generic [ref=f4e541]:
      - generic [ref=f4e542]:
        - generic [ref=f4e543]: 
        - text: 1 item(s) - $146.00
      - button "Close" [ref=f4e544] [cursor=pointer]: ×
    - generic [ref=f4e545]:
      - paragraph [ref=f4e548]:
        - text: "Success: You have added"
        - link "HTC Touch HD" [ref=f4e549] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
        - text: to your
        - link "shopping cart" [ref=f4e550] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart
        - text: "!"
      - generic [ref=f4e551]:
        - link "View Cart " [ref=f4e553] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart
          - text: View Cart
          - generic [ref=f4e554]: 
        - link "Checkout " [ref=f4e556] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout
          - text: Checkout
          - generic [ref=f4e557]: 
  - text:  
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import LoginPage from '../pages/loginPage';
  3   | import RegisterPage from '../pages/registerPage';
  4   | import HomePage from '../pages/homePage';
  5   | import SpecialHotPage from '../pages/specialHotPage';
  6   | 
  7   | const email = "ks01@gmail.com";
  8   | const password = "Kavya123";
  9   | 
  10  | test('Login_Test_01', async ({ page, baseURL }, testInfo) => {
  11  |     const login = new LoginPage(page);
  12  |     await page.goto(`${baseURL}route=account/login`);
  13  |     await login.enterEmailAddress(email);
  14  |     await login.enterPassword(password);
  15  |     await login.clickLogin();
  16  |     expect(await page.title()).toBe("My Account")
  17  |     testInfo.annotations.push({
  18  |         type: 'Test Case Name',
  19  |         description: 'User Login Module'
  20  |     });
  21  | });
  22  | 
  23  | 
  24  | test('Login_Error_Test_02', async ({ page, baseURL }, testInfo) => {
  25  |     const email_e = "c.m@gmail.com";
  26  |     const password_e = "12345";
  27  |     const login = new LoginPage(page);
  28  |     await page.goto(`${baseURL}route=account/login`);
  29  |     await login.enterEmailAddress(email_e);
  30  |     await login.enterPassword(password_e);
  31  |     await login.clickLogin();
  32  |    
  33  |     if (await login.errorMsg()) {
  34  |         console.log(await login.errorMsg())
  35  |     }
  36  |     testInfo.annotations.push({
  37  |         type: 'Test Case Name',
  38  |         description: 'Incorrect Username and Password and message is :  ' + await login.errorMsg()
  39  |     });
  40  | });
  41  | 
  42  | 
  43  | test('Register_Error_Test_03', async ({ page, baseURL }) => {
  44  | 
  45  |     const register = new RegisterPage(page);
  46  |     const login=new LoginPage(page)
  47  |     await page.goto(`${baseURL}route=account/register`);
  48  |     page.waitForTimeout(1000);
  49  |     await register.clickContinue();
  50  |     expect(login.errorMsg()).toContain("Warning: You must agree to the Privacy Policy!");
  51  | 
  52  | });
  53  | 
  54  | test('Register_Test_04', async ({ page, baseURL }, testInfo) => {
  55  | 
  56  |     const register = new RegisterPage(page);
  57  |     const login=new LoginPage(page)
  58  |     await page.goto(`${baseURL}route=account/register`);
  59  |     await register.enterFirstName("k");
  60  |     await register.enterLastName("s");
  61  |     await register.enteremail("k.1@gmail.com");
  62  |     await register.enterTelephone("1234567890");
  63  |     await register.enterPassword("123test");
  64  |     await register.enterConfirmPassword("123test");
  65  |     expect(register.isSubscribeChecked()).toBeChecked();
  66  |     await register.clickTermandCondition();
  67  |     await register.clickContinue();
  68  |     if(await login.errorMsg()){
  69  |     const tes = login.errorMsg();
  70  |     testInfo.annotations.push({ type: 'Register Test Case', description: ': '+tes });
  71  |     test.fail();
  72  |    
  73  |     }
  74  | 
  75  | });
  76  | 
  77  | test.only("Add to cart_05", async ({ page, baseURL }) => {
  78  |     const login = new LoginPage(page);
  79  |     const homepage = new HomePage(page)
  80  |     const special = new SpecialHotPage(page)
  81  |     await page.goto(`${baseURL}route=account/login`)
  82  |     await login.login(email, password);
  83  |     await homepage.clickOnMenu();
  84  |     const test_e = await page.locator("//div[contains(@class,'content-products')]").textContent();
  85  |     console.log(test_e);
  86  |     if (test_e?.includes("There are no special offer products to list.")) {
  87  |         console.log("Alert is  visible");
  88  |         await page.waitForSelector("//span[contains(@class,'title') and contains(text(),'Mega Menu')]");
  89  |         page.locator("//span[contains(@class,'title') and contains(text(),'Mega Menu')]").hover();
  90  |         await page.getByRole('link', { name: 'Headphones'}).click();
  91  |         await page.getByRole('heading',{  level: 4,name: 'HTC Touch HD'}).click();
  92  |          await page.getByRole('button', { name: 'Add to Cart'}).click();
> 93  |          await page.locator('a[href="#cart-total-drawer"]').click();
      |                                                             ^ Error: locator.click: Error: strict mode violation: locator('a[href="#cart-total-drawer"]') resolved to 3 elements:
  94  |           await page.getByRole('button', { name: 'Checkout'}).click();
  95  | 
  96  |     } else {
  97  |         console.log("Alert is not visible");
  98  |     }
  99  |    
  100 |     //await page.locator("").locator("")
  101 |         //await special.addFIrstProductToTheCart();
  102 |     //const isCartVisible=await special.isToastVisible();
  103 |     //expect(isCartVisible).toBeVisible();
  104 | })
  105 | 
  106 | 
  107 | 
```