import { StyleSheet, View, Text, Image } from "react-native";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './../css/responsive.css'

import Grid from './grid.jsx';
import NavMenu from './navMenu.jsx';

const SideNav = ({ layout, sizes, scrollable, children }) => {
  const menuToGenerate = [{
    icon: icon({name: "address-card", style: "solid"}),
    iconSize: "xl",
    title: "About Me",
    id: "aboutMe"
  },
  {
    icon: icon({name: "list-check", style: "solid"}),
    iconSize: "xl",
    title: "Technical Skills",
    id: "skills"
  },
  {
    icon: icon({name: "user-graduate", style: "solid"}),
    iconSize: "xl",
    title: "My Education",
    id: "education"
  },
  {
    icon: icon({name: "laptop-code", style: "solid"}),
    iconSize: "xl",
    title: "Work Experience",
    id: "experience"
  },
  {
    icon: icon({name: "diagram-project", style: "solid"}),
    iconSize: "xl",
    title: "Personal Projects",
    id: "projects"
  }]

  const navStyle = StyleSheet.create({
    navImage: {
      borderRadius: "50%",
      margin: "1rem",
    },
    navFooter: {
      padding: "1rem",
      textAlign: "center",
      fontWeight: "bold",
      fontStyle: "italic",
      color: "#F4F4F9"
    }
  });

  // <Text style={navStyle.navMenu} menuToGenerate={}>The Navigation Menu Will Be Here</Text>

  return (
    <div className="sideNavContainer">
      <img className="navImage" src="https://placehold.co/300" alt="Jose Lopez-Reyes: Profile Picture"/>
      <NavMenu menuToGenerate={menuToGenerate}/>
      <div className="navFooter" >Designed and created by myself <br/>Jose Lopez-Reyes</div>
    </div>
  );
};

export default SideNav;
