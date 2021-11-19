import './App.css';
import PlayerTable from './components/PlayerTable';
import { PlayerQuery } from './components/PlayerQuery';
import { ScrapeAndSeedMutation } from './components/ScrapeAndSeedMutation';
import SearchBar from "./components/SearchBar"
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  return (
    <div>
      <div>
        <SearchBar label={"Name: "} setVariable={setName}/>
        <SearchBar label={"School: "} setVariable={setSchool}/>
      </div>
      <div>
        <ScrapeAndSeedMutation>
        {({ scrapeAndSeed, loading, error, data }:any) => (
          (loading ? <button type="button" disabled>Loading</button> : <button onClick={scrapeAndSeed}>Refresh Database</button>)
        )}
        </ScrapeAndSeedMutation>
      </div>
      <PlayerQuery rank={0} position={""} school={school} name={name} >
        {({ loading, error, data }:any) => (
            <PlayerTable data={data} error={error} loading={loading} />)}
      </PlayerQuery>
    </div>
  );
}

export default App;
