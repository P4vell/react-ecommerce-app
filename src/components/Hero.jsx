import { images } from "../data/images";
import { thumbnails } from "../data/images";
import leftArrow from "../assets/images/icon-previous.svg";
import rightArrow from "../assets/images/icon-next.svg";

const Hero = ({ index, setIndex, setLightboxOpen }) => {
  const showNextPhoto = () => {
    setIndex((prevIndex) => prevIndex + 1);
    if (index >= 3) setIndex(0);
  };

  const showPreviousPhoto = () => {
    setIndex((prevIndex) => prevIndex - 1);
    if (index <= 0) setIndex(3);
  };

  return (
    <div className="mt-16 relative lg:mt-0">
      <button
        className="absolute top-[50%] translate-y-[-50%] left-4 w-10 h-10 rounded-full bg-white flex justify-center items-center lg:hidden"
        onClick={showPreviousPhoto}
      >
        <img src={leftArrow} alt="left arrow" />
      </button>
      <img
        src={images[index].url}
        alt="product"
        className="w-full h-full max-w-[500px] object-cover lg:rounded-xl mx-auto cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      />
      <button
        className="absolute top-[50%] translate-y-[-50%] right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center lg:hidden"
        onClick={showNextPhoto}
      >
        <img src={rightArrow} alt="right arrow" />
      </button>

      <div className="hidden lg:flex mt-8 justify-center items-center gap-7">
        {thumbnails.map((item, itemIndex) => (
          <img
            src={item.url}
            alt="product thumbnail"
            key={itemIndex}
            className={
              index === itemIndex
                ? "w-[6rem] rounded-lg cursor-pointer border-2 border-orange-500"
                : "w-[6rem] rounded-lg cursor-pointer"
            }
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
