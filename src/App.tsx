import { SignIn } from "./components/GoogleSignIn"
import { ProtectedRoute } from "./components/ProtectedRoute"
import Profile from "./components/ProtectedComponent"

const App = () => {
  return (<>
    <SignIn />
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  </>
  )
}

export default App