import firebase, { database } from '../../firebase'

export const setProduct = (product) => {
    return {
        type: "SET_PRODUCTS", payload: product
    }
}

export const addProductToCart = (dispatch, productId) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: productId })
    dispatch({ type: "SET_COUNT_CART"})
    dispatch({ type: "SET_CART_TOTAL_PRICE"})
}

export const reduceProductFromCart = (dispatch, productId) => {
    dispatch({ type: "REDUCE_PRODUCT_FROM_CART", payload: productId })
    dispatch({ type: "SET_COUNT_CART"})
    dispatch({ type: "SET_CART_TOTAL_PRICE"})
}

export const removeProductFromCart = (dispatch, productId) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: productId })
    dispatch({ type: "SET_COUNT_CART"})
    dispatch({ type: "SET_CART_TOTAL_PRICE"})
}

export const registerUserFirebase = ({email, password}, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: "CHANGE_ISLOADING", payload: true})
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            dispatch({type: "CHANGE_ISLOADING", payload: false})
            resolve(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            if(errorCode === "auth/email-already-in-use") {
                dispatch({type: "CHANGE_EMAIL_EXISTS", payload: true})
            }
            if(errorCode === "auth/weak-password") {
                dispatch({type: "CHANGE_PASSWORD_WEAK", payload: true})
            }
            dispatch({type: "CHANGE_ISLOADING", payload: false})
            reject(false)
        })
    })
}

export const LoginUserFirebase = ({email, password}, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: "CHANGE_ISLOADING", payload: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in
            dispatch({type: "CHANGE_ISLOGIN", payload: true})
            const { uid, email } = res.user
            localStorage.setItem('user', JSON.stringify({ uid, email, isLogin: true }))
            dispatch({type: "CHANGE_ISLOADING", payload: false})
            resolve(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            if(errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password") {
                dispatch({type: "CHANGE_LOGIN_ERROR", payload: true})
            }
            dispatch({type: "CHANGE_ISLOADING", payload: false})
            reject(false)
        })
    })
}

export const getProductsFromFirebase = (dispatch) => {
    const urlProducts = database.ref("products")
    return new Promise((resolve, reject) => {
        urlProducts.on("value", (snapshot) => {
            const data = snapshot.val();
            dispatch({type: "SET_PRODUCTS", payload: data})
            resolve(data)
        })
    })
}

export const getSingleProductFromFirebase = async (dispatch, productId) => {
    const urlProducts = database.ref(`products/${productId}`)
    return new Promise((resolve, reject) => {
        urlProducts.on("value", (snapshot) => {
            const data = snapshot.val()
            dispatch({type: "SET_PRODUCT_DETAIL", payload: data})
            resolve(data)
        })
    })
}