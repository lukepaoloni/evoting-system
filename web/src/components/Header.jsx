import React, {Component} from 'react';
import Axios from 'axios'
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Countdown from 'react-countdown-now';
import strings from '../lang/strings';

export default class Header extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      date : "",
      exp : "",
    };

    this.toggle = this.toggle.bind(this);
    this._onSetLanguageToEnglish = this._onSetLanguageToEnglish.bind(this);
    this._onSetLanguageToGerman = this._onSetLanguageToGerman.bind(this);

    strings.setLanguage(sessionStorage.getItem("lang"));
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _handleLogout() {
    sessionStorage.removeItem("user")
  }

  async componentWillMount() {
    if (sessionStorage.getItem("user"))
    {
      const token = JSON.parse(sessionStorage.getItem("user")).token;
      console.log(token);
      let res;
      try {
        res = await Axios.get(
          `http://localhost:4000/api/rest/auth/decode`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        this.setState({exp : res.data.iat});
      } catch (error) {

      }  
    }
  }

  x = setInterval(() => {
    if(sessionStorage.getItem('user'))
    {
      // console.log(this.state.exp);
      let inOneHour = new Date().getTime() + this.state.exp;
      this.setState({date: inOneHour});
    }
  }, 1000);

_onSetLanguageToGerman() {
  sessionStorage.setItem("lang", "de");
  window.location.reload();
}

_onSetLanguageToEnglish() {
  sessionStorage.setItem("lang", "en");
  window.location.reload();
}

    render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'#f2f3f4'}} light>
        <a href="/"><i style={{fontSize:'80px', color:'#212529'}} className="fas fa-globe-europe"></i></a>
          <NavbarBrand href="/" style={{paddingLeft:'1%'}} className="mr-auto"> E-Voting</NavbarBrand>
        </Navbar>
        <Navbar style={{backgroundColor:'#dfdfdf'}} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/vote">{strings.castVote}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {strings.header_options}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this._onSetLanguageToEnglish}>
                   {strings.header_lang} (EN)
                  </DropdownItem>
                  <DropdownItem onClick={this._onSetLanguageToGerman}>
                    {strings.header_lang} (DE)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavLink disabled>{this.state.date}</NavLink> */}
              <Countdown date={new Date(this.state.date)} />,
              <NavItem>
                {
                  sessionStorage.getItem("user")?<NavLink onClick={this._handleLogout} href='/login'>Logout <b>{JSON.parse(sessionStorage.getItem('user')).username}</b></NavLink>: null
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
    }
    
}
