const initialStates = {
    products: [],
    product: [],
    cart: [],
    productsQty: 0,
    totalPriceProducts: 0,
    isLogin: false,
    isLoading: false,
    emailExists: false,
    passwordWeak: false,
    loginError: false
}

const reducers = (state = initialStates, {type, payload}) => {
    switch (type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: payload
            }
        case "SET_PRODUCT_DETAIL":
            return {
                ...state,
                product: payload
            }
        case "ADD_PRODUCT_TO_CART":
            const addProductExistsInCart = state.cart.find(product => product.id === parseInt(payload.id) ? true : false)
            return {
                ...state,
                cart: addProductExistsInCart ? state.cart.map(product =>
                    product.id === parseInt(payload.id) ? {...product, qty: product.qty + 1, totalPrice: product.price * (product.qty + 1)} : product
                )
                : [...state.cart, {...payload, qty: 1, totalPrice: payload.price}]
            }
        case "REMOVE_PRODUCT_FROM_CART":
            const removeProductExistsInCart = state.cart.find(product => product.id === parseInt(payload.id) ? true : false)
            return {
                ...state,
                cart: removeProductExistsInCart ? state.cart.map(product =>
                    product.id === parseInt(payload.id) ? {...product, qty: product.qty - 1, totalPrice: product.price * (product.qty - 1)} : product
                )
                : [...state.cart]
            }
        case "SET_COUNT_CART":
            const sumAllQtyProducts = (accumulator, currentValue) => accumulator + currentValue
            let arrayQty = state.cart.map(product => product.qty)
            return {
                ...state,
                productsQty: arrayQty.reduce(sumAllQtyProducts)
            }
        case "SET_CART_TOTAL_PRICE":
            const sumAllPriceProducts = (accumulator, currentValue) => accumulator + currentValue
            let arrayPrice = state.cart.map(product => product.totalPrice)
            return {
                ...state,
                totalPriceProducts: arrayPrice.reduce(sumAllPriceProducts)
            }
        case "CHANGE_ISLOGIN":
            return {
                ...state,
                isLogin: payload
            }
        case "CHANGE_ISLOADING":
            return {
                ...state,
                isLoading: payload
            }
        case "CHANGE_EMAIL_EXISTS":
            return {
                ...state,
                emailExists: payload
            }
        case "CHANGE_PASSWORD_WEAK":
            return {
                ...state,
                passwordWeak: payload
            }
        case "CHANGE_LOGIN_ERROR":
            return {
                ...state,
                loginError: payload
            }
        default:
            return state
    }
}

export default reducers