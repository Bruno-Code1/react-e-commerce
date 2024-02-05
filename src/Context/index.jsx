import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);
    
    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
     // CheckoutSideMenu . Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});
    
     // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

     // Shopping Cart - Order
     const [order, setOrder] = useState([]);

     // Get products
     const [items, setItems] = useState(null);

     // Filter Products
     const [filteredItems, setFilteredItems] = useState(null);
     
     // Get products by title
     const [searchByTitle, setSearchByTitle] = useState(null);

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

     useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, []);

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
      }

      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_CATEGORY_AND_TITLE') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }

        if (!searchType) {
          return items;
        }

      }

      useEffect(() => {
        if(searchByCategory && searchByTitle) setFilteredItems(filterBy('BY_CATEGORY_AND_TITLE', items, searchByCategory, searchByTitle))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByCategory, searchByTitle))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByCategory, searchByTitle))
      }, [items, searchByTitle, searchByCategory])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            filteredItemsByTitle,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            filteredItemsByCategory
        }}>
        {children}
        </ShoppingCartContext.Provider>
    );
}