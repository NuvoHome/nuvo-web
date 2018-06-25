import React, { Component, PropTypes } from "react";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Article from "grommet/components/Article";
import Headline from "grommet/components/Headline";
import Button from "grommet/components/Button";
import Hero from "grommet/components/Hero";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";
import Columns from "grommet/components/Columns";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

class Homepage extends Component {
  render() {
    return (
      <Article scrollStep={false}>
        {/* <Section pad='large'
    justify='center'
    align='center'> */}
        <Hero
          background={
            <Image
              src={require("../img/man_woman_home.jpg")}
              fit="cover"
              full={true}
            />
          }
          backgroundColorIndex="dark"
        >
          <Box direction="row" justify="center" align="center">
            <Heading margin="none" tag="h1" strong={true}>
              Notify
            </Heading>
          </Box>
          <Box direction="row" justify="center" align="center">
            <Paragraph align="center" size="large">
              Presence detection reimagined.
            </Paragraph>
          </Box>

          <Box direction="row" justify="center" align="center">
            <Button
              label="Buy"
              onClick={e => true}
              href="#"
              primary={true}
              secondary={false}
            />
          </Box>
        </Hero>

        {/* </Section> */}
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="grey-4"
        >
          <Headline margin="none">How it Works</Headline>
          <Paragraph>
            Using advanced artificial intelligence technology, the Nuvo Notify
            captures and analyzes changes in physical data in your environment
            to determine occupancy. Notify uses more than 12 different data
            dimensions to accurately pinpoint occupancy.{" "}
          </Paragraph>
          <Columns>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Temperature & Humidity
              <Image src={require("../img/temp_humidity.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Pressure & Gas
              <Image src={require("../img/gas.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Accelerometer
              <Image src={require("../img/accel.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Gyroscope
              <Image src={require("../img/gyro.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Magnetometer
              <Image src={require("../img/compass.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Audio
              <Image src={require("../img/audio.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Electromagnetic Interference
              <Image src={require("../img/EMI.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Wi-Fi
              <Image src={require("../img/wifi.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              BLE
              <Image src={require("../img/ble.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Thermal Image
              <Image src={require("../img/infra.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Light & Color Temperature
              <Image src={require("../img/light.svg")} size="thumb" />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex="light-2"
            >
              Motion
              <Image src={require("../img/motion.svg")} size="thumb" />
            </Box>
          </Columns>
        </Section>
        <Section pad="large" justify="center" align="center">
          <Headline margin="none">
            Notify is more than just a motion sensor.
          </Headline>
          <Paragraph>
            Depending on where you place Notify in your home, Notify can provide
            rich semantic information about its environment. When placed in a
            kitchen, Notify can provide alerts if your stove is left on. In the
            bathroom, Notify can warn you if you left the water on. In general,
            Notify can provide information to your home automation hub about
            events occurring to enable more advanced automation.
          </Paragraph>
        </Section>

        <Section
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
        <Section pad="large" justify="center" align="center">
          <Headline margin="none">About Us</Headline>
        </Section>
      </Article>
    );
  }
}

export default Homepage;
