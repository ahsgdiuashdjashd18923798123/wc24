import Script from "next/script";
import Image from "next/image";


export default function Home() {
  return (
    
   <main>
    <Script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></Script>
    <div className="bg-slate-200 h-screen flex flex-col">

      <h1 className="text-xl font-bold text-center py-5 bg-white text-purple-500">ICC T20 World Cup</h1>
      <div className="flex-1">
      <div className="bg-white rounded-md p-5 w-[90%] lg:w-[800px] mx-auto my-5 shadow-sm h-[70%]">
        <iframe src="https://kicc.rkbdmoza.xyz/?play=9289cbf9957f" className="h-[90%] w-full"></iframe>
        <p className="bg-red-600 rounded-md shadow-sm p-1 m-1 text-white font-medium inline-block">Live</p>
      </div></div>
      <div className="bg-white text-center font-medium text-gray-500 py-5">Developed By <a className="text-blue-500" href="https://techztricks.xyz">TechZtricks</a></div>
    </div>
   </main>
  );
}
