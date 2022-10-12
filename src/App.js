import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import DetailsPage from "../src/Components/DetailsPage";
import NewUser from "../src/Components/NewUser";
import DisplayUsers from "../src/Components/DisplayUsers";
import { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserArray, UserDetail, CityArray, CountryArray } from "./index";
import Axios from "axios";

// Next to do is work with Axios (it is installed already)

function App() {
  // const [userList, setUserList] = useState(userListData);

  const [userList, setUserList] = useState([]);

  const providerUsers = useMemo(
    () => ({ userList, setUserList }),
    [userList, setUserList]
  );

  const [userDetail, setUserDetail] = useState(null);

  const providerUserDetails = useMemo(
    () => ({ userDetail, setUserDetail }),
    [userDetail, setUserDetail]
  );

  // const [countryList, setCountryList] = useState(countryData);
  const [countryList, setCountryList] = useState([]);

  const providerCountryList = useMemo(
    () => ({ countryList, setCountryList }),
    [countryList, setCountryList]
  );

  const [cityList, setCityList] = useState([]);

  const providerCityList = useMemo(
    () => ({ cityList, setCityList }),
    [cityList, setCityList]
  );

  Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  useEffect(() => {
    const getPeopleData = async () => {
      await Axios.get("https://localhost:7201/api/PeopleAPI")
        .then((res) => {
          setUserList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPeopleData();
  }, []);

  // useEffect(() => {
  //   Axios.get("https://localhost:7201/api/PeopleAPI").then((peopleData) => {
  //     console.log(peopleData.data);
  //   });
  // }, []);

  useEffect(() => {
    Axios.get("https://localhost:7201/api/CountryAPI")
      .then((res) => {
        setCountryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   Axios.get("https://localhost:7201/api/CountryAPI").then((countryData) =>
  //     console.log(countryData.data)
  //   );
  // }, []);

  useEffect(() => {
    Axios.get("https://localhost:7201/api/CityAPI")
      .then((res) => {
        setCityList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   Axios.get("https://localhost:7201/api/CityAPI").then((cityData) =>
  //     console.log(cityData.data)
  //   );
  // }, []);

  console.log(userList);
  console.log(cityList);
  console.log(countryList);
  // console.log(CountryArray);
  // console.log(CityArray);
  // console.log(UserArray);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CountryArray.Provider value={providerCountryList}>
              <CityArray.Provider value={providerCityList}>
                <UserDetail.Provider value={providerUserDetails}>
                  <UserArray.Provider value={providerUsers}>
                    <NewUser></NewUser>
                    <DisplayUsers></DisplayUsers>
                  </UserArray.Provider>
                </UserDetail.Provider>
              </CityArray.Provider>
            </CountryArray.Provider>
          }
        ></Route>
        <Route
          path="/Details"
          element={
            <CountryArray.Provider value={providerCountryList}>
              <CityArray.Provider value={providerCityList}>
                <UserDetail.Provider value={providerUserDetails}>
                  <UserArray.Provider value={providerUsers}>
                    <DetailsPage></DetailsPage>
                  </UserArray.Provider>
                </UserDetail.Provider>
              </CityArray.Provider>
            </CountryArray.Provider>
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
