import './App.css';

function Header() {
  return (
    <div class="header">
      <h1>Notes App</h1>
      <p class="app-info">Quick notes</p>
    </div>
  );
}

function Notes() {
  return (
    <div class="notes">
      <div id="quick-notes">Click and edit</div>
    </div>
  );
}

function Footer() {
  return (
    <div class="footer">
      <p>Just for fun.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
