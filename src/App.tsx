import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useFullScreenHeight } from './hooks/useFullScreenHeight'
import HomePage from './pages/Home'
import WorksPage from './pages/Works'

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

const App: React.FC = () => {
  useFullScreenHeight()

  return <RouterProvider router={router} />
}

export default App
