import GlobalStyles from './styles/GlobalStyle'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
