import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;