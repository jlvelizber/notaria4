import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import App from './App'
import './App.scss'
import './assets/css/main.css'
import './assets/css/responsive.css'
import { Preloader } from './components/Preloader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Preloader />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
