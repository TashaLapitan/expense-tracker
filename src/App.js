import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ExpensesList from './pages/ExpensesList';
import AddNewExpense from './pages/AddNewExpense';
import Chart from './pages/Chart';
import Navbar from './components/Navbar';
import * as data from './dummy.data.json';

function App() {

  //localStorage.removeItem('expensesDB');

  const existingDB = JSON.parse(localStorage.getItem('expensesDB'));
  if (!existingDB || existingDB.length === 0) {
    const allExpenses = data.default;
    localStorage.setItem('expensesDB', JSON.stringify(allExpenses));
  }


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
