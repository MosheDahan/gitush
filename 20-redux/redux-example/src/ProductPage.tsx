import { useDispatch, useSelector } from "react-redux";
import { selectProduct, clearProduct } from "./slices/productSlice";
import type { RootState } from './store/store';

export const ProductPage = () => {
    const dispatch = useDispatch();
    const currentProduct = useSelector((state: RootState) => state.product.product);

    return (
        <div className="product-page">
            <section className="product-heading"><div><p className="eyebrow">09 / product slice</p><h1>Choose your<br /><em>next tool.</em></h1></div><div className="product-display"><span>SELECTED PRODUCT</span><strong>{currentProduct?.name || 'Nothing selected'}</strong><small>{currentProduct ? `${currentProduct.price.toLocaleString()} NIS` : 'Redux state / waiting'}</small></div></section>
            <section className="product-grid">
                <button
                    className={currentProduct?.id === 1 ? 'product-tile selected' : 'product-tile'}
                    onClick={() => dispatch(selectProduct({ id: 1, name: 'Laptop', price: 3500 }))}
                >
                    <span>01 / WORK</span><strong>Laptop</strong><small>3,500 NIS</small>
                </button>

                <button
                    onClick={() => dispatch(selectProduct({ id: 2, name: 'Phone', price: 2200 }))}
                    className={currentProduct?.id === 2 ? 'product-tile selected' : 'product-tile'}
                >
                    <span>02 / MOBILE</span><strong>Phone</strong><small>2,200 NIS</small>
                </button>

                <button
                    onClick={() => dispatch(selectProduct({ id: 3, name: 'Headphones', price: 450 }))}
                    className={currentProduct?.id === 3 ? 'product-tile selected' : 'product-tile'}
                >
                    <span>03 / AUDIO</span><strong>Headphones</strong><small>450 NIS</small>
                </button>

                <button
                    className="reset-link"
                    onClick={() => dispatch(clearProduct())}
                >
                    Clear product <span>↗</span>
                </button>
            </section>
        </div>
    );
};



