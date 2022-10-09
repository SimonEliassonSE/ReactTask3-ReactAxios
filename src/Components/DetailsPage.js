import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Row,
  Card,
  Col,
  FormLabel,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserArray, UserDetail } from "../index";
import cityData from "../city-dummy-data.json";
import countryData from "../country-dummy-data.json";

function DetailsPage() {
  const { userDetail } = useContext(UserDetail);
  const { setUserList } = useContext(UserArray);

  const getCityName = cityData.filter((obj) => {
    return obj.cityId == userDetail.city;
  });

  const getCountryName = countryData.filter((obj) => {
    return obj.countryId == userDetail.country;
  });

  const handleDelete = () => {
    setUserList((current) =>
      current.filter((userList) => {
        return userList.id !== userDetail.id;
      })
    );
  };

  return (
    <Container className="m-5">
      <Card className="p-2">
        <Row className="mb-2">
          <Col>
            <p>
              {/* {userDetails.name} */}
              User detail for <b>{userDetail.name}</b>
            </p>
          </Col>
        </Row>
        <Form>
          <Row className="mb-2">
            <Col>
              {/* {userDetails.id} */}
              <FormLabel>id: {userDetail.id} </FormLabel>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              {/* {userDetails.name} */}
              <FormLabel>Name: {userDetail.name}</FormLabel>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              {/* {userDetails.phoneNumber} */}
              <FormLabel>Phonenumber: {userDetail.phoneNumber}</FormLabel>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              {getCityName.map((obj) => {
                return (
                  <FormLabel key={obj.cityId}>City: {obj.cityName} </FormLabel>
                );
              })}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              {getCountryName.map((obj) => {
                return (
                  <FormLabel key={obj.countryId}>
                    Country: {obj.countryName}
                  </FormLabel>
                );
              })}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Link to="/">
                <Button
                  className="mt-2 mb-2 form-control"
                  variant="primary"
                  type="submit"
                >
                  Return to User List
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <Button
                  className="mt-2 mb-2 form-control btn btn-danger"
                  variant="primary"
                  onClick={handleDelete}
                >
                  Delete this User
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default DetailsPage;
