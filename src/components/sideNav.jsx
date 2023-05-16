import { StyleSheet, View, Text, Image } from "react-native";
import Grid from './grid.jsx';

const SideNav = ({ layout, sizes, scrollable, children }) => {

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

  return (
    <Grid borderInfo={{Right: "2px"}} bgColor="#7C9885" layout={["header", "menu", "footer"]} sizes={{rows:["300px", "Auto", "100px"]}}>
      <Image style={navStyle.navImage} source="https://placehold.co/300" />
      <Text style={navStyle.navMenu}>The Navigation Menu Will Be Here</Text>
      <Text style={navStyle.navFooter}>Designed and created by myself <br/>Jose Lopez-reyes</Text>
    </Grid>
  );
};

export default SideNav;
