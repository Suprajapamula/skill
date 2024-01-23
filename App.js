import React from 'react';
import store from './store';
import Counter from './Reducers/Components/Counter';
import { Provider } from 'react-redux';
import Todolist from './Reducers/Components/Todolist';
function App() {
  return (
     <div>
      <Provider store={store}>
         <Counter></Counter>
         <Todolist></Todolist>
      </Provider>
     </div>
  )
}

export default App