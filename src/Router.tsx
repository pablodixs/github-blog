import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PostPage } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  )
}
