import Layout from "@/components/Layout";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  const DefaultLayout = Component.Layout || Layout;
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
