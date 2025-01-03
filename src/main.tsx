import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './assets/redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import routes from './routers/route.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <StrictMode>
        <Provider store={store}>
        <RouterProvider router={routes}>
        </RouterProvider>
        </Provider>
      </StrictMode>
    </ThemeProvider>
)
