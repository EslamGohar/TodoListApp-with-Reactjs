import React, {Component} from 'react'
import TodoItems from './components/TodoItems/TodoItems'
import AddItems from './components/AddItems/AddItems'

class App extends Component {

    state = {
        items: [
          {id: 1, name: "Eslam", age: 25},
          {id: 2, name: "Ahmed", age: 22},
          {id: 3, name: "Hossam", age: 33},
          {id: 4, name: "Mohamed", age: 29}
        ]
    }

    // Delete Items from list
    deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id    // return false
      });

      this.setState({ items })
    }
      
      /// Another Method to delete items from list
      /** 
        let items = this.state.items;
        let i = items.findIndex(item => item.id === id);
        items.splice(i, 1);
        this.setState({items});
      **/


    // Add Items to list 
    AddItem = (item) => {
      item.id = Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({ items })
    }


  render() {
    return (
        <div className="App container">
          <h1 className="text-center">Todo List</h1>    
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItems AddItem={this.AddItem} />
        </div>  
    );
  }
}

export default App;
