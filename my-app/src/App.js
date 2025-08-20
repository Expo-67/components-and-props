import logo from "./logo.svg";
import "./App.css";
import about from "./components/about";
import Header from "./components/header";
import blogdata from "../src/data/blog";
import ArticleList from "./components/ArticleList";
function App() {
  return (
    <div className="App">
      <Header name={blogdata.name} />
      <about image={blogdata.image} about={blogdata.about} />
      <ArticleList posts={blogdata.posts} />
    </div>
  );
}

export default App;
