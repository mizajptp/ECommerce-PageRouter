import Nav from "@/components/Nav";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
 useEffect(() => {
   // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
      </div>
    </Provider>
  );
}
