import { images } from "../data/images";
import { thumbnails } from "../data/images";
import ReactDOM from "react-dom";
import closeIcon from "../assets/images/icon-close.svg";
import leftArrow from "../assets/images/icon-previous.svg";
import rightArrow from "../assets/images/icon-next.svg";

const Lightbox = ({ lightboxOpen, setLightboxOpen, index, setIndex }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        className={
          lightboxOpen
            ? "w-0 absolute lg:w-full h-full left-0 top-0 bg-black/75 z-100 flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="max-w-[600px] h-auto relative">
          <button className="absolute -top-10 right-0 hover:text-orange-500">
            <img
              src={closeIcon}
              alt="close icon"
              className="w-5"
              onClick={() => setLightboxOpen(false)}
            />
          </button>

          <div className="relative">
            <button
              className="absolute w-12 h-12 bg-white rounded-full flex justify-center items-center top-[50%] -left-6"
              onClick={() => {
                setIndex((prevIndex) => prevIndex - 1);
                if (index <= 0) setIndex(3);
              }}
            >
              <img src={leftArrow} alt="left arrow" />
            </button>

            <img src={images[index].url} alt="product" className="rounded-xl" />

            <button
              className="absolute w-12 h-12 bg-white rounded-full flex justify-center items-center top-[50%] -right-6"
              onClick={() => {
                setIndex((prevIndex) => prevIndex + 1);
                if (index >= 3) setIndex(0);
              }}
            >
              <img src={rightArrow} alt="right arrow" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 mt-8">
            {thumbnails.map((item, itemIndex) => (
              <div key={itemIndex}>
                <img
                  src={item.url}
                  alt="product thumbnail"
                  className={
                    index === itemIndex
                      ? "w-[6rem] rounded-lg cursor-pointer border-2 border-orange-500"
                      : "w-[6rem] rounded-lg cursor-pointer"
                  }
                  onClick={() => setIndex(itemIndex)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("lightbox")
  );
};

export default Lightbox;
