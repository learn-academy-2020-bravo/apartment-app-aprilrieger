import React, {useEffect, useState } from "react";
import {
  ListGroup,Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from "reactstrap";
// import "../App.css";

const AptIndex = () => {
  const [newApts, setNewApts] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabApts()},[])

  async function grabApts () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3001/cats")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newApts state array with data
        setNewApts(data)
      }
    } catch (err) {
        console.log(err)
    }
  }

    return (
      <React.Fragment>
        {newApts.map((apt, index) => {
          return (
            <div>
            <Card className="card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <ListGroup key={index}>
                    <CardImg top width="100%" src={ apt.image } alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{apt.st_address}</CardTitle>
                    <CardSubtitle>{apt.city}, {apt.state} {apt.zip_code} </CardSubtitle>
                    <CardText>{apt.bedrooms}</CardText>
                    <CardText>{apt.bathrooms}</CardText>
                    <CardText>{apt.monthly_rent}</CardText>
                    <CardText>Manager's Information:</CardText>
                    <CardText>{apt.manager}</CardText>
                    <CardText>{apt.phone}</CardText>
                    <CardText>{apt.manager_hours_start} - {apt.manager_hours_stop}</CardText>
                    <Button href="" color="info">View Listing -- need add fx</Button>
                    </CardBody>
                </ListGroup>
            </Card>
            </div>
          );
        })}
        </React.Fragment>
    );
  };
  export default AptIndex;