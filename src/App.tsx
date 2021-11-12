import './App.css';
import PlayerTable from './components/PlayerTable';
import { PlayerQuery } from './components/PlayerQuery';
import { ScrapeAndSeedMutation } from './components/ScrapeAndSeedMutation';

function App() {
  return (
    <div>
      <div>
        <ScrapeAndSeedMutation>
        {({ scrapeAndSeed, loading, error, data }:any) => (
          (loading ? <button type="button" disabled>Loading</button> : <button onClick={scrapeAndSeed}>Refresh Database</button>)
        )}
        </ScrapeAndSeedMutation>
      </div>
      <PlayerQuery rank={0} position={""} school={""} name={""} >
        {({ loading, error, data }:any) => (
            <PlayerTable data={data} error={error} loading={loading} />)}
      </PlayerQuery>
    </div>
  );
}

export default App;
