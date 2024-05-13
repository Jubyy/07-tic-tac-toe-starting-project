export default function Log({ listToDisplay }) {

    return (<ol id="log">
        {listToDisplay.map((item) => {
            const { player, square} = item;
            const { row, col } = square;
            return (<li key={`${row}${col}`}>Player {player} placed {player} in row {row}, col {col}</li>)
        }
        )}
    </ol>)
}