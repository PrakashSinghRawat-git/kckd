import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({handleLogin}) => {
  return (
    <>
      <Head>{`<style>
        header{
          font-family: 'Abril Fatface', cursive;
          font-family: 'Roboto', sans-serif;
        }
      </style>`}</Head>
       <header2 className="fixed w-full z-50 bg-[#4438CA]">

        <nav className="py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Vital Roots
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                onClick={handleLogin}
                className="text-white bg-[#28927d] hover:bg-[#1c6859]   font-medium rounded-lg text-sm px-4 py-2 "
              >
                Login
              </button>
              
            </div>
            
          </div>
        </nav>
      </header2>
    </>
      
  );
};

export default Navigation;
