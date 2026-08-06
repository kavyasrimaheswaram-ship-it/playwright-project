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
    7 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=f5e1]:
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
                  - text: "Model: Product 1 Reward Points: 1200"
                - cell "x3" [ref=f5e186]
                - cell "$438.00" [ref=f5e187]
          - table [ref=f5e188]:
            - rowgroup [ref=f5e189]:
              - row [ref=f5e190]:
                - cell "Sub-Total:" [ref=f5e191]
                - cell [ref=f5e192]:
                  - strong [ref=f5e193]: $360.00
              - row [ref=f5e194]:
                - cell "Eco Tax (-2.00):" [ref=f5e195]
                - cell [ref=f5e196]:
                  - strong [ref=f5e197]: $6.00
              - row [ref=f5e198]:
                - cell "VAT (20%):" [ref=f5e199]
                - cell [ref=f5e200]:
                  - strong [ref=f5e201]: $72.00
              - row [ref=f5e202]:
                - cell "Total:" [ref=f5e203]
                - cell [ref=f5e204]:
                  - strong [ref=f5e205]: $438.00
        - generic [ref=f5e207]:
          - button " Edit cart" [ref=f5e209] [cursor=pointer]:
            - generic [ref=f5e210]: 
            - text: Edit cart
          - button " Checkout" [ref=f5e212] [cursor=pointer]:
            - generic [ref=f5e213]: 
            - text: Checkout
    - generic [ref=f5e214]:
      - banner [ref=f5e215]:
        - button "" [ref=f5e217] [cursor=pointer]
        - generic [ref=f5e219]:
          - generic [ref=f5e220]:
            - figure [ref=f5e222]:
              - link [ref=f5e223] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f5e224]
            - generic [ref=f5e228]:
              - generic [ref=f5e230]:
                - button "All Categories" [ref=f5e232] [cursor=pointer]
                - textbox "Search For Products" [ref=f5e234]
              - button "Search" [ref=f5e236] [cursor=pointer]
            - link "Compare" [ref=f5e238] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f5e243] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "3" [ref=f5e248] [cursor=pointer]
          - text: 
        - generic [ref=f5e254]:
          - generic [ref=f5e256] [cursor=pointer]:
            - button "Shop by Category" [ref=f5e258]
            - navigation [ref=f5e263]:
              - list [ref=f5e265]:
                - listitem [ref=f5e266]:
                  - link "Home" [ref=f5e267]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f5e270]:
                  - link "Special Hot" [ref=f5e271]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f5e272]: Special
                    - generic [ref=f5e274]: Hot
                - listitem [ref=f5e275]:
                  - link "Blog" [ref=f5e276]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f5e279]:
                  - button "Mega Menu" [ref=f5e280]
                - listitem [ref=f5e283]:
                  - button "AddOns Featured" [ref=f5e284]:
                    - generic [ref=f5e285]: AddOns
                    - generic [ref=f5e287]: Featured
                - listitem [ref=f5e288]:
                  - button " My account" [ref=f5e289]:
                    - generic [ref=f5e290]: 
                    - generic [ref=f5e291]: My account
          - text:  
          - paragraph [ref=f5e295]:
            - strong [ref=f5e296]: This is a dummy website for Web Automation Testing
      - generic [ref=f5e297]:
        - generic [ref=f5e300]:
          - list [ref=f5e301]:
            - listitem [ref=f5e302] [cursor=pointer]
            - listitem [ref=f5e303] [cursor=pointer]
            - listitem [ref=f5e304] [cursor=pointer]
          - link [ref=f5e307] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40
            - img "Iphone 11 pro max" [ref=f5e308]
        - generic [ref=f5e311]:
          - generic [ref=f5e314]:
            - generic [ref=f5e316]:
              - heading "Upto 50% Off on Fully Automatic Top Load Washing Machine" [level=4] [ref=f5e317]
              - paragraph [ref=f5e318]: Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
            - link "SHOP NOW" [ref=f5e319] [cursor=pointer]:
              - /url: "#"
          - generic [ref=f5e320]:
            - link [ref=f5e322] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
              - img "Lumix S Series From Panasonic" [ref=f5e324]
            - link [ref=f5e326] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=30
              - img "MPOW H12 RC Headphone" [ref=f5e328]
        - generic [ref=f5e330]:
          - heading "Top Trending Categories" [level=3] [ref=f5e332]
          - generic [ref=f5e334]:
            - generic [ref=f5e335]:
              - group "1 / 8" [ref=f5e336]:
                - link [ref=f5e337] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20
                  - figure [ref=f5e338]:
                    - img "Desktops" [ref=f5e340]
                    - heading "Desktops" [level=4] [ref=f5e342]: Desktops 
              - group "2 / 8" [ref=f5e343]:
                - link [ref=f5e344] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
                  - figure [ref=f5e345]:
                    - img "Laptops" [ref=f5e347]
                    - heading "Laptops" [level=4] [ref=f5e349]: Laptops 
              - group "3 / 8" [ref=f5e350]:
                - link [ref=f5e351] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
                  - figure [ref=f5e352]:
                    - img "Components" [ref=f5e354]
                    - heading "Components" [level=4] [ref=f5e356]: Components 
              - group "4 / 8" [ref=f5e357]:
                - link [ref=f5e358] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
                  - figure [ref=f5e359]:
                    - img "Tablets" [ref=f5e361]
                    - heading "Tablets" [level=4] [ref=f5e363]: Tablets 
              - group "5 / 8" [ref=f5e364]:
                - link [ref=f5e365] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
                  - figure [ref=f5e366]:
                    - img "Software" [ref=f5e368]
                    - heading "Software" [level=4] [ref=f5e370]: Software 
              - group "6 / 8" [ref=f5e371]:
                - link [ref=f5e372] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=24
                  - figure [ref=f5e373]:
                    - img "Phones & PDAs" [ref=f5e375]
                    - heading "Phones & PDAs" [level=4] [ref=f5e377]: Phones & PDAs 
              - group "7 / 8" [ref=f5e378]:
                - link [ref=f5e379] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
                  - figure [ref=f5e380]:
                    - img "Cameras" [ref=f5e382]
                    - heading "Cameras" [level=4] [ref=f5e384]: Cameras 
              - group "8 / 8" [ref=f5e385]:
                - link [ref=f5e386] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
                  - figure [ref=f5e387]:
                    - img "MP3 Players" [ref=f5e389]
                    - heading "MP3 Players" [level=4] [ref=f5e391]: MP3 Players 
            - generic:
              - button "Previous slide" [disabled]
              - button "Next slide" [ref=f5e392] [cursor=pointer]
        - link [ref=f5e403] [cursor=pointer]:
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=47
          - img "HP25 headphone" [ref=f5e405]
        - generic [ref=f5e407]:
          - heading "Top Products" [level=3] [ref=f5e409]
          - generic [ref=f5e416]:
            - group "1 / 10" [ref=f5e417]:
              - generic [ref=f5e418]:
                - generic [ref=f5e419]:
                  - link [ref=f5e421] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=107
                    - img "iMac" [ref=f5e424]
                    - list [ref=f5e425]:
                      - listitem [ref=f5e426]:
                        - img "iMac" [ref=f5e427]
                      - listitem [ref=f5e428]:
                        - img "iMac" [ref=f5e429]
                      - listitem [ref=f5e430]:
                        - img "iMac" [ref=f5e431]
                  - generic [ref=f5e432]:
                    - button "" [ref=f5e433] [cursor=pointer]
                    - button "" [ref=f5e435] [cursor=pointer]
                    - button "" [ref=f5e437] [cursor=pointer]
                    - button "" [ref=f5e439] [cursor=pointer]
                - generic [ref=f5e441]:
                  - heading [level=4] [ref=f5e442]:
                    - link "iMac" [ref=f5e443] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=107
                  - generic [ref=f5e444]: $170.00
            - group "2 / 10" [ref=f5e445]:
              - generic [ref=f5e446]:
                - generic [ref=f5e447]:
                  - link [ref=f5e449] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=106
                    - img "iMac" [ref=f5e452]
                    - list [ref=f5e453]:
                      - listitem [ref=f5e454]:
                        - img "iMac" [ref=f5e455]
                      - listitem [ref=f5e456]:
                        - img "iMac" [ref=f5e457]
                      - listitem [ref=f5e458]:
                        - img "iMac" [ref=f5e459]
                  - generic [ref=f5e460]:
                    - button "" [ref=f5e461] [cursor=pointer]
                    - button "" [ref=f5e463] [cursor=pointer]
                    - button "" [ref=f5e465] [cursor=pointer]
                    - button "" [ref=f5e467] [cursor=pointer]
                - generic [ref=f5e469]:
                  - heading [level=4] [ref=f5e470]:
                    - link "iMac" [ref=f5e471] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=106
                  - generic [ref=f5e472]: $170.00
            - group "3 / 10" [ref=f5e473]:
              - generic [ref=f5e474]:
                - generic [ref=f5e475]:
                  - link [ref=f5e477] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=105
                    - img "iMac" [ref=f5e480]
                    - list [ref=f5e481]:
                      - listitem [ref=f5e482]:
                        - img "iMac" [ref=f5e483]
                      - listitem [ref=f5e484]:
                        - img "iMac" [ref=f5e485]
                      - listitem [ref=f5e486]:
                        - img "iMac" [ref=f5e487]
                  - generic [ref=f5e488]:
                    - button "" [ref=f5e489] [cursor=pointer]
                    - button "" [ref=f5e491] [cursor=pointer]
                    - button "" [ref=f5e493] [cursor=pointer]
                    - button "" [ref=f5e495] [cursor=pointer]
                - generic [ref=f5e497]:
                  - heading [level=4] [ref=f5e498]:
                    - link "iMac" [ref=f5e499] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=105
                  - generic [ref=f5e500]: $170.00
            - group "4 / 10" [ref=f5e501]:
              - generic [ref=f5e502]:
                - generic [ref=f5e503]:
                  - link [ref=f5e505] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=104
                    - img "iMac" [ref=f5e508]
                    - list [ref=f5e509]:
                      - listitem [ref=f5e510]:
                        - img "iMac" [ref=f5e511]
                      - listitem [ref=f5e512]:
                        - img "iMac" [ref=f5e513]
                      - listitem [ref=f5e514]:
                        - img "iMac" [ref=f5e515]
                  - generic [ref=f5e516]:
                    - button "" [ref=f5e517] [cursor=pointer]
                    - button "" [ref=f5e519] [cursor=pointer]
                    - button "" [ref=f5e521] [cursor=pointer]
                    - button "" [ref=f5e523] [cursor=pointer]
                - generic [ref=f5e525]:
                  - heading [level=4] [ref=f5e526]:
                    - link "iMac" [ref=f5e527] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=104
                  - generic [ref=f5e528]: $170.00
            - group "5 / 10" [ref=f5e529]:
              - generic [ref=f5e530]:
                - generic [ref=f5e531]:
                  - link [ref=f5e533] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=103
                    - img "HTC Touch HD" [ref=f5e536]
                    - list [ref=f5e537]:
                      - listitem [ref=f5e538]:
                        - img "HTC Touch HD" [ref=f5e539]
                      - listitem [ref=f5e540]:
                        - img "HTC Touch HD" [ref=f5e541]
                      - listitem [ref=f5e542]:
                        - img "HTC Touch HD" [ref=f5e543]
                  - generic [ref=f5e544]:
                    - button "" [ref=f5e545] [cursor=pointer]
                    - button "" [ref=f5e547] [cursor=pointer]
                    - button "" [ref=f5e549] [cursor=pointer]
                    - button "" [ref=f5e551] [cursor=pointer]
                - generic [ref=f5e553]:
                  - heading [level=4] [ref=f5e554]:
                    - link "HTC Touch HD" [ref=f5e555] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=103
                  - generic [ref=f5e556]: $146.00
            - group "6 / 10" [ref=f5e557]:
              - generic [ref=f5e558]:
                - generic [ref=f5e559]:
                  - link [ref=f5e561] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=102
                    - img "HTC Touch HD" [ref=f5e564]
                    - list [ref=f5e565]:
                      - listitem [ref=f5e566]:
                        - img "HTC Touch HD" [ref=f5e567]
                      - listitem [ref=f5e568]:
                        - img "HTC Touch HD" [ref=f5e569]
                      - listitem [ref=f5e570]:
                        - img "HTC Touch HD" [ref=f5e571]
                  - generic [ref=f5e572]:
                    - button "" [ref=f5e573] [cursor=pointer]
                    - button "" [ref=f5e575] [cursor=pointer]
                    - button "" [ref=f5e577] [cursor=pointer]
                    - button "" [ref=f5e579] [cursor=pointer]
                - generic [ref=f5e581]:
                  - heading [level=4] [ref=f5e582]:
                    - link "HTC Touch HD" [ref=f5e583] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=102
                  - generic [ref=f5e584]: $146.00
            - group "7 / 10" [ref=f5e585]:
              - generic [ref=f5e586]:
                - generic [ref=f5e587]:
                  - link [ref=f5e589] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=101
                    - img "HTC Touch HD" [ref=f5e592]
                    - list [ref=f5e593]:
                      - listitem [ref=f5e594]:
                        - img "HTC Touch HD" [ref=f5e595]
                      - listitem [ref=f5e596]:
                        - img "HTC Touch HD" [ref=f5e597]
                      - listitem [ref=f5e598]:
                        - img "HTC Touch HD" [ref=f5e599]
                  - generic [ref=f5e600]:
                    - button "" [ref=f5e601] [cursor=pointer]
                    - button "" [ref=f5e603] [cursor=pointer]
                    - button "" [ref=f5e605] [cursor=pointer]
                    - button "" [ref=f5e607] [cursor=pointer]
                - generic [ref=f5e609]:
                  - heading [level=4] [ref=f5e610]:
                    - link "HTC Touch HD" [ref=f5e611] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=101
                  - generic [ref=f5e612]: $146.00
            - group "8 / 10" [ref=f5e613]:
              - generic [ref=f5e614]:
                - generic [ref=f5e615]:
                  - link [ref=f5e617] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=100
                    - img "HTC Touch HD" [ref=f5e620]
                    - list [ref=f5e621]:
                      - listitem [ref=f5e622]:
                        - img "HTC Touch HD" [ref=f5e623]
                      - listitem [ref=f5e624]:
                        - img "HTC Touch HD" [ref=f5e625]
                      - listitem [ref=f5e626]:
                        - img "HTC Touch HD" [ref=f5e627]
                  - generic [ref=f5e628]:
                    - button "" [ref=f5e629] [cursor=pointer]
                    - button "" [ref=f5e631] [cursor=pointer]
                    - button "" [ref=f5e633] [cursor=pointer]
                    - button "" [ref=f5e635] [cursor=pointer]
                - generic [ref=f5e637]:
                  - heading [level=4] [ref=f5e638]:
                    - link "HTC Touch HD" [ref=f5e639] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=100
                  - generic [ref=f5e640]: $146.00
            - group "9 / 10" [ref=f5e641]:
              - generic [ref=f5e642]:
                - generic [ref=f5e643]:
                  - link [ref=f5e645] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=99
                    - img "HP LP3065" [ref=f5e648]
                    - list [ref=f5e649]:
                      - listitem [ref=f5e650]:
                        - img "HP LP3065" [ref=f5e651]
                      - listitem [ref=f5e652]:
                        - img "HP LP3065" [ref=f5e653]
                      - listitem [ref=f5e654]:
                        - img "HP LP3065" [ref=f5e655]
                  - generic [ref=f5e656]:
                    - button "" [ref=f5e657] [cursor=pointer]
                    - button "" [ref=f5e659] [cursor=pointer]
                    - button "" [ref=f5e661] [cursor=pointer]
                    - button "" [ref=f5e663] [cursor=pointer]
                - generic [ref=f5e665]:
                  - heading [level=4] [ref=f5e666]:
                    - link "HP LP3065" [ref=f5e667] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=99
                  - generic [ref=f5e668]: $122.00
            - group "10 / 10" [ref=f5e669]:
              - generic [ref=f5e670]:
                - generic [ref=f5e671]:
                  - link [ref=f5e673] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=98
                    - img "HP LP3065" [ref=f5e676]
                    - list [ref=f5e677]:
                      - listitem [ref=f5e678]:
                        - img "HP LP3065" [ref=f5e679]
                      - listitem [ref=f5e680]:
                        - img "HP LP3065" [ref=f5e681]
                      - listitem [ref=f5e682]:
                        - img "HP LP3065" [ref=f5e683]
                  - generic [ref=f5e684]:
                    - button "" [ref=f5e685] [cursor=pointer]
                    - button "" [ref=f5e687] [cursor=pointer]
                    - button "" [ref=f5e689] [cursor=pointer]
                    - button "" [ref=f5e691] [cursor=pointer]
                - generic [ref=f5e693]:
                  - heading [level=4] [ref=f5e694]:
                    - link "HP LP3065" [ref=f5e695] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=98
                  - generic [ref=f5e696]: $122.00
        - generic [ref=f5e703]:
          - heading "Latest Range of Earphones" [level=2] [ref=f5e704]
          - generic [ref=f5e705]: Save 10% Off
          - link "Shop Now" [ref=f5e706] [cursor=pointer]:
            - /url: "#"
        - generic [ref=f5e708]:
          - generic [ref=f5e710]:
            - heading "Upto 30% Off on Popular Smartphones + Exchange Offers" [level=4] [ref=f5e711]
            - link "SHOP NOW" [ref=f5e729] [cursor=pointer]:
              - /url: "#"
          - generic [ref=f5e731]:
            - generic [ref=f5e732]:
              - heading "Top Collection" [level=3] [ref=f5e733]
              - list [ref=f5e735]:
                - listitem [ref=f5e736]:
                  - link "Popular" [ref=f5e737] [cursor=pointer]:
                    - /url: "#mz-product-tab-39218404-0"
                - listitem [ref=f5e738]:
                  - link "Latest" [ref=f5e739] [cursor=pointer]:
                    - /url: "#mz-product-tab-39218404-1"
                - listitem [ref=f5e740]:
                  - link "Best seller" [ref=f5e741] [cursor=pointer]:
                    - /url: "#mz-product-tab-39218404-2"
            - generic [ref=f5e750]:
              - generic [ref=f5e753]:
                - group "1 / 24" [ref=f5e754]:
                  - generic [ref=f5e755]:
                    - generic [ref=f5e756]:
                      - link [ref=f5e758] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=30
                        - img "Canon EOS 5D" [ref=f5e761]
                        - list [ref=f5e762]:
                          - listitem [ref=f5e763]:
                            - img "Canon EOS 5D" [ref=f5e764]
                          - listitem [ref=f5e765]:
                            - img "Canon EOS 5D" [ref=f5e766]
                          - listitem [ref=f5e767]:
                            - img "Canon EOS 5D" [ref=f5e768]
                      - generic [ref=f5e769]:
                        - button "" [ref=f5e770] [cursor=pointer]
                        - button "" [ref=f5e772] [cursor=pointer]
                        - button "" [ref=f5e774] [cursor=pointer]
                        - button "" [ref=f5e776] [cursor=pointer]
                    - generic [ref=f5e778]:
                      - heading [level=4] [ref=f5e779]:
                        - link "Canon EOS 5D" [ref=f5e780] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=30
                      - generic [ref=f5e781]: $134.00
                - group "2 / 24" [ref=f5e782]:
                  - generic [ref=f5e783]:
                    - generic [ref=f5e784]:
                      - link [ref=f5e786] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                        - img "HTC Touch HD" [ref=f5e789]
                        - list [ref=f5e790]:
                          - listitem [ref=f5e791]:
                            - img "HTC Touch HD" [ref=f5e792]
                          - listitem [ref=f5e793]:
                            - img "HTC Touch HD" [ref=f5e794]
                          - listitem [ref=f5e795]:
                            - img "HTC Touch HD" [ref=f5e796]
                      - generic [ref=f5e797]:
                        - button "" [ref=f5e798] [cursor=pointer]
                        - button "" [ref=f5e800] [cursor=pointer]
                        - button "" [ref=f5e802] [cursor=pointer]
                        - button "" [ref=f5e804] [cursor=pointer]
                    - generic [ref=f5e806]:
                      - heading [level=4] [ref=f5e807]:
                        - link "HTC Touch HD" [ref=f5e808] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                      - generic [ref=f5e809]: $146.00
                - group "3 / 24" [ref=f5e810]:
                  - generic [ref=f5e811]:
                    - generic [ref=f5e812]:
                      - link [ref=f5e814] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
                        - img "Apple Cinema 30\"" [ref=f5e817]
                        - list [ref=f5e818]:
                          - listitem [ref=f5e819]:
                            - img "Apple Cinema 30\"" [ref=f5e820]
                          - listitem [ref=f5e821]:
                            - img "Apple Cinema 30\"" [ref=f5e822]
                      - generic [ref=f5e823]:
                        - button "" [ref=f5e824] [cursor=pointer]
                        - button "" [ref=f5e826] [cursor=pointer]
                        - button "" [ref=f5e828] [cursor=pointer]
                        - button "" [ref=f5e830] [cursor=pointer]
                    - generic [ref=f5e832]:
                      - heading [level=4] [ref=f5e833]:
                        - link "Apple Cinema 30\"" [ref=f5e834] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
                      - generic [ref=f5e835]: $122.00
                - group "4 / 24" [ref=f5e836]:
                  - generic [ref=f5e837]:
                    - generic [ref=f5e838]:
                      - link [ref=f5e840] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=47
                        - img "HP LP3065" [ref=f5e843]
                        - list [ref=f5e844]:
                          - listitem [ref=f5e845]:
                            - img "HP LP3065" [ref=f5e846]
                          - listitem [ref=f5e847]:
                            - img "HP LP3065" [ref=f5e848]
                          - listitem [ref=f5e849]:
                            - img "HP LP3065" [ref=f5e850]
                      - generic [ref=f5e851]:
                        - button "" [ref=f5e852] [cursor=pointer]
                        - button "" [ref=f5e854] [cursor=pointer]
                        - button "" [ref=f5e856] [cursor=pointer]
                        - button "" [ref=f5e858] [cursor=pointer]
                    - generic [ref=f5e860]:
                      - heading [level=4] [ref=f5e861]:
                        - link "HP LP3065" [ref=f5e862] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=47
                      - generic [ref=f5e863]: $122.00
                - group "5 / 24" [ref=f5e864]:
                  - generic [ref=f5e865]:
                    - generic [ref=f5e866]:
                      - link [ref=f5e868] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=36
                        - img "iPod Nano" [ref=f5e871]
                        - list [ref=f5e872]:
                          - listitem [ref=f5e873]:
                            - img "iPod Nano" [ref=f5e874]
                          - listitem [ref=f5e875]:
                            - img "iPod Nano" [ref=f5e876]
                          - listitem [ref=f5e877]:
                            - img "iPod Nano" [ref=f5e878]
                      - generic [ref=f5e879]:
                        - button "" [ref=f5e880] [cursor=pointer]
                        - button "" [ref=f5e882] [cursor=pointer]
                        - button "" [ref=f5e884] [cursor=pointer]
                        - button "" [ref=f5e886] [cursor=pointer]
                    - generic [ref=f5e888]:
                      - heading [level=4] [ref=f5e889]:
                        - link "iPod Nano" [ref=f5e890] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=36
                      - generic [ref=f5e891]: $122.00
                - group "6 / 24" [ref=f5e892]:
                  - generic [ref=f5e893]:
                    - generic [ref=f5e894]:
                      - link [ref=f5e896] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40
                        - img "iPhone" [ref=f5e899]
                        - list [ref=f5e900]:
                          - listitem [ref=f5e901]:
                            - img "iPhone" [ref=f5e902]
                          - listitem [ref=f5e903]:
                            - img "iPhone" [ref=f5e904]
                          - listitem [ref=f5e905]:
                            - img "iPhone" [ref=f5e906]
                      - generic [ref=f5e907]:
                        - button "" [ref=f5e908] [cursor=pointer]
                        - button "" [ref=f5e910] [cursor=pointer]
                        - button "" [ref=f5e912] [cursor=pointer]
                        - button "" [ref=f5e914] [cursor=pointer]
                    - generic [ref=f5e916]:
                      - heading [level=4] [ref=f5e917]:
                        - link "iPhone" [ref=f5e918] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40
                      - generic [ref=f5e919]: $123.20
                - group "7 / 24" [ref=f5e920]:
                  - generic [ref=f5e921]:
                    - generic [ref=f5e922]:
                      - link [ref=f5e924] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=29
                        - img "Palm Treo Pro" [ref=f5e927]
                        - list [ref=f5e928]:
                          - listitem [ref=f5e929]:
                            - img "Palm Treo Pro" [ref=f5e930]
                          - listitem [ref=f5e931]:
                            - img "Palm Treo Pro" [ref=f5e932]
                          - listitem [ref=f5e933]:
                            - img "Palm Treo Pro" [ref=f5e934]
                      - generic [ref=f5e935]:
                        - button "" [ref=f5e936] [cursor=pointer]
                        - button "" [ref=f5e938] [cursor=pointer]
                        - button "" [ref=f5e940] [cursor=pointer]
                        - button "" [ref=f5e942] [cursor=pointer]
                    - generic [ref=f5e944]:
                      - heading [level=4] [ref=f5e945]:
                        - link "Palm Treo Pro" [ref=f5e946] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=29
                      - generic [ref=f5e947]: $337.99
                - group "8 / 24" [ref=f5e948]:
                  - generic [ref=f5e949]:
                    - generic [ref=f5e950]:
                      - link [ref=f5e952] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=32
                        - img "iPod Touch" [ref=f5e955]
                        - list [ref=f5e956]:
                          - listitem [ref=f5e957]:
                            - img "iPod Touch" [ref=f5e958]
                          - listitem [ref=f5e959]:
                            - img "iPod Touch" [ref=f5e960]
                          - listitem [ref=f5e961]:
                            - img "iPod Touch" [ref=f5e962]
                      - generic [ref=f5e963]:
                        - button "" [ref=f5e964] [cursor=pointer]
                        - button "" [ref=f5e966] [cursor=pointer]
                        - button "" [ref=f5e968] [cursor=pointer]
                        - button "" [ref=f5e970] [cursor=pointer]
                    - generic [ref=f5e972]:
                      - heading [level=4] [ref=f5e973]:
                        - link "iPod Touch" [ref=f5e974] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=32
                      - generic [ref=f5e975]: $194.00
                - group "9 / 24" [ref=f5e976]:
                  - generic [ref=f5e977]:
                    - generic [ref=f5e978]:
                      - link [ref=f5e980] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=34
                        - img "iPod Shuffle" [ref=f5e983]
                        - list [ref=f5e984]:
                          - listitem [ref=f5e985]:
                            - img "iPod Shuffle" [ref=f5e986]
                          - listitem [ref=f5e987]:
                            - img "iPod Shuffle" [ref=f5e988]
                          - listitem [ref=f5e989]:
                            - img "iPod Shuffle" [ref=f5e990]
                      - generic [ref=f5e991]:
                        - button "" [ref=f5e992] [cursor=pointer]
                        - button "" [ref=f5e994] [cursor=pointer]
                        - button "" [ref=f5e996] [cursor=pointer]
                        - button "" [ref=f5e998] [cursor=pointer]
                    - generic [ref=f5e1000]:
                      - heading [level=4] [ref=f5e1001]:
                        - link "iPod Shuffle" [ref=f5e1002] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=34
                      - generic [ref=f5e1003]: $182.00
                - group "10 / 24" [ref=f5e1004]:
                  - generic [ref=f5e1005]:
                    - generic [ref=f5e1006]:
                      - link [ref=f5e1008] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=31
                        - img "Nikon D300" [ref=f5e1011]
                        - list [ref=f5e1012]:
                          - listitem [ref=f5e1013]:
                            - img "Nikon D300" [ref=f5e1014]
                          - listitem [ref=f5e1015]:
                            - img "Nikon D300" [ref=f5e1016]
                          - listitem [ref=f5e1017]:
                            - img "Nikon D300" [ref=f5e1018]
                      - generic [ref=f5e1019]:
                        - button "" [ref=f5e1020] [cursor=pointer]
                        - button "" [ref=f5e1022] [cursor=pointer]
                        - button "" [ref=f5e1024] [cursor=pointer]
                        - button "" [ref=f5e1026] [cursor=pointer]
                    - generic [ref=f5e1028]:
                      - heading [level=4] [ref=f5e1029]:
                        - link "Nikon D300" [ref=f5e1030] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=31
                      - generic [ref=f5e1031]: $98.00
                - group "11 / 24" [ref=f5e1032]:
                  - generic [ref=f5e1033]:
                    - generic [ref=f5e1034]:
                      - link [ref=f5e1036] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=45
                        - img "MacBook Pro" [ref=f5e1039]
                        - list [ref=f5e1040]:
                          - listitem [ref=f5e1041]:
                            - img "MacBook Pro" [ref=f5e1042]
                          - listitem [ref=f5e1043]:
                            - img "MacBook Pro" [ref=f5e1044]
                          - listitem [ref=f5e1045]:
                            - img "MacBook Pro" [ref=f5e1046]
                      - generic [ref=f5e1047]:
                        - button "" [ref=f5e1048] [cursor=pointer]
                        - button "" [ref=f5e1050] [cursor=pointer]
                        - button "" [ref=f5e1052] [cursor=pointer]
                        - button "" [ref=f5e1054] [cursor=pointer]
                    - generic [ref=f5e1056]:
                      - heading [level=4] [ref=f5e1057]:
                        - link "MacBook Pro" [ref=f5e1058] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=45
                      - generic [ref=f5e1059]: $2,000.00
                - group "12 / 24" [ref=f5e1060]:
                  - generic [ref=f5e1061]:
                    - generic [ref=f5e1062]:
                      - link [ref=f5e1064] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=41
                        - img "iMac" [ref=f5e1067]
                        - list [ref=f5e1068]:
                          - listitem [ref=f5e1069]:
                            - img "iMac" [ref=f5e1070]
                          - listitem [ref=f5e1071]:
                            - img "iMac" [ref=f5e1072]
                          - listitem [ref=f5e1073]:
                            - img "iMac" [ref=f5e1074]
                      - generic [ref=f5e1075]:
                        - button "" [ref=f5e1076] [cursor=pointer]
                        - button "" [ref=f5e1078] [cursor=pointer]
                        - button "" [ref=f5e1080] [cursor=pointer]
                        - button "" [ref=f5e1082] [cursor=pointer]
                    - generic [ref=f5e1084]:
                      - heading [level=4] [ref=f5e1085]:
                        - link "iMac" [ref=f5e1086] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=41
                      - generic [ref=f5e1087]: $170.00
                - group "13 / 24" [ref=f5e1088]:
                  - generic [ref=f5e1089]:
                    - generic [ref=f5e1090]:
                      - link [ref=f5e1092] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33
                        - img "Samsung SyncMaster 941BW" [ref=f5e1095]
                        - list [ref=f5e1096]:
                          - listitem [ref=f5e1097]:
                            - img "Samsung SyncMaster 941BW" [ref=f5e1098]
                          - listitem [ref=f5e1099]:
                            - img "Samsung SyncMaster 941BW" [ref=f5e1100]
                          - listitem [ref=f5e1101]:
                            - img "Samsung SyncMaster 941BW" [ref=f5e1102]
                      - generic [ref=f5e1103]:
                        - button "" [ref=f5e1104] [cursor=pointer]
                        - button "" [ref=f5e1106] [cursor=pointer]
                        - button "" [ref=f5e1108] [cursor=pointer]
                        - button "" [ref=f5e1110] [cursor=pointer]
                    - generic [ref=f5e1112]:
                      - heading [level=4] [ref=f5e1113]:
                        - link "Samsung SyncMaster 941BW" [ref=f5e1114] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=33
                      - generic [ref=f5e1115]: $242.00
                - group "14 / 24" [ref=f5e1116]:
                  - generic [ref=f5e1117]:
                    - generic [ref=f5e1118]:
                      - link [ref=f5e1120] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=43
                        - img "MacBook" [ref=f5e1123]
                        - list [ref=f5e1124]:
                          - listitem [ref=f5e1125]:
                            - img "MacBook" [ref=f5e1126]
                          - listitem [ref=f5e1127]:
                            - img "MacBook" [ref=f5e1128]
                          - listitem [ref=f5e1129]:
                            - img "MacBook" [ref=f5e1130]
                      - generic [ref=f5e1131]:
                        - button "" [ref=f5e1132] [cursor=pointer]
                        - button "" [ref=f5e1134] [cursor=pointer]
                        - button "" [ref=f5e1136] [cursor=pointer]
                        - button "" [ref=f5e1138] [cursor=pointer]
                    - generic [ref=f5e1140]:
                      - heading [level=4] [ref=f5e1141]:
                        - link "MacBook" [ref=f5e1142] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=43
                      - generic [ref=f5e1143]: $602.00
                - group "15 / 24" [ref=f5e1144]:
                  - generic [ref=f5e1145]:
                    - generic [ref=f5e1146]:
                      - link [ref=f5e1148] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=100
                        - img "HTC Touch HD" [ref=f5e1151]
                        - list [ref=f5e1152]:
                          - listitem [ref=f5e1153]:
                            - img "HTC Touch HD" [ref=f5e1154]
                          - listitem [ref=f5e1155]:
                            - img "HTC Touch HD" [ref=f5e1156]
                          - listitem [ref=f5e1157]:
                            - img "HTC Touch HD" [ref=f5e1158]
                      - generic [ref=f5e1159]:
                        - button "" [ref=f5e1160] [cursor=pointer]
                        - button "" [ref=f5e1162] [cursor=pointer]
                        - button "" [ref=f5e1164] [cursor=pointer]
                        - button "" [ref=f5e1166] [cursor=pointer]
                    - generic [ref=f5e1168]:
                      - heading [level=4] [ref=f5e1169]:
                        - link "HTC Touch HD" [ref=f5e1170] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=100
                      - generic [ref=f5e1171]: $146.00
                - group "16 / 24" [ref=f5e1172]:
                  - generic [ref=f5e1173]:
                    - generic [ref=f5e1174]:
                      - link [ref=f5e1176] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=44
                        - img "MacBook Air" [ref=f5e1179]
                        - list [ref=f5e1180]:
                          - listitem [ref=f5e1181]:
                            - img "MacBook Air" [ref=f5e1182]
                          - listitem [ref=f5e1183]:
                            - img "MacBook Air" [ref=f5e1184]
                          - listitem [ref=f5e1185]:
                            - img "MacBook Air" [ref=f5e1186]
                      - generic [ref=f5e1187]:
                        - button "" [ref=f5e1188] [cursor=pointer]
                        - button "" [ref=f5e1190] [cursor=pointer]
                        - button "" [ref=f5e1192] [cursor=pointer]
                        - button "" [ref=f5e1194] [cursor=pointer]
                    - generic [ref=f5e1196]:
                      - heading [level=4] [ref=f5e1197]:
                        - link "MacBook Air" [ref=f5e1198] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=44
                      - generic [ref=f5e1199]: $1,202.00
                - group "17 / 24" [ref=f5e1200]:
                  - generic [ref=f5e1201]:
                    - generic [ref=f5e1202]:
                      - link [ref=f5e1204] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=46
                        - img "Sony VAIO" [ref=f5e1207]
                        - list [ref=f5e1208]:
                          - listitem [ref=f5e1209]:
                            - img "Sony VAIO" [ref=f5e1210]
                          - listitem [ref=f5e1211]:
                            - img "Sony VAIO" [ref=f5e1212]
                          - listitem [ref=f5e1213]:
                            - img "Sony VAIO" [ref=f5e1214]
                      - generic [ref=f5e1215]:
                        - button "" [ref=f5e1216] [cursor=pointer]
                        - button "" [ref=f5e1218] [cursor=pointer]
                        - button "" [ref=f5e1220] [cursor=pointer]
                        - button "" [ref=f5e1222] [cursor=pointer]
                    - generic [ref=f5e1224]:
                      - heading [level=4] [ref=f5e1225]:
                        - link "Sony VAIO" [ref=f5e1226] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=46
                      - generic [ref=f5e1227]: $1,202.00
                - group "18 / 24" [ref=f5e1228]:
                  - generic [ref=f5e1229]:
                    - generic [ref=f5e1230]:
                      - link [ref=f5e1232] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=49
                        - img "Samsung Galaxy Tab 10.1" [ref=f5e1235]
                        - list [ref=f5e1236]:
                          - listitem [ref=f5e1237]:
                            - img "Samsung Galaxy Tab 10.1" [ref=f5e1238]
                          - listitem [ref=f5e1239]:
                            - img "Samsung Galaxy Tab 10.1" [ref=f5e1240]
                          - listitem [ref=f5e1241]:
                            - img "Samsung Galaxy Tab 10.1" [ref=f5e1242]
                      - generic [ref=f5e1243]:
                        - button "" [ref=f5e1244] [cursor=pointer]
                        - button "" [ref=f5e1246] [cursor=pointer]
                        - button "" [ref=f5e1248] [cursor=pointer]
                        - button "" [ref=f5e1250] [cursor=pointer]
                    - generic [ref=f5e1252]:
                      - heading [level=4] [ref=f5e1253]:
                        - link "Samsung Galaxy Tab 10.1" [ref=f5e1254] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=49
                      - generic [ref=f5e1255]: $241.99
                - group "19 / 24" [ref=f5e1256]:
                  - generic [ref=f5e1257]:
                    - generic [ref=f5e1258]:
                      - link [ref=f5e1260] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=48
                        - img "iPod Classic" [ref=f5e1263]
                        - list [ref=f5e1264]:
                          - listitem [ref=f5e1265]:
                            - img "iPod Classic" [ref=f5e1266]
                          - listitem [ref=f5e1267]:
                            - img "iPod Classic" [ref=f5e1268]
                          - listitem [ref=f5e1269]:
                            - img "iPod Classic" [ref=f5e1270]
                      - generic [ref=f5e1271]:
                        - button "" [ref=f5e1272] [cursor=pointer]
                        - button "" [ref=f5e1274] [cursor=pointer]
                        - button "" [ref=f5e1276] [cursor=pointer]
                        - button "" [ref=f5e1278] [cursor=pointer]
                    - generic [ref=f5e1280]:
                      - heading [level=4] [ref=f5e1281]:
                        - link "iPod Classic" [ref=f5e1282] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=48
                      - generic [ref=f5e1283]: $122.00
                - group "20 / 24" [ref=f5e1284]:
                  - generic [ref=f5e1285]:
                    - generic [ref=f5e1286]:
                      - link [ref=f5e1288] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=107
                        - img "iMac" [ref=f5e1291]
                        - list [ref=f5e1292]:
                          - listitem [ref=f5e1293]:
                            - img "iMac" [ref=f5e1294]
                          - listitem [ref=f5e1295]:
                            - img "iMac" [ref=f5e1296]
                          - listitem [ref=f5e1297]:
                            - img "iMac" [ref=f5e1298]
                      - generic [ref=f5e1299]:
                        - button "" [ref=f5e1300] [cursor=pointer]
                        - button "" [ref=f5e1302] [cursor=pointer]
                        - button "" [ref=f5e1304] [cursor=pointer]
                        - button "" [ref=f5e1306] [cursor=pointer]
                    - generic [ref=f5e1308]:
                      - heading [level=4] [ref=f5e1309]:
                        - link "iMac" [ref=f5e1310] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=107
                      - generic [ref=f5e1311]: $170.00
                - group "21 / 24" [ref=f5e1312]:
                  - generic [ref=f5e1313]:
                    - generic [ref=f5e1314]:
                      - link [ref=f5e1316] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=50
                        - img "Apple Cinema 30\"" [ref=f5e1319]
                        - list [ref=f5e1320]:
                          - listitem [ref=f5e1321]:
                            - img "Apple Cinema 30\"" [ref=f5e1322]
                          - listitem [ref=f5e1323]:
                            - img "Apple Cinema 30\"" [ref=f5e1324]
                          - listitem [ref=f5e1325]:
                            - img "Apple Cinema 30\"" [ref=f5e1326]
                      - generic [ref=f5e1327]:
                        - button "" [ref=f5e1328] [cursor=pointer]
                        - button "" [ref=f5e1330] [cursor=pointer]
                        - button "" [ref=f5e1332] [cursor=pointer]
                        - button "" [ref=f5e1334] [cursor=pointer]
                    - generic [ref=f5e1336]:
                      - heading [level=4] [ref=f5e1337]:
                        - link "Apple Cinema 30\"" [ref=f5e1338] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=50
                      - generic [ref=f5e1339]: $122.00
                - group "22 / 24" [ref=f5e1340]:
                  - generic [ref=f5e1341]:
                    - generic [ref=f5e1342]:
                      - link [ref=f5e1344] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=90
                        - img "Apple Cinema 30\"" [ref=f5e1347]
                        - list [ref=f5e1348]:
                          - listitem [ref=f5e1349]:
                            - img "Apple Cinema 30\"" [ref=f5e1350]
                          - listitem [ref=f5e1351]:
                            - img "Apple Cinema 30\"" [ref=f5e1352]
                          - listitem [ref=f5e1353]:
                            - img "Apple Cinema 30\"" [ref=f5e1354]
                      - generic [ref=f5e1355]:
                        - button "" [ref=f5e1356] [cursor=pointer]
                        - button "" [ref=f5e1358] [cursor=pointer]
                        - button "" [ref=f5e1360] [cursor=pointer]
                        - button "" [ref=f5e1362] [cursor=pointer]
                    - generic [ref=f5e1364]:
                      - heading [level=4] [ref=f5e1365]:
                        - link "Apple Cinema 30\"" [ref=f5e1366] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=90
                      - generic [ref=f5e1367]: $122.00
                - group "23 / 24" [ref=f5e1368]:
                  - generic [ref=f5e1369]:
                    - generic [ref=f5e1370]:
                      - link [ref=f5e1372] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=88
                        - img "Apple Cinema 30\"" [ref=f5e1375]
                        - list [ref=f5e1376]:
                          - listitem [ref=f5e1377]:
                            - img "Apple Cinema 30\"" [ref=f5e1378]
                          - listitem [ref=f5e1379]:
                            - img "Apple Cinema 30\"" [ref=f5e1380]
                          - listitem [ref=f5e1381]:
                            - img "Apple Cinema 30\"" [ref=f5e1382]
                      - generic [ref=f5e1383]:
                        - button "" [ref=f5e1384] [cursor=pointer]
                        - button "" [ref=f5e1386] [cursor=pointer]
                        - button "" [ref=f5e1388] [cursor=pointer]
                        - button "" [ref=f5e1390] [cursor=pointer]
                    - generic [ref=f5e1392]:
                      - heading [level=4] [ref=f5e1393]:
                        - link "Apple Cinema 30\"" [ref=f5e1394] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=88
                      - generic [ref=f5e1395]: $122.00
                - group "24 / 24" [ref=f5e1396]:
                  - generic [ref=f5e1397]:
                    - generic [ref=f5e1398]:
                      - link [ref=f5e1400] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=89
                        - img "Apple Cinema 30\"" [ref=f5e1403]
                        - list [ref=f5e1404]:
                          - listitem [ref=f5e1405]:
                            - img "Apple Cinema 30\"" [ref=f5e1406]
                          - listitem [ref=f5e1407]:
                            - img "Apple Cinema 30\"" [ref=f5e1408]
                          - listitem [ref=f5e1409]:
                            - img "Apple Cinema 30\"" [ref=f5e1410]
                      - generic [ref=f5e1411]:
                        - button "" [ref=f5e1412] [cursor=pointer]
                        - button "" [ref=f5e1414] [cursor=pointer]
                        - button "" [ref=f5e1416] [cursor=pointer]
                        - button "" [ref=f5e1418] [cursor=pointer]
                    - generic [ref=f5e1420]:
                      - heading [level=4] [ref=f5e1421]:
                        - link "Apple Cinema 30\"" [ref=f5e1422] [cursor=pointer]:
                          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=89
                      - generic [ref=f5e1423]: $122.00
              - text:                                                                                                                                                                                                
          - link [ref=f5e1425] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=32
            - img "Apple Ipad Pro" [ref=f5e1427]
          - generic [ref=f5e1433]:
            - heading "Under @99" [level=3] [ref=f5e1435]
            - generic [ref=f5e1440]:
              - group "1 / 2" [ref=f5e1441]:
                - generic [ref=f5e1442]:
                  - generic [ref=f5e1443]:
                    - link [ref=f5e1445] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=63
                      - img "Nikon D300" [ref=f5e1448]
                      - list [ref=f5e1449]:
                        - listitem [ref=f5e1450]:
                          - img "Nikon D300" [ref=f5e1451]
                        - listitem [ref=f5e1452]:
                          - img "Nikon D300" [ref=f5e1453]
                        - listitem [ref=f5e1454]:
                          - img "Nikon D300" [ref=f5e1455]
                    - generic [ref=f5e1456]:
                      - button "" [ref=f5e1457] [cursor=pointer]
                      - button "" [ref=f5e1459] [cursor=pointer]
                      - button "" [ref=f5e1461] [cursor=pointer]
                      - button "" [ref=f5e1463] [cursor=pointer]
                  - generic [ref=f5e1465]:
                    - heading [level=4] [ref=f5e1466]:
                      - link "Nikon D300" [ref=f5e1467] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=63
                    - generic [ref=f5e1468]: $98.00
              - group "2 / 2" [ref=f5e1469]:
                - generic [ref=f5e1470]:
                  - generic [ref=f5e1471]:
                    - link [ref=f5e1473] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=31
                      - img "Nikon D300" [ref=f5e1476]
                      - list [ref=f5e1477]:
                        - listitem [ref=f5e1478]:
                          - img "Nikon D300" [ref=f5e1479]
                        - listitem [ref=f5e1480]:
                          - img "Nikon D300" [ref=f5e1481]
                        - listitem [ref=f5e1482]:
                          - img "Nikon D300" [ref=f5e1483]
                    - generic [ref=f5e1484]:
                      - button "" [ref=f5e1485] [cursor=pointer]
                      - button "" [ref=f5e1487] [cursor=pointer]
                      - button "" [ref=f5e1489] [cursor=pointer]
                      - button "" [ref=f5e1491] [cursor=pointer]
                  - generic [ref=f5e1493]:
                    - heading [level=4] [ref=f5e1494]:
                      - link "Nikon D300" [ref=f5e1495] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=31
                    - generic [ref=f5e1496]: $98.00
          - heading "From The Blog" [level=3] [ref=f5e1498]
          - generic [ref=f5e1505]:
            - group "1 / 10" [ref=f5e1506]:
              - generic [ref=f5e1507]:
                - link [ref=f5e1509] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=37
                  - img "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1510]
                - generic [ref=f5e1511]:
                  - generic [ref=f5e1512]:
                    - generic [ref=f5e1513]:
                      - generic [ref=f5e1514]: 
                      - link "Mark Jecno" [ref=f5e1515] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3
                    - generic [ref=f5e1516]:
                      - text: "|"
                      - generic [ref=f5e1517]: 
                      - text: 1402 comments
                    - generic [ref=f5e1518]:
                      - text: "|"
                      - generic [ref=f5e1519]: 
                      - text: "38417"
                    - generic [ref=f5e1520]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1521]:
                    - link "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1522] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=37
            - group "2 / 10" [ref=f5e1523]:
              - generic [ref=f5e1524]:
                - link [ref=f5e1526] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=36
                  - img "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1527]
                - generic [ref=f5e1528]:
                  - generic [ref=f5e1529]:
                    - generic [ref=f5e1530]:
                      - generic [ref=f5e1531]: 
                      - link "Jolio Balia" [ref=f5e1532] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=2
                    - generic [ref=f5e1533]:
                      - text: "|"
                      - generic [ref=f5e1534]: 
                      - text: 68 comments
                    - generic [ref=f5e1535]:
                      - text: "|"
                      - generic [ref=f5e1536]: 
                      - text: "30213"
                    - generic [ref=f5e1537]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1538]:
                    - link "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1539] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=36
            - group "3 / 10" [ref=f5e1540]:
              - generic [ref=f5e1541]:
                - link [ref=f5e1543] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=35
                  - img "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1544]
                - generic [ref=f5e1545]:
                  - generic [ref=f5e1546]:
                    - generic [ref=f5e1547]:
                      - generic [ref=f5e1548]: 
                      - link "Mark Jecno" [ref=f5e1549] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3
                    - generic [ref=f5e1550]:
                      - text: "|"
                      - generic [ref=f5e1551]: 
                      - text: 58 comments
                    - generic [ref=f5e1552]:
                      - text: "|"
                      - generic [ref=f5e1553]: 
                      - text: "10402"
                    - generic [ref=f5e1554]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1555]:
                    - link "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1556] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=35
            - group "4 / 10" [ref=f5e1557]:
              - generic [ref=f5e1558]:
                - link [ref=f5e1561] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=33
                  - img "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1563]
                - generic [ref=f5e1564]:
                  - generic [ref=f5e1565]:
                    - generic [ref=f5e1566]:
                      - generic [ref=f5e1567]: 
                      - link "Mark Jecno" [ref=f5e1568] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3
                    - generic [ref=f5e1569]:
                      - text: "|"
                      - generic [ref=f5e1570]: 
                      - text: 25 comments
                    - generic [ref=f5e1571]:
                      - text: "|"
                      - generic [ref=f5e1572]: 
                      - text: "10211"
                    - generic [ref=f5e1573]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1574]:
                    - link "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1575] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=33
            - group "5 / 10" [ref=f5e1576]:
              - generic [ref=f5e1577]:
                - link [ref=f5e1579] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=31
                  - img "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1580]
                - generic [ref=f5e1581]:
                  - generic [ref=f5e1582]:
                    - generic [ref=f5e1583]:
                      - generic [ref=f5e1584]: 
                      - link "Mark Jecno" [ref=f5e1585] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3
                    - generic [ref=f5e1586]:
                      - text: "|"
                      - generic [ref=f5e1587]: 
                      - text: 127 comments
                    - generic [ref=f5e1588]:
                      - text: "|"
                      - generic [ref=f5e1589]: 
                      - text: "10551"
                    - generic [ref=f5e1590]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1591]:
                    - link "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1592] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=31
            - group "6 / 10" [ref=f5e1593]:
              - generic [ref=f5e1594]:
                - link [ref=f5e1596] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=30
                  - img "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" [ref=f5e1597]
                - generic [ref=f5e1598]:
                  - generic [ref=f5e1599]:
                    - generic [ref=f5e1600]:
                      - generic [ref=f5e1601]: 
                      - link "Jolio Balia" [ref=f5e1602] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=2
                    - generic [ref=f5e1603]:
                      - text: "|"
                      - generic [ref=f5e1604]: 
                      - text: 80 comments
                    - generic [ref=f5e1605]:
                      - text: "|"
                      - generic [ref=f5e1606]: 
                      - text: "9868"
                    - generic [ref=f5e1607]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1608]:
                    - link "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" [ref=f5e1609] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=30
            - group "7 / 10" [ref=f5e1610]:
              - generic [ref=f5e1611]:
                - link [ref=f5e1613] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=29
                  - img "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1614]
                - generic [ref=f5e1615]:
                  - generic [ref=f5e1616]:
                    - generic [ref=f5e1617]:
                      - generic [ref=f5e1618]: 
                      - link "Mark Jecno" [ref=f5e1619] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3
                    - generic [ref=f5e1620]:
                      - text: "|"
                      - generic [ref=f5e1621]: 
                      - text: 4 comments
                    - generic [ref=f5e1622]:
                      - text: "|"
                      - generic [ref=f5e1623]: 
                      - text: "10499"
                    - generic [ref=f5e1624]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1625]:
                    - link "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus" [ref=f5e1626] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=29
            - group "8 / 10" [ref=f5e1627]:
              - generic [ref=f5e1628]:
                - link [ref=f5e1630] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=24
                  - img "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1631]
                - generic [ref=f5e1632]:
                  - generic [ref=f5e1633]:
                    - generic [ref=f5e1634]:
                      - generic [ref=f5e1635]: 
                      - link "Jolio Balia" [ref=f5e1636] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=2
                    - generic [ref=f5e1637]:
                      - text: "|"
                      - generic [ref=f5e1638]: 
                      - text: 14 comments
                    - generic [ref=f5e1639]:
                      - text: "|"
                      - generic [ref=f5e1640]: 
                      - text: "9550"
                    - generic [ref=f5e1641]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1642]:
                    - link "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1643] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=24
            - group "9 / 10" [ref=f5e1644]:
              - generic [ref=f5e1645]:
                - link [ref=f5e1647] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=22
                  - img "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" [ref=f5e1648]
                - generic [ref=f5e1649]:
                  - generic [ref=f5e1650]:
                    - generic [ref=f5e1651]:
                      - generic [ref=f5e1652]: 
                      - link "Jolio Balia" [ref=f5e1653] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=2
                    - generic [ref=f5e1654]:
                      - text: "|"
                      - generic [ref=f5e1655]: 
                      - text: 3 comments
                    - generic [ref=f5e1656]:
                      - text: "|"
                      - generic [ref=f5e1657]: 
                      - text: "9569"
                    - generic [ref=f5e1658]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1659]:
                    - link "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" [ref=f5e1660] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=22
            - group "10 / 10" [ref=f5e1661]:
              - generic [ref=f5e1662]:
                - link [ref=f5e1665] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=16
                  - img "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1667]
                - generic [ref=f5e1668]:
                  - generic [ref=f5e1669]:
                    - generic [ref=f5e1670]:
                      - generic [ref=f5e1671]: 
                      - link "Jolio Balia" [ref=f5e1672] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=2
                    - generic [ref=f5e1673]:
                      - text: "|"
                      - generic [ref=f5e1674]: 
                      - text: 0 comments
                    - generic [ref=f5e1675]:
                      - text: "|"
                      - generic [ref=f5e1676]: 
                      - text: "9977"
                    - generic [ref=f5e1677]:  25 Feb 2019
                  - heading [level=4] [ref=f5e1678]:
                    - link "eget nunc lobortis mattis aliquam faucibus purus in massa tempor" [ref=f5e1679] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=16
      - contentinfo [ref=f5e1685]:
        - paragraph [ref=f5e1691]: © LambdaTest - Powered by OpenCart
  - text:  
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