import Home from "./components/Home"
import { ProtectedRoute } from "./components/ProtectedRoute"
import Unauthorized from "./components/Unauthorized"

const App = () => {
  return (<>
    <ProtectedRoute unauthorized={<Unauthorized />}><Home /></ProtectedRoute>
  </>
  )
}

export default App