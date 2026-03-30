import { useState } from "react";
import { ItemProvider } from "./context/ItemContext";
import Form from "./components/Form";
import Lista from "./components/Lista";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  async function handleLogout() {
    await signOut(auth);
    setUser(null);
  }

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <ItemProvider>
      <div className="container">
        <Form user={user} logo={logo} />
        <Lista user={user} />

       <div className="logout-container">
          <button onClick={handleLogout} className="btn-logout">Sair</button>
        </div>
      </div>
    </ItemProvider>
  );
}

export default App;