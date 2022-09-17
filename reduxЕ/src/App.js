import './App.css';
import card from "../src/next_gen-land_1_4x.webp";
import Like from './components/like/Like';
import Title from './components/title/Title';
import Comments from './components/comments/Comments';
import Spin from './spin';
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.appReducer.error);
  console.log("error" , error);

  return (
    <div className="App">
      <div className='wrap'>
        <Spin/>
        <div className='card'>
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className='card-image'>
            <img src={card} />
            <Title />
            <Like />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
