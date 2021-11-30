import React, { useMemo, useState } from "react";
import "./App.css";
import FilterAndSearch from "./Components/FilterAndSearch";
import PostForm from "./Components/PostForm";
import Tablelist from "./Components/Tablelist";
import MyButon from "./Components/UI/button/MyButon";
import MyModal from "./Components/UI/modal/MyModal";

function App() {
  const [posts, setposts] = useState([
    { id: 1, title: "Pyhton", stack: "MERN stack" },
    { id: 2, title: "JavaScript", stack: "Cyber-stack" },
    { id: 3, title: "Go", stack: "Full-stack" },
    { id: 4, title: "Java", stack: "Backend" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    // console.log("render");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setposts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setposts(posts.filter((s) => s.id !== post.id));
  };
  return (
    <div className="App">
      <div className="apps w-50 mx-auto">
        <MyButon className="btn btn-primary" onClick={() => setModal(true)}>
          Add Post
        </MyButon>
        <MyModal modal={modal} setModal={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        <Tablelist
          remove={removePost}
          posts={sortedAndSearchPosts}
          title="Programming language"
        />
      </div>
    </div>
  );
}

export default App;
