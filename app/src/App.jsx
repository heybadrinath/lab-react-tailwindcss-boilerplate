import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between items-center bg-red-400 py-6 px-4 border-solid border-t-4 border-purple-600">
        <div className="block flex-grow sm:flex sm:flex-glow">
          <span className="font-bold text-xl text-white">Kalvium</span>
        </div>

        <div className="w-full block flex-grow align-middle sm:flex sm:flex-glow">
          <a
            href="#"
            className="block sm:inline-block sm:mt-0 text-green-300 mx-2"
          >
            About
          </a>
          <a
            href="#"
            className="block sm:inline-block sm:mt-0 text-green-300 mx-2"
          >
            Contacts
          </a>
          <a
            href="#"
            className="block sm:inline-block sm:mt-0 text-green-300 mx-2"
          >
            Courses
          </a>
        </div>

        <div className="">
          <button className="bg-cyan-500 hover:bg-cyan-300 py-2 px-5 rounded-xl font-bold text-white border-solid border-2">
            Login
          </button>
        </div>
      </nav>

      <div className="mt-5 py-2 mx-40">
        <button className="bg-blue-500 text-white  font-bold p-2 my-3 rounded">
          Button
        </button>

        <p className="bg-red-100 text-red-500 border-solid border-2 border-red-500 rounded-sm p-1">
          <span className="font-bold text-red-600">Alert!</span> This Is Awesome
        </p>
      </div>

      <div className="shadow-xl mx-auto flex w-fit p-2">
        <img
          className="w-24 h-12 inline my-1 mx-4"
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
        />
        <div>
          <p className=" text-center font-semibold font-">
            Kalvium Store
          </p>
          <span className="block text-center w-max">You have a new course!</span>
        </div>
      </div>

      <footer className="bg-gray-300 my-5">
        <p className="text-gray-500 text-center p-2 ">
          @ 2021 Copyright: {" "}
          <span className="font-semibold text-black">Kalvium</span>
        </p>
      </footer>
    </>
  );
}

export default App;
