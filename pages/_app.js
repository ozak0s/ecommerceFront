import { createGlobalStyle } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { CartContextProvider } from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto&family=Work+Sans:wght@200;600&display=swap');
body{
  background-color: #eee;
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </StyledComponentsRegistry>
    </>
  );
}
