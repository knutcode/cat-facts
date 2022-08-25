import { Headline, Header } from "./components/library";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header>
        <Headline>cat facts! (^・ω・^ )</Headline>
      </Header>
      <MainContent />
    </div>
  );
}

export default App;
