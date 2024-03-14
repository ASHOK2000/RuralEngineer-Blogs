import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./../../NavBar";
import CardList from "./../../inThisArticle";
import "../../../css/PhonePe.express.css";
import Contact from "./../../Contact-us";
import Footer from "./../../Footer";
import TopThreeBlog from "./../../Blog.topThree";
import phonePeTitle from "../../../InThisSection/phonepe.nest.title";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import titleImage from "../../../res_images/Phonepe_express.png";
import AdvertisementPoster from "../../AdvertisementPoster";

export default function PhonePeExpress() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const firstDiv = document.getElementById("firstDiv");
    const secondDiv = document.getElementById("secondDiv");

    if (firstDiv && secondDiv) {
      const rect = firstDiv.getBoundingClientRect();

      if (rect.bottom <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* always put section name by series of heading Eg. id="section1  */}

      <div className="Header">
        <NavBar />
      </div>


      <Container fluid className="mt-5">


        <Row>
          {/* first Column */}
          <Col md={3} className=" mb-5">
            {/* Left Column */}
            <div id="leftCol" className={isSticky ? "sticky" : ""}>
              {/* IN THIS ARTICLE CARD LIST  */}
              <CardList data={phonePeTitle} />
            </div>
          </Col>
          {/*  ----------------------------------------- second Column---------------------------------------------------------*/}
          <Col md={7}>

            <div>
              <h2 style={{ fontFamily: "calibre" }}>
                Integrating PhonePe with Express.js: A Step-by-Step Guide                <hr></hr>
              </h2>
            </div>
            <Container>
              <div className="image-container">
                <img variant="top" alt="title" src={titleImage} />
              </div>
            </Container>
            <div id="firstDiv" className="mt-5">
              <div id="section1">
                <h5>Introduction</h5>
                <p>
                  PhonePe is a widely recognized and highly reputable payment
                  gateway that empowers users to seamlessly manage their
                  payments. In a market filled with various payment gateway
                  options like Razorpay and Stripe, PhonePe stands out as a
                  prominent and user-friendly choice. Renowned for its ease of
                  use and robust security features, PhonePe has become a
                  preferred platform for processing online payments. Whether
                  you're a business owner or a consumer, PhonePe offers a
                  convenient and secure way to handle your financial
                  transactions.
                </p>

                Versatile Payment Options
                Seamless Transactions
                Bank-Grade Security
                Bank-Grade Security

              </div>
            </div>
            <div id="secondDiv">
              <div id="section2">
                <h5>Installation Of PhonePe Module</h5>
                <p>Ensure the necessary packages are installed by running the following command:</p>
                <SyntaxHighlighter className="code_text">
                  {`npm install express axios crypto nodemon `}
                </SyntaxHighlighter>
              </div>

              <div id="section3">
                <h5>Express Server</h5>
                <SyntaxHighlighter className="code_text">
                  {`const express = require('express')
const axios = require('axios');
const crypto = require("crypto");


const app = express()
const port = 3000

app.get('/initiate-payment', async (req, res) => {

//CODE LOGIC 

})

app.listen(port, () => {
  console.log("Example app listening on port 3000")
})`}
                </SyntaxHighlighter>
              </div>

              <div id="section3">
                <h5>Express Route for Payment </h5>
                <p>Create a dedicated route (/initiate-payment) to serve as the entry point for users to initiate the payment process.</p>
                <SyntaxHighlighter className="code_text">
                  {`app.get("/initiate-payment", async (req, res) => {
  // ... code for initiating payment
});`}
                </SyntaxHighlighter>
              </div>

              <div id="section4">
                <h5>PhonePe Key Secrets</h5>
                <p>Replace with your own</p>
                <SyntaxHighlighter className="code_text">
                  {`MerchantKey/salt key = '62d3ed13-81a2-465445-8542-9127771e11d6'
merchantId: 'YOURMERCHANTID'
Index_Key = '1'
`}
                </SyntaxHighlighter>
              </div>
              <div id="section5">
                <h5>Payload</h5>
                <SyntaxHighlighter className="code_text">
                  {`const payload = {
  "merchantId": "MERCHANTUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MU933037302229373",
  "amount": amount*100,
  redirectUrl: "https://webhook.site/redirect-url",
  "callbackUrl": "https://webhook.site/callback-url",
  "mobileNumber": "9999999999",
  "deviceContext": {
    "deviceOS": "ANDROID"
  },
  "paymentInstrument": {
    "type": "PAY_PAGE",
  }
  }
`}
                </SyntaxHighlighter>
              </div>
              <div id="section6">
                <h5>Payload to BASE64 Encoding</h5>
                <p>Convert the JSON Payload to Base64 Encoded Payload</p>
                <SyntaxHighlighter>
                  const payloadMain = Buffer.from(JSON.stringify(payload)).toString('base64');
                </SyntaxHighlighter>
                <p>Base64 encoded payload:</p>
                <SyntaxHighlighter>
                  {`payloadMain = ewogICJtZXJjaGFudElkIjogIkjkFUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VOTMzMDM3MzAyMjI5MzczIiwKICAiYW1vdW50IjogMTAwMDAsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAiZGV2aWNlQ29udGV4dCI6IHsKICAgICJkZXZpY2VPUyI6ICJBTkRST0lEIgogIH0sCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiVVBJX0lOVEVOVCIsCiAgICAidGFyZ2V0QXBwIjogImNvbS5waG9uZXBlLmFwcCIsCiAgICAiYWNjb3VudENvbnN0cmFpbnRzIjogW3sKICAgIAkiYWNjb3VudE51bWJlciI6ICI0MjAyMDAwMDE4OTIiLAogICAgCSJpZnNjIjogIklDSUMwMDAwMDQxIgogICAgfV0KICB9Cn0
`}{" "}
                </SyntaxHighlighter>
              </div>
              <div id="section7">
                <h5>Calculating the Hash</h5>
                <p>Function calculateHash return's SHA256  Encoding
                </p>
                <SyntaxHighlighter>
                  {`const calculateHash = async (inputString) => {
  const encoder = new TextEncoder('utf-8');
  const data = encoder.encode(inputString);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  let hashArray = Array.from(new Uint8Array(hashBuffer));
  let hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
};
`}
                </SyntaxHighlighter>

                <div id="section8">
                  <h5>Constructing Request Headers</h5>
                  <p>Final Computation:
                    SHA256</p>
                  <SyntaxHighlighter>
                    {`const inputString = payloadMain + "/pg/v1/pay" + merchantKey;
const cal_Hash = await calculateHash(inputString);
const X_Verify = cal_Hash + ### + Index_Key 
`}
                  </SyntaxHighlighter>

                </div>



                <p>Checksum Value : </p>
                <SyntaxHighlighter>
                  {`X_Verify = f6d50792b783f793bd75ba9f3d4318fg4f5h71c05d5eec866896c6b673e327582ed###1`}
                </SyntaxHighlighter>
              </div>
              <div id="section9">
                <h5>POST Payload Using Axios</h5>
                <div>
                  <SyntaxHighlighter
                    language="javascript"
                    className="code_text">
                    {`const options = {
    method: "POST",
    url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": X_Verify, //X-verify
    },
    data: {
      request: payloadMain,//payload
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
`}
                  </SyntaxHighlighter>
                </div>

                <div className="">
                  <h5>make request from postman/Browser</h5>
                  <SyntaxHighlighter>
                    curl --location 'http://localhost:3000/initiate-payment' \
                  </SyntaxHighlighter>
                </div>

                <div id="section9">
                  <h5>Sample Response from PhonePe </h5>
                  <SyntaxHighlighter>
                    {`  {
  "success": true,
  "code": "PAYMENT_INITIATED",
  "message": "Payment initiated",
  "data": {
    "merchantId": "PGTESTPAYUAT89",
    "merchantTransactionId": "MT7850590068188114",
    "instrumentResponse": {
      "type": "PAY_PAGE",
      "redirectInfo": {
        "url": "https://mercury-uat.phonepe.com/transact/simulator?token=2bTGiGuHYCdW9dUl4cuKiwGdCLi1LCBrL9yHO5V19mXWcQlyWwFeyYMGydF9cjJTI",
        "method": "GET"
      }
    }
  }
}`}
                  </SyntaxHighlighter>
                </div>
                <div>
                  <h5>Conclusion</h5>
                  <p className="mt-3">
                    <strong>Congratulations!</strong> You've successfully set up an Express.js application to initiate payments with PhonePe. This guide provides a foundation for securely integrating digital payment features into your web application, ensuring a smooth and reliable transaction experience for your users.
                  </p>
                  <div className="mt-5">
                    <strong>
                      the all guideline will provided for test key when you need to go live please change the url  post and your live key secrets

                    </strong>
                  </div>
                </div>


              </div>
            </div>
          </Col>

          <Container>
            <div className="mt-5">
              <AdvertisementPoster />
            </div>
          </Container>
          {/*  ----------------------------------------- third Column---------------------------------------------------------*/}
          <Col md={2}>
            {/* Right Column */}
            {/* <p> this is third div place your add here</p> */}
          </Col>
        </Row>
      </Container>

      <div>
        <Contact />
      </div>

      <div>
        <TopThreeBlog />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
