import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import DetailsPage from "../src/Components/DetailsPage";
import NewUser from "../src/Components/NewUser";
import DisplayUsers from "../src/Components/DisplayUsers";
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserArray, UserDetail } from "./index";
import userListData from "./person-dummy-data.json";

// Next to do is work with Axios (it is installed already)

function App() {
  const [userList, setUserList] = useState(userListData);

  const providerUsers = useMemo(
    () => ({ userList, setUserList }),
    [userList, setUserList]
  );

  const [userDetail, setUserDetail] = useState(null);

  const providerUserDetails = useMemo(
    () => ({ userDetail, setUserDetail }),
    [userDetail, setUserDetail]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserDetail.Provider value={providerUserDetails}>
              <UserArray.Provider value={providerUsers}>
                <NewUser></NewUser>
                <DisplayUsers></DisplayUsers>
              </UserArray.Provider>
            </UserDetail.Provider>
          }
        ></Route>
        <Route
          path="/Details"
          element={
            <UserDetail.Provider value={providerUserDetails}>
              <UserArray.Provider value={providerUsers}>
                <DetailsPage></DetailsPage>
              </UserArray.Provider>
            </UserDetail.Provider>
          }
        ></Route>
        {/* <Route
          path="/Userlist"
          element={
            <UserDetail.Provider value={providerUserDetails}>
              <UserArray.Provider value={providerUsers}>
                <NewUser></NewUser>
                <DisplayUsers></DisplayUsers>
              </UserArray.Provider>
            </UserDetail.Provider>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
