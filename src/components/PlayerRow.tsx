export { }

const PlayerRow = ({ rank, name, position, nextgame, school }: any) => {
    var date = new Date(nextgame);
    var dateplustime = date.toLocaleDateString() + ', ' + date.toLocaleTimeString()
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
                {dateplustime}
            </td>
        </>
    )
}

export default PlayerRow
