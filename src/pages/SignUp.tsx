const SignUpPage = () => {
    return (
      <div className="flex flex-col min-h-screen justify-between">
        <main className="flex flex-1 items-center justify-center p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-[#161653] mb-6">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full mt-1 p-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" className="w-full mt-1 p-2 border rounded-lg" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all">
                Sign Up
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="flex flex-col space-y-6 mt-8 p-6 bg-[#403D94] text-gray-300">
        <p className="bg-white w-fit py-2 px-6 font-bold text-[#161653] md:text-xl text-sm rounded-lg shadow-md">
          My Favorite Website
        </p>
        
        <div className="flex flex-col md:flex-row justify-between md:w-[900px] mx-auto space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-5 order-first md:order-last text-center md:text-left">
            <p className="text-2xl font-bold">Sign Up Today!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all">
              Sign Up
            </button>
          </div>
          
          <div className="flex flex-row space-x-10 text-sm text-center md:text-left">
            <div className="flex flex-col space-y-4">
              <a href="https://unai.edu/" className="hover:text-white transition-all">UNAI</a>
              <a href="https://fti.unai.edu/" className="hover:text-white transition-all">FTI</a>
              <a href="https://github.com/" className="hover:text-white transition-all">Github</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="https://tailwindcss.com/" className="hover:text-white transition-all">Tailwind</a>
              <a href="https://react.dev/" className="hover:text-white transition-all">React JS</a>
              <a href="https://axios-http.com/docs/intro" className="hover:text-white transition-all">Axios</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="https://tanstack.com/query/latest" className="hover:text-white transition-all">Tanstack Query</a>
              <a href="https://reactnavigation.org/" className="hover:text-white transition-all">React Navigation</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p className="font-semibold leading-5 text-center md:text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="font-semibold">© Lorem Ipsum 2025.</p>
        </div>
      </footer>
    );
  };
  
  export default SignUpPage;
  