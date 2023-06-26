import { Route, Routes } from "react-router-dom"
import { lazy } from "react"

const PostsPage = lazy(() => import('../pages/PostsPage'))
const TasksPage = lazy(() => import('../pages/TasksPage'))
const PhotosPage = lazy(() => import('../pages/PhotosPage'))
const HomePage = lazy(() => import('../pages/HomePage'))

const MainRoutes = (): JSX.Element => {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/posts" element={<PostsPage/>}/> 
        <Route path="/photos" element={<PhotosPage/>}/> 
        <Route path="/tasks" element={<TasksPage/>}/> 
      </Routes>
    )
}

export default MainRoutes