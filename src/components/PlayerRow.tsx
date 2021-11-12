export {}

const PlayerRow = ({ rank, name, position, nextgame, school }:any) => {
    return (
        <>
        <td>
            {rank}
        </td>
        <td>
            {name}
        </td>
        <td>
            {position}
        </td>
        <td>
            {school}
        </td>
        <td>
            {nextgame}
        </td>
        </>
    )
}

export default PlayerRow
