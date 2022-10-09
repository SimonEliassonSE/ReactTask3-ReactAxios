import React, { useState, useContext } from "react";
import { Button, Card, Form, Col, Row, Container } from "react-bootstrap";
import cityData from "../city-dummy-data.json";
import countryData from "../country-dummy-data.json";
import { UserArray } from "../index";

function NewUser() {
  const { userList, setUserList } = useContext(UserArray);

  const [enteredName, setEnteredName] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredCity, setExistingCity] = useState("");
  const [enteredCountry, setExistingCountry] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };

  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    console.log(getCountryId);
    setExistingCountry(getCountryId);
  };

  const handleCity = (e) => {
    const getCityId = e.target.value;
    console.log(getCityId);
    setExistingCity(getCityId);
  };

  const submitHandler1 = (event) => {
    event.preventDefault();

    const newPerson = {
      id: userList.length + 1,
      name: enteredName,
      phoneNumber: enteredPhoneNumber,
      city: enteredCity,
      country: enteredCountry,
    };

    console.log(newPerson);
    setUserList([...userList, newPerson]);
    console.log(userList);

    // props.onSaveUserData(newPerson);
    setEnteredName("");
    setEnteredPhoneNumber("");
    setExistingCity("");
    setExistingCountry("");
  };

  return (
    <Container className="mb-5 mt-5">
      <Card className="mb-3" style={{ color: "#000" }}>
        <Card.Body>
          <Form onSubmit={submitHandler1}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Name: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name..."
                    required
                    value={enteredName}
                    onChange={nameChangeHandler}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phonenumber: </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your Phonenumber..."
                    required
                    value={enteredPhoneNumber}
                    onChange={phoneNumberChangeHandler}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col>
                <div>
                  <label>Select City</label>
                  <select
                    className="form-control"
                    name="city"
                    onChange={(e) => handleCity(e)}
                  >
                    {cityData.map((getCity, index) => (
                      <option value={getCity.cityId} key={index}>
                        {getCity.cityName}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col>
                <div>
                  <label>Select Country</label>
                  <select
                    className="form-control"
                    name="country"
                    onChange={(e) => handleCountry(e)}
                  >
                    {countryData.map((getCountry, index) => (
                      <option value={getCountry.countryId} key={index}>
                        {getCountry.countryName}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
                <Button
                  className="form-control mt-3 mb-3"
                  variant="primary"
                  type="submit"
                >
                  Add new user
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewUser;
