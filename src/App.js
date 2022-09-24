import { useEffect, useState } from "react";
import Pagination from "./components/Exercises/Pagination";
import PostList from "./components/Exercises/PostList";
import quertString from "query-string";
import PostFiltersForm from "./components/Exercises/PostFiltersForm";
import Clock from "./components/Exercises/Clock";
import MagicBox from "./components/Exercises/MagicBox";

function App() {
  // const [postList, setPostList] = useState([]);
  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  // });

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = quertString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       console.log(responseJSON);

  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("failed to fetch post list", error.message);
  //     }
  //   }

  //   fetchPostList();
  // }, [filters]);

  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 50,
  // });

  // function handlePageChange(newPage) {
  //   console.log("newPage:", newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // function handleSearchTermChange(newFilters) {
  //   console.log("newFilters:", newFilters);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }

  // const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <h3>React Hooks - Magic box</h3>

      {/* <MagicBox /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button> */}

      {/* <PostFiltersForm onSubmit={handleSearchTermChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default App;
