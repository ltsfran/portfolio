import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import WorksPage from './pages/works'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/works',
    element: <WorksPage />
  }
])

const App: React.FC = () => <RouterProvider router={router} />

export default App
