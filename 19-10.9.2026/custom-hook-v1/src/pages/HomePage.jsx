import {useDocumentTitle} from '../hooks/useDocumentTitle'

export default function HomePage() {
    useDocumentTitle("Home Page | My App");

    return (
        <main>
            <hi>Welcome to the homepage</hi>
            <p>The tab title updated accordingly.</p>
        </main>
    );
}