import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Counter = ({ count, setCount }) => {

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
    if (count === 0) setCount(0);
  };

  return (
    <div className="w-full h-14 bg-gray-100 flex justify-between items-center p-4 rounded-md lg:w-[45%]">
      <button onClick={decreaseCount}>
        <img src={minusIcon} alt="minus icon" />
      </button>
      <span className="font-bold">{count}</span>
      <button onClick={increaseCount}>
        <img src={plusIcon} alt="plus icon" />
      </button>
    </div>
  );
};

export default Counter;
