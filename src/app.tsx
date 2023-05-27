import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@components/layout'
import Loading from '@components/loading'

const HomePage = lazy(async () => await import('./pages/home'))
const WorksPage = lazy(async () => await import('./pages/works'))

const App: React.FC = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
)

export default App
