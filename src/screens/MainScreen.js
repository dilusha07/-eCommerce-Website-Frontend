//import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductsScreen from "./ProductsScreen";
import SearchScreen from "./SearchScreen";

function MainScreen() {
  return (
    // <BrowserRouter>
    //   <div className="grid-container">
    //     <header className="header">
    //       <div className="brand">
    //         <h1>ECommerce Web APP</h1>
    //       </div>
    //       <div>
    //         <div className="dropdown">
    //           <Link to="#admin">Admin</Link>
    //         </div>
    //       </div>
    //     </header>
    //     <main className="main">
    //       <div className="content">
    //         <ProductsScreen />
    //       </div>
    //     </main>
    //     <footer className="footer">All right reserved</footer>
    //   </div>
    // </BrowserRouter>
    <div>
      <SearchScreen />
      <ProductsScreen />
    </div>
  );
}

export default MainScreen;
