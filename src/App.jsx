import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import UnAuthNavItems from "./components/UnAuthNavItems";



function App() {
  const { user,logout } = useContext(AuthContext)

  // if (user) {
  //   <>
  //     <UnAuthNavItems user={user} />
  //     <div className="min-vh-100">
  //       <Outlet />
  //     </div>
  //     <Footer />

  //   </>
  // }

  return (
    <>
      {user && <UnAuthNavItems  /> ? <UnAuthNavItems user={user} /> : <NavItems />}
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />

    </>
  );
}

export default App;
