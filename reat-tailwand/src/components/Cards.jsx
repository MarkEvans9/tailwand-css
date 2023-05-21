import SinglePerson from "../assets/images/single.png";
import DoublePerson from "../assets/images/double.png";
import TriplePerson from "../assets/images/triple.png";

function Cards() {
  return (
    <div className="w-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src={SinglePerson}
            alt="Single person image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p
            className="text-center text-4xl
           font-bold"
          >
            $122
          </p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] font-medium rounded-md py-3 text-center mt-6 mx-auto text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={DoublePerson}
            alt="Single person image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p
            className="text-center text-4xl
           font-bold"
          >
            $122
          </p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt8">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] font-medium rounded-md py-3 text-center mt-6 mx-auto text-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src={TriplePerson}
            alt="Single person image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p
            className="text-center text-4xl
           font-bold"
          >
            $122
          </p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] font-medium rounded-md py-3 text-center mt-6 mx-auto text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
