import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/StudentList';
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Greeting firstName='Harper' />
      <Greeting firstName='Michelle' />
      <Greeting firstName='Andrea' />

      <StudentList>
        <StudentCard
          name='Eva'
          week={7}
          info={{ city: 'BCN', course: 'WEB' }}
        />
        <StudentCard
          name='Mat'
          week={8}
          info={{ city: 'MIA', course: 'DATA' }}
        />
      </StudentList>

      <Badge badgeText='important' />

      <ReactPlayer
        url='https://vimeo.com/channels/top/22439234'
        playing
        controls
        volume='0.9'
      />
    </div>
  );
}

export default App;
