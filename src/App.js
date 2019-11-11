import React,{Component} from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';
import NewCatalogue from './NewCatalogue';
class App extends Component {

  render(){
  return (
    <Router>
    <Switch>
      <Route path='/catalogue/new' exact={true} component={Home}/>
      <Route path='/groups'  component={GroupList}/>
      <Route path='/groups/:id'  component={GroupEdit}/>
      <Route path='/' component={NewCatalogue}/>
    </Switch>
  </Router>
    );
}
}

export default App;
