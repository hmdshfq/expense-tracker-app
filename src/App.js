import './App.css';

// import components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <Header/>
      <main>
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
