import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCarts, CartIncrement, CartDecrement } from "./redux/Cartslice";
import Cards from "./Cards";
import { toast } from "react-toastify";
import { API_URL } from "./App";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";

function Cartpage() {
  let dispatch = useDispatch();
  let carts = useSelector((state) => state.carts);
  console.log(carts);

  const getCarts = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200)
       dispatch(saveCarts(res.data));
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="h-100 py-5">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card className="shopping-cart " style={{ borderRadius: "15px" }}>
              <CardBody className="text-black">
                <h2 className="mb-5 pt-2 text-center fw-bold text-uppercase bg-light rounded ">
                  Shopping cart
                </h2>
                {carts.map((e, i) => {
                  return <Cards e={e} key={i} />;
                })}
                <Button className="bg-primary"style={{ width:"100%" } }>CHECKOUT</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cartpage;
