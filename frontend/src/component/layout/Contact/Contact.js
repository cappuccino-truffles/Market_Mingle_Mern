import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import Metadata from "../Metadata";

const Contact = () => {
  return (
    <>
      <Metadata title={"Contact -- MARKET MINGLE"} />
      <div className="contactContainer">
        <a className="mailBtn" href="mailto:minglemarket820@gmail.com">
          <Button>Contact: minglemarket820@gmail.com</Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
