import PlayerRow from "./PlayerRow"

const PlayerTable = ({data, error, loading}: any) => {
    return (
        <div>
            <table style={{backgroundColor: "steelblue"}}>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>School</th>
                    <th>Next Game</th>
                </tr>
                {(loading ? <h1>Loading...</h1> : (error ? <h1>Error</h1> : data.players.map(({ rank, name, position, school, nextgame }: { rank: any, name: any, position: any, school: any, nextgame: any }) => (
                    <tr style={{ backgroundColor: "lightgray", borderWidth: '10'}}>
                        <PlayerRow rank={rank} name={name} position={position} school={school} nextgame={nextgame} />
                    </tr>
                ))))}
            </table>
        </div>
    )
}

export default PlayerTable
