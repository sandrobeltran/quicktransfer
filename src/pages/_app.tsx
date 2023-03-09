import "styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Bebas_Neue } from "next/font/google";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "900"], subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --bebas-font: ${bebas.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
