import { Typography, Divider } from 'antd'
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography

function App() {
  return (
    <div className="App">
      <div
      style={{
        width: 650,
        margin: '5px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 15,
        boxShadow: '0 0 8px 3px #bfbfbf',
        borderRadius: 5,
        height: '80vh',
      }}
      >
      <Title style={{ textAlign: 'center' }}>Todo app with Redux</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
    </div>
  );
}

export default App;
