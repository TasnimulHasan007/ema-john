import useCart from "../../hooks/useCart"
import useProducts from "../../hooks/useProducts"
import ReviewItem from "../ReviewItem/ReviewItem"
import Cart from "../Cart/Cart"
import { clearTheCart, removeFromDb } from "../../utilities/fakedb"
import { useHistory } from "react-router"

const OrderReview = () => {
  const [products] = useProducts() // import setProducts when needed
  const [cart, setCart] = useCart(products)
  const history = useHistory()
  // handle remove
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key)
    setCart(newCart)
    removeFromDb(key)
  }
  // handle place order
  const handlePlaceOrder = () => {
    history.push("/placeorder")
    setCart([])
    clearTheCart()
  }
  return (
    <div className="container shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  )
}

export default OrderReview
