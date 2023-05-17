import { StyleSheet, View, Text, Image } from "react-native";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from './grid.jsx';
import NavMenu from './navMenu.jsx';

const SideNav = ({ layout, sizes, scrollable, children }) => {
  const menuToGenerate = [{
    icon: icon({name: "address-card", style: "solid"}),
    iconSize: "2xl",
    title: "About Me",
    id: "aboutMe"
  },
  {
    icon: icon({name: "list-check", style: "solid"}),
    iconSize: "2xl",
    title: "Technical Skills",
    id: "skills"
  },
  {
    icon: icon({name: "user-graduate", style: "solid"}),
    iconSize: "2xl",
    title: "My Education",
    id: "education"
  },
  {
    icon: icon({name: "laptop-code", style: "solid"}),
    iconSize: "2xl",
    title: "Work Experience",
    id: "experience"
  },
  {
    icon: icon({name: "diagram-project", style: "solid"}),
    iconSize: "2xl",
    title: "Personal Projects",
    id: "projects"
  }]

  const navStyle = StyleSheet.create({
    navImage: {
      borderRadius: "50%",
      margin: "1rem",
    },
    navMenu: {
      margin: "1rem",
      padding: "1rem",
      borderTopStyle: "solid",
      borderTopWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
      borderColor: "#FEFFBE",
      textAlign: "center",
      color: "#F4F4F9"
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
    <Grid borderInfo={{Right: "2px"}} bgColor="#7C9885" layout={["header", "menu", "footer"]} sizes={{rows:["300px", "Auto", "100px"]}}>
      <Image style={navStyle.navImage} source="https://placehold.co/300" />
      <NavMenu menuToGenerate={menuToGenerate}/>
      <Text style={navStyle.navFooter}>Designed and created by myself <br/>Jose Lopez-Reyes</Text>
    </Grid>
  );
};

export default SideNav;
