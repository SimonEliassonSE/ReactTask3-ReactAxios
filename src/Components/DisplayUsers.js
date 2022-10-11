import { Table, Button, Container } from "react-bootstrap";
import { UserArray, UserDetail } from "../index";
// , CityArray, CountryArray
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

function DisplayUsers() {
  // const { countryList } = useContext(CountryArray);
  // const { cityList } = useContext(CityArray);
  const { userList, setUserList } = useContext(UserArray);
  const { userDetail, setUserDetail } = useContext(UserDetail);
  const [order, setOrder] = useState("ASC");

  // Sorting function
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("ASC");
    }
  };

  // let getCountryId;

  const clickHandler = (user) => {
    const userData = {
      id: user.id,
      name: user.name,
      phoneNumber: user.phonenumber,
      city: user.cityId,
      // country: user.cityId
      // country: user.cityName,
      // country: user.country,
    };
    // const countryId = countryList.filter(() => {

    // }
    // )
    // const countryId = {
    //   city
    //   country: user.
    //   // const getCityName = cityList.filter((obj) => {
    //   //   return obj.id == userDetail.city;
    //   // });
    // }

    if (userDetail !== null) {
      setUserDetail(null);
    }
    setUserDetail(userData);
    console.log(userDetail);
  };

  return (
    <Container className="m-6">
      <Table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => sorting("name")}>User Name</th>
            <th>User details</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <Link to="/Details">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => clickHandler(user)}
                    >
                      User Details
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default DisplayUsers;
