import Card from "./components/Card";
import MainImg from "./components/MainImg";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainImg />
      <main className="px-6 mx-auto ">
        <p className="mt-12 mb-12 text-6xl text-center dark:text-black-100 ">
          Welcome to <span className="font-bold ext-zinc-800">Tech Blogs</span>
        </p>
      </main>
      <div className="blogs">
        <h2>Popular Blogs</h2>
        <div className="blogContent">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
