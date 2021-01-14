import './App.css';

function Header() {
  return (
    <div class="header">
      <h1>Notes App</h1>
      <p class="app-info">Quick notes</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
