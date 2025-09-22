// =================== SHOPIFY.JS ===================
// This file defines a function that script.js can call to initialize the Shopify Buy Button.

window.initializeShopifyBuyButton = function() {
  const shopComponentNode = document.getElementById('collection-component-1758190269461');

  // Only proceed if the shop placeholder exists AND it hasn't been initialized for this element yet.
  if (shopComponentNode && !shopComponentNode.dataset.shopifyLoaded) {
    shopComponentNode.dataset.shopifyLoaded = true; // Mark this element as loaded

    // Load Shopify script
    var script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    script.onload = function() {
      var client = ShopifyBuy.buildClient({
        domain: 'ijuc61-hr.myshopify.com',
        storefrontAccessToken: '12566d7e5f9880e9f42ae93bdd94ca29',
      });
      
      ShopifyBuy.UI.onReady(client).then(function(ui) {
        ui.createComponent('collection', {
          id: '298945052732',
          node: shopComponentNode, // Use the reference to the node
          moneyFormat: 'LE%20%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                  }
                },
                "title": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "normal",
                  "font-size": "17px",
                  "color": "#f0f0f0"
                },
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  "color": "#f0f0f0",
                  ":hover": {
                    "color": "#f0f0f0",
                    "background-color": "#4c4c4c"
                  },
                  "background-color": "#545454",
                  ":focus": {
                    "background-color": "#4c4c4c"
                  },
                  "border-radius": "9px",
                  "padding-left": "14px",
                  "padding-right": "14px"
                },
                "quantityInput": {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px"
                },
                "price": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#d8d8d8"
                },
                "compareAt": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#d8d8d8"
                },
                "unitPrice": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#d8d8d8"
                }
              },
              "buttonDestination": "modal",
              "contents": {
                "options": false
              },
              "text": {
                "button": "View product"
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  "color": "#f0f0f0",
                  ":hover": {
                    "color": "#f0f0f0",
                    "background-color": "#4c4c4c"
                  },
                  "background-color": "#545454",
                  ":focus": {
                    "background-color": "4c4c4c"
                  },
                  "border-radius": "9px",
                  "padding-left": "14px",
                  "padding-right": "14px"
                },
                "quantityInput": {
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px"
                },
                "title": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  "color": "#d4d4d4"
                },
                "price": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "normal",
                  "font-size": "16px",
                  "color": "#acacac"
                },
                "compareAt": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "normal",
                  "font-size": "13.6px",
                  "color": "#acacac"
                },
                "unitPrice": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "normal",
                  "font-size": "13.6px",
                  "color": "#acacac"
                },
                "description": {
                  "font-family": "Montserrat, sans-serif",
                  "color": "#999999"
                }
              },
              "googleFonts": [
                "Montserrat"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "modal": {
              "styles": {
                "modal": {
                  "background-color": "#121212"
                }
              }
            },
            "option": {
              "styles": {
                "label": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold"
                },
                "select": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold"
                }
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "13px",
                  "padding-top": "14.5px",
                  "padding-bottom": "14.5px",
                  "color": "#f0f0f0",
                  ":hover": {
                    "color": "#f0f0f0",
                    "background-color": "#4c4c4c"
                  },
                  "background-color": "#545454",
                  ":focus": {
                    "background-color": "#4c4c4c"
                  },
                  "border-radius": "9px"
                },
                "title": {
                  "color": "#262626"
                },
                "header": {
                  "color": "#262626"
                },
                "lineItems": {
                  "color": "#262626"
                },
                "subtotalText": {
                  "color": "#262626"
                },
                "subtotal": {
                  "color": "#262626"
                },
                "notice": {
                  "color": "#262626"
                },
                "currency": {
                  "color": "#262626"
                },
                "close": {
                  "color": "#262626",
                  ":hover": {
                    "color": "#262626"
                  }
                },
                "empty": {
                  "color": "#262626"
                },
                "noteDescription": {
                  "color": "#262626"
                },
                "discountText": {
                  "color": "#262626"
                },
                "discountIcon": {
                  "fill": "#262626"
                },
                "discountAmount": {
                  "color": "#262626"
                },
                "cart": {
                  "background-color": "#d6d6d6"
                },
                "footer": {
                  "background-color": "#d6d6d6"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Montserrat, sans-serif",
                  "background-color": "#545454",
                  ":hover": {
                    "background-color": "#4c4c4c"
                  },
                  ":focus": {
                    "background-color": "#4c4c4c"
                  }
                },
                "count": {
                  "font-size": "13px",
                  "color": "#f0f0f0",
                  ":hover": {
                    "color": "#f0f0f0"
                  }
                },
                "iconPath": {
                  "fill": "#f0f0f0"
                }
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "lineItem": {
              "styles": {
                "variantTitle": {
                  "color": "#262626"
                },
                "title": {
                  "color": "#262626"
                },
                "price": {
                  "color": "#262626"
                },
                "fullPrice": {
                  "color": "#262626"
                },
                "discount": {
                  "color": "#262626"
                },
                "discountIcon": {
                  "fill": "#262626"
                },
                "quantity": {
                  "color": "#262626"
                },
                "quantityIncrement": {
                  "color": "#262626",
                  "border-color": "#262626"
                },
                "quantityDecrement": {
                  "color": "#262626",
                  "border-color": "#262626"
                },
                "quantityInput": {
                  "color": "#262626",
                  "border-color": "#262626"
                }
              }
            }
          }
        }); // close createComponent
      }); // close then
    }; // close script.onload

    // Only append the script if it hasn't been appended before
    // (This prevents multiple <script> tags for the Buy Button SDK)
    if (!document.querySelector('script[src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"]')) {
      document.head.appendChild(script);
    } else {
        // If the script is already loaded, and we are trying to re-initialize for a new container,
        // we might need to manually trigger the onload callback if ShopifyBuy is already available.
        // This is a bit advanced; for now, relying on the client/UI being ready is usually sufficient.
    }
  }
};
