import { useState } from "react";
import PlayerRow from "./PlayerRow"



const PlayerTable = ({ data, error, loading }: any) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>School</th>
                        <th>Next Game</th>
                    </tr>
                </thead>
                <tbody>
                    {(loading ? <h1>Loading...</h1> : (error ? <h1>Error</h1> : data.players.map(({ rank, name, position, school, nextgame }: { rank: any, name: any, position: any, school: any, nextgame: any }) => (
                        <tr>
                            <PlayerRow rank={rank} name={name} position={position} school={school} nextgame={nextgame} />
                        </tr>
                    ))))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerTable
