import { useState } from "react";
import UseDocumentTitle from "../hooks/useDocumentTitle";

export default function ProductPage() {
    const [unreadCount, setUnreadCount] = useState(0);

    const pageTitle = unreadCount > 0
        ? `(${unreadCount}) New Messages | Products`
        : 'Product Catalog';

    UseDocumentTitle(pageTitle);

    return (
        <main>
            <h1>Product Catalog</h1>
            <button onClick={() => setUnreadCount(prev => prev + 1)}>
                Add tab notification
            </button>
            <button onClick={() => setUnreadCount(0)}>
                Reset notifications
            </button>
        </main>
    );
}