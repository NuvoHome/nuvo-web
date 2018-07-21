import React, { Component, PropTypes } from "react";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Article from "grommet/components/Article";
import Headline from "grommet/components/Headline";
import Hero from "grommet/components/Hero";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";
import Columns from "grommet/components/Columns";
import Form from "react-formify";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { getMessage } from "grommet/utils/Intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import es from "react-intl/locale-data/es";
import NavHeader from "../components/NavHeader";

addLocaleData([...en, ...pt, ...es]);

class Homepage extends Component {
  render() {
    const { intl } = this.context;
    const CustomForm = () => (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <Form
              defaultErrors={{ email: "" }}
              defaultValue={{ email: "" }}
              onSubmit={(user, reset) => {
                reset();
                subscribe({ EMAIL: user.email });
              }}
              rules={rules}
            >
              {(state, errors, isValid) => (
                <fieldset style={fieldsetStyle}>
                  <Box
                    direction="row"
                    justify="center"
                    align="center"
                    margin="none"
                  >
                    <input
                      style={inputStyle}
                      {...state.email}
                      placeholder={getMessage(intl, "emailPlaceholder")}
                    />
                  </Box>
                  <Box
                    direction="row"
                    justify="center"
                    align="center"
                    margin="none"
                  >
                    {errors.email ? (
                      <span className="error">{errors.email}</span>
                    ) : (
                      undefined
                    )}
                  </Box>
                  <Box
                    direction="row"
                    justify="center"
                    align="center"
                    margin="small"
                  >
                    <button style={buttonStyle} type="submit">
                      {getMessage(intl, "getInviteButton")}
                    </button>
                  </Box>

                  <Box
                    direction="row"
                    justify="center"
                    align="center"
                    margin="none"
                  >
                    <Paragraph align="center">
                      {getMessage(intl, "inviteDetails")}
                    </Paragraph>
                  </Box>
                </fieldset>
              )}
            </Form>
            <Box direction="row" justify="center" align="center" margin="small">
              {status === "sending" && (
                <div style={{ color: "blue" }}>
                  {getMessage(intl, "sendingEmailSignup")}
                </div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>
                  {getMessage(intl, "successEmailSignup")}
                </div>
              )}
            </Box>
          </div>
        )}
      />
    );

    const url =
      "https://healeastern.us15.list-manage.com/subscribe/post?u=e13104066f86b9597dd519aaa&amp;id=2dcaf273db";

    const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const rules = {
      email: value => {
        if (!value || value === "") {
          return getMessage(intl, "emailRequired");
        } else if (!emailExpression.test(value)) {
          return getMessage(intl, "emailInvalid");
        }
        return undefined;
      }
    };
    const fieldsetStyle = {
      border: 0
    };

    const inputStyle = {
      backgroundColor: "#ffffff",
      color: "#000",
      width: "300px"
    };

    const buttonStyle = {
      backgroundColor: "#50e3c2",
      borderColor: "#50e3c2",
      color: "#FFF"
    };

    const imageStyle = {
      height: "800px"
    };

    const paragraphStyle = {
      fontWeight: "bold"
    };

    return (
      <Article scrollStep={false}>
        <NavHeader isHomepage={true} />

        <Hero
          size="large"
          flush={true}
          background={
            <Image
              src="https://images.unsplash.com/photo-1513024786823-2154d44851af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a33978bf445d3ae85615eadc8d27577&auto=format&fit=crop&w=2100&q=80"
              fit="cover"
            />
          }
          backgroundColorIndex="dark"
          style={imageStyle}
        >
          <Box direction="row" justify="center" align="center" margin="medium">
            <Headline margin="none" strong={true}>
              {getMessage(intl, "notifyHeadline")}
            </Headline>
          </Box>
          <Box direction="row" justify="center" align="center" margin="none">
            <Heading align="center" strong={false}>
              {getMessage(intl, "notifyTagline")}
            </Heading>
          </Box>
          <Box
            direction="column"
            justify="center"
            align="center"
            margin={{
              top: "none",
              left: "large",
              right: "large",
              bottom: "none"
            }}
          >
            <Paragraph style={paragraphStyle}>
              {getMessage(intl, "notifyDescription")}
            </Paragraph>
          </Box>

          <Box
            direction="column"
            justify="center"
            align="center"
            margin="small"
          >
            <CustomForm />
          </Box>
        </Hero>

        {/* </Section> */}
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-1"
        >
          <Box
            direction="column"
            justify="center"
            align="center"
            margin={{
              top: "none",
              left: "small",
              right: "small",
              bottom: "none"
            }}
          >
            <Headline margin="none" strong={true}>
              {getMessage(intl, "howItWorks")}
            </Headline>

            <Paragraph>{getMessage(intl, "howItWorksDesc")}</Paragraph>
          </Box>

          <Columns justify="center">
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "tempHumidity")}

              <Image src={require("../img/temp_humidity.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "pressureGas")}

              <Image src={require("../img/gas.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "accel")}

              <Image src={require("../img/accel.svg")} size="thumb" />
            </Box>
            {/* <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Gyroscope
              <Image src={require("../img/gyro.svg")} size="thumb" />
            </Box> */}
            {/* <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Magnetometer
              <Image src={require("../img/compass.svg")} size="thumb" />
            </Box> */}
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "audio")}

              <Image src={require("../img/audio.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "emi")}
              <Image src={require("../img/EMI.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "wifi")}

              <Image src={require("../img/wifi.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "ble")}

              <Image src={require("../img/ble.svg")} size="thumb" />
            </Box>
            {/* <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Thermal Image
              <Image src={require("../img/infra.svg")} size="thumb" />
            </Box> */}
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "lightColor")}

              <Image src={require("../img/light.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              {getMessage(intl, "motion")}

              <Image src={require("../img/motion.svg")} size="thumb" />
            </Box>
          </Columns>
          <Paragraph> {getMessage(intl, "andMore")}</Paragraph>
        </Section>
        <Section pad="large" justify="center" align="center" colorIndex="brand">
          <Headline margin="none" strong={true}>
            {getMessage(intl, "moreThanMotion")}
          </Headline>
          <Paragraph>{getMessage(intl, "moreThanMotionDesc")}</Paragraph>
          <Image src={require("../img/appliance.svg")} />
        </Section>
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >
          <Box
            direction="column"
            justify="center"
            align="center"
            margin={{
              top: "none",
              left: "none",
              right: "none",
              bottom: "none"
            }}
          >
            <Headline strong={true}>{getMessage(intl, "getInvite")}</Headline>
          </Box>

          <Box direction="row" justify="center" align="center" margin="none">
            <CustomForm />
          </Box>
        </Section>
        {/* <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >
          <Headline margin="none">Getting Started?</Headline>
          <Tabs>
            <Tab title="Web">
              <Paragraph>First contents</Paragraph>
            </Tab>
            <Tab title="iOS">
              <Paragraph>Second contents</Paragraph>
            </Tab>
            <Tab title="Android">
              <Paragraph>Third contents</Paragraph>
            </Tab>
          </Tabs>
        </Section> 
        <Section pad="large" justify="center" align="center" colorIndex="light-2">
          <Headline margin="none">About Us</Headline>

        </Section>*/}
      </Article>
    );
  }
}

Homepage.contextTypes = {
  intl: PropTypes.object
};

export default Homepage;
