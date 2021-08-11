import React, { Component } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'AllAboutRaccoons' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing secondary>
          <Menu.Item
            name='AllAboutRaccoons'
            active={activeItem === 'AllAboutRaccoons'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as='a'
              href='http://google.com'
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>{this.props.children}</Segment>
      </Container>
    );
  }
}
