import { Headline, Header } from "./components/library";
import MainContent from "./components/MainContent";

function App() {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <Header onClick={refresh}>
        <Headline>cat facts! (^・ω・^ )</Headline>
      </Header>
      <MainContent />
    </div>
  );
}

export default App;
