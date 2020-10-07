import React, { useState } from "react";
import PreviewDetails from "./PreviewDetails";
import styled from "styled-components";
import { Card, TextField, Checkbox } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 15px 17px 16px 26px;
  border-radius: 10px;
`;

const AddDetails: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  let details: any[] = [];

  const nameValid = () => {
    if (name.length < 8) {
      return (
        <span style={{ color: "red" }}>Required Atleast 8 Characters</span>
      );
    } else {
      return null;
    }
  };

  function submitForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = {
      name,
      email,
      number,
    };

    details.push(result);
    console.log(details);
    setName("");
    setEmail("");
    setNumber("");
  }
  return (
    <>
      <Wrapper>
        <form onSubmit={submitForm}>
          <Card>
            <Container>
              <CardActionArea>
                <h1>Add New Customer</h1>
                <div>
                  <CardContent>
                    <div>
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "83%" }}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        autoComplete="off"
                      />
                    </div>
                    <div>{name === "" ? null : nameValid()}</div>
                    <div>
                      <div style={{ marginTop: "10px" }}>
                        <TextField
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: "83%" }}
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          autoComplete="off"
                        />
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <TextField
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          style={{ width: "83%" }}
                          id="outlined-basic"
                          label="Number"
                          variant="outlined"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* <input type="checkbox" /> <label> Are you Virgin?</label> */}
                    <Checkbox checked={true} name="checkedB" color="primary" />
                  </CardContent>
                  <div>
                    <Button
                      type="submit"
                      style={{ display: "inline-block", width: "83%" }}
                      variant="contained"
                      color="primary"
                    >
                      Add Details
                    </Button>
                  </div>
                </div>
              </CardActionArea>
            </Container>
          </Card>
        </form>
      </Wrapper>
      <PreviewDetails />
    </>
  );
};

export default AddDetails;
