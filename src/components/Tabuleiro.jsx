import Button from './Button';

function Tabuleiro({ array, onClickButton }) {
  return (
    <>
      {array.map((arr, row) => (
        <div className='mb-4 justify-center m-auto'>
          {arr.map((item, col) => (
            <Button
              key={`${row}-${col}`}
              value={item}
              row={row}
              col={col}
              onClickButton={onClickButton}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default Tabuleiro;
