import MainLayout from "@/src/componentes/layout/main-layout";
import "@/styles/globals.css";
import "@/styles/general.sass";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
