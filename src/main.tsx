import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TagManager from 'react-gtm-module'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import App from './App'
import './App.scss'
import './assets/css/main.css'
import './assets/css/responsive.css'
import { Preloader } from './components/Preloader'

const tagManagerArgs = {
    gtmId: 'GTM-KBXQP3D4',
}
TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Preloader />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
