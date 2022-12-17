import Router from './router';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}
