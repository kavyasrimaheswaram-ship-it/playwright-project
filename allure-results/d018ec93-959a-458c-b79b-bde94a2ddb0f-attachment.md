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
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'agree' })
    - locator resolved to <input value="1" name="agree" type="checkbox" id="input-agree" class="custom-control-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

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
                  - text: "Model: Product 1 Reward Points: 800"
                - cell "x2" [ref=f5e186]
                - cell "$292.00" [ref=f5e187]
          - table [ref=f5e188]:
            - rowgroup [ref=f5e189]:
              - row [ref=f5e190]:
                - cell "Sub-Total:" [ref=f5e191]
                - cell [ref=f5e192]:
                  - strong [ref=f5e193]: $240.00
              - row [ref=f5e194]:
                - cell "Flat Shipping Rate:" [ref=f5e195]
                - cell [ref=f5e196]:
                  - strong [ref=f5e197]: $5.00
              - row [ref=f5e198]:
                - cell "Eco Tax (-2.00):" [ref=f5e199]
                - cell [ref=f5e200]:
                  - strong [ref=f5e201]: $6.00
              - row [ref=f5e202]:
                - cell "VAT (20%):" [ref=f5e203]
                - cell [ref=f5e204]:
                  - strong [ref=f5e205]: $49.00
              - row [ref=f5e206]:
                - cell "Total:" [ref=f5e207]
                - cell [ref=f5e208]:
                  - strong [ref=f5e209]: $300.00
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
            - button "2" [ref=f5e252] [cursor=pointer]
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
              - generic [ref=f5e324]:
                - radio "I want to use an existing address" [ref=f5e325]
                - generic [ref=f5e326]: I want to use an existing address
              - generic [ref=f5e328]:
                - radio "I want to use a new address" [checked] [ref=f5e329]
                - generic [ref=f5e330]: I want to use a new address
              - generic [ref=f5e331]:
                - generic [ref=f5e332]:
                  - generic [ref=f5e333]: First Name*
                  - textbox "First Name*" [ref=f5e335]:
                    - /placeholder: First Name
                    - text: addd
                - generic [ref=f5e336]:
                  - generic [ref=f5e337]: Last Name*
                  - textbox "Last Name*" [ref=f5e339]:
                    - /placeholder: Last Name
                    - text: addd
                - generic [ref=f5e340]:
                  - generic [ref=f5e341]: Company
                  - textbox "Company" [ref=f5e343]
                - generic [ref=f5e344]:
                  - generic [ref=f5e345]: Address 1*
                  - textbox "Address 1*" [ref=f5e347]:
                    - /placeholder: Address 1
                    - text: addd
                - generic [ref=f5e348]:
                  - generic [ref=f5e349]: Address 2
                  - textbox "Address 2" [ref=f5e351]
                - generic [ref=f5e352]:
                  - generic [ref=f5e353]: City*
                  - textbox "City*" [ref=f5e355]:
                    - /placeholder: City
                    - text: addd
                - generic [ref=f5e356]:
                  - generic [ref=f5e357]: Post Code*
                  - textbox "Post Code*" [active] [ref=f5e359]:
                    - /placeholder: Post Code
                    - text: addd
                - generic [ref=f5e360]:
                  - generic [ref=f5e361]: Country*
                  - combobox "Country*" [disabled] [ref=f5e363]:
                    - option "--- Please Select ---"
                    - option "Aaland Islands"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Ascension Island (British)"
                    - option "Australia"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Bonaire, Sint Eustatius and Saba"
                    - option "Bosnia and Herzegovina"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "British Indian Ocean Territory"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Canada"
                    - option "Canary Islands"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Central African Republic"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Cocos (Keeling) Islands"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D'Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Curacao"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Democratic Republic of Congo"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "East Timor"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Falkland Islands (Malvinas)"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France, Metropolitan"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "French Southern Territories"
                    - option "FYROM"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guernsey"
                    - option "Guinea"
                    - option "Guinea-Bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Heard and Mc Donald Islands"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India" [selected]
                    - option "Indonesia"
                    - option "Iran (Islamic Republic of)"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Isle of Man"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jersey"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Kosovo, Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Lao People's Democratic Republic"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Libyan Arab Jamahiriya"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Micronesia, Federated States of"
                    - option "Moldova, Republic of"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montenegro"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "North Korea"
                    - option "Northern Mariana Islands"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Palestinian Territory, Occupied"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico"
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russian Federation"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Saint Vincent and the Grenadines"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Serbia"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovak Republic"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "South Georgia & South Sandwich Islands"
                    - option "South Korea"
                    - option "South Sudan"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Barthelemy"
                    - option "St. Helena"
                    - option "St. Martin (French part)"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Svalbard and Jan Mayen Islands"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Tanzania, United Republic of"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tristan da Cunha"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "United States"
                    - option "United States Minor Outlying Islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Vatican City State (Holy See)"
                    - option "Venezuela"
                    - option "Viet Nam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Zambia"
                    - option "Zimbabwe"
                - generic [ref=f5e364]:
                  - generic [ref=f5e365]: Region / State*
                  - combobox "Region / State*" [ref=f5e367]:
                    - option "--- Please Select ---"
                    - option "Aberdeen"
                    - option "Aberdeenshire"
                    - option "Anglesey"
                    - option "Angus"
                    - option "Argyll and Bute"
                    - option "Bedfordshire"
                    - option "Berkshire"
                    - option "Blaenau Gwent"
                    - option "Bridgend"
                    - option "Bristol"
                    - option "Buckinghamshire"
                    - option "Caerphilly"
                    - option "Cambridgeshire"
                    - option "Cardiff"
                    - option "Carmarthenshire"
                    - option "Ceredigion"
                    - option "Cheshire"
                    - option "Clackmannanshire"
                    - option "Conwy"
                    - option "Cornwall"
                    - option "County Antrim"
                    - option "County Armagh"
                    - option "County Down"
                    - option "County Fermanagh"
                    - option "County Londonderry"
                    - option "County Tyrone"
                    - option "Cumbria"
                    - option "Denbighshire"
                    - option "Derbyshire"
                    - option "Devon"
                    - option "Dorset"
                    - option "Dumfries and Galloway"
                    - option "Dundee"
                    - option "Durham"
                    - option "East Ayrshire"
                    - option "East Dunbartonshire"
                    - option "East Lothian"
                    - option "East Renfrewshire"
                    - option "East Riding of Yorkshire"
                    - option "East Sussex"
                    - option "Edinburgh"
                    - option "Essex"
                    - option "Falkirk"
                    - option "Fife"
                    - option "Flintshire"
                    - option "Glasgow"
                    - option "Gloucestershire"
                    - option "Greater London"
                    - option "Greater Manchester"
                    - option "Gwynedd"
                    - option "Hampshire"
                    - option "Herefordshire"
                    - option "Hertfordshire"
                    - option "Highlands"
                    - option "Inverclyde"
                    - option "Isle of Wight"
                    - option "Kent"
                    - option "Lancashire" [selected]
                    - option "Leicestershire"
                    - option "Lincolnshire"
                    - option "Merseyside"
                    - option "Merthyr Tydfil"
                    - option "Midlothian"
                    - option "Monmouthshire"
                    - option "Moray"
                    - option "Neath Port Talbot"
                    - option "Newport"
                    - option "Norfolk"
                    - option "North Ayrshire"
                    - option "North Lanarkshire"
                    - option "North Yorkshire"
                    - option "Northamptonshire"
                    - option "Northumberland"
                    - option "Nottinghamshire"
                    - option "Orkney Islands"
                    - option "Oxfordshire"
                    - option "Pembrokeshire"
                    - option "Perth and Kinross"
                    - option "Powys"
                    - option "Renfrewshire"
                    - option "Rhondda Cynon Taff"
                    - option "Rutland"
                    - option "Scottish Borders"
                    - option "Shetland Islands"
                    - option "Shropshire"
                    - option "Somerset"
                    - option "South Ayrshire"
                    - option "South Lanarkshire"
                    - option "South Yorkshire"
                    - option "Staffordshire"
                    - option "Stirling"
                    - option "Suffolk"
                    - option "Surrey"
                    - option "Swansea"
                    - option "Torfaen"
                    - option "Tyne and Wear"
                    - option "Vale of Glamorgan"
                    - option "Warwickshire"
                    - option "West Dunbartonshire"
                    - option "West Lothian"
                    - option "West Midlands"
                    - option "West Sussex"
                    - option "West Yorkshire"
                    - option "Western Isles"
                    - option "Wiltshire"
                    - option "Worcestershire"
                    - option "Wrexham"
              - generic [ref=f5e368]:
                - checkbox "My delivery and billing addresses are the same." [checked] [ref=f5e369]
                - generic [ref=f5e370]: My delivery and billing addresses are the same.
            - text: "* * * * * * *"
            - generic [ref=f5e371]:
              - heading "Please select the preferred payment method to use on this order." [level=4] [ref=f5e372]
              - generic [ref=f5e373]:
                - radio "Cash On Delivery" [checked] [ref=f5e374]
                - generic [ref=f5e375]: Cash On Delivery
            - generic [ref=f5e376]:
              - heading "Please select the preferred shipping method to use on this order." [level=4] [ref=f5e377]
              - paragraph [ref=f5e378]:
                - strong [ref=f5e379]: Flat Rate
              - generic [ref=f5e380]:
                - radio "Flat Shipping Rate - $8.00" [checked] [ref=f5e381]
                - generic [ref=f5e382]: Flat Shipping Rate - $8.00
          - generic [ref=f5e384]:
            - generic [ref=f5e385]:
              - table [ref=f5e387]:
                - rowgroup [ref=f5e388]:
                  - row [ref=f5e389]:
                    - columnheader "Image" [ref=f5e390]
                    - columnheader "Product Name" [ref=f5e391]
                    - columnheader "Quantity" [ref=f5e392]
                    - columnheader "Unit Price" [ref=f5e393]
                    - columnheader "Total" [ref=f5e394]
                - rowgroup [ref=f5e395]:
                  - row [ref=f5e396]:
                    - cell [ref=f5e397]:
                      - link [ref=f5e398] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                        - img "HTC Touch HD" [ref=f5e399]
                    - cell [ref=f5e400]:
                      - link "HTC Touch HD" [ref=f5e401] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=28
                      - text: "Model: Product 1 Reward Points: 400"
                    - cell [ref=f5e402]:
                      - generic [ref=f5e403]:
                        - spinbutton [ref=f5e404]: "1"
                        - generic [ref=f5e405]:
                          - button "" [ref=f5e406] [cursor=pointer]
                          - button "" [ref=f5e408] [cursor=pointer]
                    - cell "$146.00" [ref=f5e410]
                    - cell "$146.00" [ref=f5e411]
              - table [ref=f5e412]:
                - rowgroup [ref=f5e413]:
                  - row [ref=f5e414]:
                    - cell "Sub-Total:" [ref=f5e415]
                    - cell [ref=f5e416]:
                      - strong [ref=f5e417]: $120.00
                  - row [ref=f5e418]:
                    - cell "Flat Shipping Rate:" [ref=f5e419]
                    - cell [ref=f5e420]:
                      - strong [ref=f5e421]: $5.00
                  - row [ref=f5e422]:
                    - cell "Eco Tax (-2.00):" [ref=f5e423]
                    - cell [ref=f5e424]:
                      - strong [ref=f5e425]: $4.00
                  - row [ref=f5e426]:
                    - cell "VAT (20%):" [ref=f5e427]
                    - cell [ref=f5e428]:
                      - strong [ref=f5e429]: $25.00
                  - row [ref=f5e430]:
                    - cell "Total:" [ref=f5e431]
                    - cell [ref=f5e432]:
                      - strong [ref=f5e433]: $154.00
              - generic [ref=f5e434]:
                - generic [ref=f5e435]:
                  - heading "Use Coupon Code " [level=5] [ref=f5e436] [cursor=pointer]:
                    - text: Use Coupon Code
                    - generic [ref=f5e437]: 
                  - generic [ref=f5e440]:
                    - textbox "Enter your coupon here" [ref=f5e441]
                    - button "Apply Coupon" [ref=f5e443] [cursor=pointer]
                - heading "Use Gift Certificate " [level=5] [ref=f5e445] [cursor=pointer]:
                  - text: Use Gift Certificate
                  - generic [ref=f5e446]: 
            - generic [ref=f5e447]:
              - generic [ref=f5e448]: Add Comments About Your Order
              - textbox "Add Comments About Your Order" [ref=f5e449]
            - generic [ref=f5e450]:
              - checkbox "I have read and agree to the Terms & Conditions" [ref=f5e451]
              - generic [ref=f5e452]:
                - text: I have read and agree to the
                - link "Terms & Conditions" [ref=f5e453] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/information/agree&information_id=5
            - paragraph [ref=f5e455]: "* - Fields are required"
            - button "Continue " [ref=f5e456] [cursor=pointer]:
              - text: Continue
              - generic [ref=f5e457]: 
      - contentinfo [ref=f5e458]:
        - paragraph [ref=f5e464]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
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
  143 | 
> 144 |         await page.getByRole('checkbox', { name: 'agree' }).check();
      |                                                             ^ Error: locator.check: Test timeout of 30000ms exceeded.
  145 |         await page.getByRole('button', { name: 'Continue' }).click();
  146 |         await page.getByRole('button', { name: 'Confirm Order' }).click();
  147 | 
  148 |     } else {
  149 |         console.log("Alert is not visible");
  150 |     }
  151 | 
  152 |     //await page.locator("").locator("")
  153 |     //await special.addFIrstProductToTheCart();
  154 |     //const isCartVisible=await special.isToastVisible();
  155 |     //expect(isCartVisible).toBeVisible();
  156 | })
  157 | 
  158 | 
  159 | 
```