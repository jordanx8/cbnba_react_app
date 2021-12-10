import './App.css';
import PlayerTable from './components/PlayerTable';
import { PlayerQuery } from './components/PlayerQuery';
import { ScrapeAndSeedMutation } from './components/ScrapeAndSeedMutation';
import SearchBar from "./components/SearchBar"
import { useState } from 'react';
import Select from 'react-select';

function App() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [position, setPosition] = useState('');
  const options = [
    { value: 'PG', label: 'PG' },
    { value: 'SG', label: 'SG' },
    { value: 'G', label: 'G' },
    { value: 'SF', label: 'SF' },
    { value: 'PF', label: 'PF' },
    { value: 'F', label: 'F' },
    { value: 'C', label: 'C' }
  ]

  return (
    <div>
      <div>
        <SearchBar label={"Name"} setVariable={setName} />
        <SearchBar label={"School"} setVariable={setSchool} />
        <Select isSearchable={false} isClearable={true} options={options} placeholder={"Select Position"} onChange={(value) => setPosition((value == undefined) ? "" : value.value)} />
      </div>
      <div>
        <ScrapeAndSeedMutation>
          {({ scrapeAndSeed, loading, error, data }: any) =>
            (loading ? <button type="button" disabled>Loading</button> : <button onClick={scrapeAndSeed}>Refresh Database</button>)
          }
        </ScrapeAndSeedMutation>
      </div>
      <PlayerQuery rank={0} position={position} school={school} name={name} >
        {({ loading, error, data }: any) => (
          <PlayerTable data={data} error={error} loading={loading} />)}
      </PlayerQuery>
    </div>
  );
}

export default App;
