import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation bar/NavigationBar.component";
import SignIn from "./routes/sign-in/Sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
