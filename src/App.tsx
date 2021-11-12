import './App.css';
import PlayerTable from './components/PlayerTable';
import {PlayerQuery} from './components/PlayerQuery';

function App() {
  return (
    <div>
      <PlayerQuery rank={0} position={""} school={""} name={""} >
        {({ loading, error, data }:any) => (
            <PlayerTable data={data} error={error} loading={loading} />)}
      </PlayerQuery>
    </div>
  );
}

export default App;
