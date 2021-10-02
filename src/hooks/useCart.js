import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (products.length) {
      const localCart = getStoredCart()
      const storedCart = []
      for (const itemKey in localCart) {
        const addedProduct = products.find((product) => product.key === itemKey)
        if (addedProduct) {
          const quantity = localCart[itemKey]
          addedProduct.quantity = quantity
          storedCart.push(addedProduct)
        }
      }
      setCart(storedCart)
    }
  }, [products])
  // return
  return [cart, setCart]
}

export default useCart
