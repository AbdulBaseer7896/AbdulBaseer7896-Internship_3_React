import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Text from "./Components/Text";
import UserContextProvider from "./Context/UserContextProvider";


function App() {
  return (
    <>
    <UserContextProvider>
    <h1>React with us</h1>
    <Login/>
    <Profile/>
    <Text />

    </UserContextProvider>
    </>
  );
}

export default App;
