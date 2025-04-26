import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider} from "@/components/contexts/Themeprovider.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
              <BrowserRouter>
                  <AppRoutes />
              </BrowserRouter>
      </ThemeProvider>
  </StrictMode>
)
