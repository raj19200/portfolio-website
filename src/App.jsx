import "./styles/GlobalStyle.css";
import AppLayout from "./ui/AppLayout";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<AppLayout />}>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route path="/contact" component={Contact} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <AppLayout />
  );
}

export default App;
