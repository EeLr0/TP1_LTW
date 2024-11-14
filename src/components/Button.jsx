function Button({ value, col, row, onClickButton }) {
    return (
      <button className="w-24 h-24 bg-gray-400 pb-3 pt-3 ml-4 mr-4 uppercase font-semibold text-xl" onClick={() => onClickButton(row, col)}>
        {value}
      </button>
    );
  }
  
  export default Button;
  