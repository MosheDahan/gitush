import { ProductList } from './comonents/ProductList/ProductList'
import { Cart } from './comonents/Cart/Cart'
import { CartSummary } from './comonents/CartSummary/CartSummary'

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-header">
        <h1>Online Shop</h1>
      </div>

      <div className="app-grid">
        <section className="panel">
          <ProductList />
        </section>

        <section className="panel">
          <Cart />
        </section>

        <section className="panel summary-panel">
          <CartSummary />
        </section>
      </div>
    </div>
  )
}