import React, { Component, PropTypes } from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';

class Homepage extends Component {
    render() {
        return (
            <Article scrollStep={false}>
  <Section pad='large'
    justify='center'
    align='center'>
 <Heading tag='h1' strong={true}>Notify</Heading>
            <Paragraph align='center' size='large'>
              Presence detection reimagined.
            </Paragraph>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'
    colorIndex='grey-4'>
    <Headline margin='none'>
      Section 2
    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'>
    <Headline margin='none'>
      Section 3
    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'
    colorIndex='grey-4'>
    <Headline margin='none'>
      Section 4
    </Headline>
  </Section>
  <Section pad='large'
    justify='center'
    align='center'>
    <Headline margin='none'>
      Section 5
    </Headline>
  </Section>
  </Article>            
        );
    }
}

export default Homepage;