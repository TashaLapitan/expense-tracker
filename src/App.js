import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ExpensesList from './pages/ExpensesList';
import AddNewExpense from './pages/AddNewExpense';
import Chart from './pages/Chart';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ExpensesList}/>
        <Route path="/new-expense" component={AddNewExpense}/>
        <Route path="/chart" component={Chart}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
