import { ProtectedRoute } from "./components/ProtectedRoute"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Todos from "./components/Todos"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "todos",
      element: <ProtectedRoute unauthorized={<span>You need to be signed in.</span>}><Todos /></ProtectedRoute>
    }])
  return (<>
    <RouterProvider router={router} />
  </>
  )
}

export default App