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
import TextInput from "grommet/components/TextInput";
import FormField from "grommet/components/FormField";

class Homepage extends Component {
  render() {
    return (
      <Article scrollStep={true}>
        {/* <Section pad='large'
    justify='center'
    align='center'> */}
        <Hero
          size="large"
          background={
            <Image
              src={require("../img/suburban_house_2.jpg")}
              fit="cover"
              full="horizontal"
            />
          }
          backgroundColorIndex="dark"
        >
          {/* <Image
              src={require("../img/nuvo_black_1.png")}
              size="small"
            /> */}
          <Box direction="row" justify="center" align="center">
            <Headline margin="none" tag="h1" strong="true">
              Introducing Notify
            </Headline>
          </Box>
          <Box direction="row" justify="center" align="center" margin="small">
            <Heading align="center" tag="h2" strong="false">
              Presence detection reimagined.
            </Heading>
          </Box>
          <Box direction="row" justify="center" align="center" margin="small">
            <Paragraph>
              Notify installs in any room in your home and provides
              accurate occupancy detection to power a richer home automation
              experience for you and your family. Start the lights when you enter the room. Turn up the air
              in your office only when you're there. And much, more.
            </Paragraph>
          </Box>
         

          <Box direction="row" justify="center" align="center">
      

            <FormField>
  <TextInput id='item1'
    name='item-1'
    value='one'
    placeholder={'Enter your email for an invite'}
    // onDOMChange={(e) => true} 
    />
    
</FormField>


          </Box>
          <Button
              label="Get Invite"
              onClick={e => true}
              href="#"
              primary={true}
              secondary={false}
            /> 
         
             <Box direction="row" justify="center" align="center" margin="small">
      
            <Heading align="center" tag="h6" strong="false">
              Purchase by invitation only. Limited invites available.
            </Heading>
          </Box>
        </Hero>

        {/* </Section> */}
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-1"
        >
          <Headline margin="none" strong="true">
            How it Works
          </Headline>
          <Paragraph>
            Using advanced artificial intelligence technology, the Nuvo Notify
            captures and analyzes changes in physical data in your environment
            to determine occupancy. Notify uses more than 12 different data
            dimensions to accurately pinpoint occupancy.{" "}
          </Paragraph>
          <Columns justify="center">
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
          <Paragraph>and many more...</Paragraph>
        </Section>
        <Section pad="large" justify="center" align="center" colorIndex="brand">
          <Headline margin="none" strong="true">
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
          <Image src={require("../img/appliance.svg")} />
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

export default Homepage;
