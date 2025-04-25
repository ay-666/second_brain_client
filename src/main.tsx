import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import axios from 'axios'

const queryClient = new QueryClient();
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
)
