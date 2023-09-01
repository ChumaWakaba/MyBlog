import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import ErrorPage from './Pages/error-page'
import Home from './Pages/Home'
import Author from './Components/Author'
import Blogs from './Components/Blogs'
import BlogDetails from './Components/BlogDetails'
import UserBlog from './Components/UserBlog'
import AddBlog from './Components/AddBlog'


const router = createBrowserRouter([{
  element: <Root/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/blogs",
      element: <Blogs/>,
    },
    {
      path: "/author",
      element: <Author/>,
    },
    {
      path: "/user-blog",
      element: <UserBlog/>,
    },
    {
      path: "/blog-Detail/:id",
      element: <BlogDetails/>,
    },
    {
      path: "/add-blog",
      element: <AddBlog/>,
    }
  ]
}])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App