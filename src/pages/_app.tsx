import Header from "./components/Header";
import Wrapper from "../styles/app.module";
import Player from "./components/Player";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </>
  );
}

export default MyApp;
