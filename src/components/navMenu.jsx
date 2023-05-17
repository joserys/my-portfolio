import { StyleSheet, View, Text, Image } from "react-native";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenu = ({ menuToGenerate }) => {
  const menuStyle = StyleSheet.create({
    navMenu: {
      margin: "1rem",
      paddingTop: "1rem",
      borderTopStyle: "solid",
      borderTopWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
      borderColor: "#FEFFBE",
      textAlign: "center",
      color: "#F4F4F9",
    },
    navButton: {
      padding: ".5rem",
      marginBottom: "1rem",
      display: "inline-block",
      width: "calc(100% - 1rem)",
      borderLeftStyle: "solid",
      borderLeftWidth: "2px",
      borderColor: "#FEFFBE",
    },
    buttonIcon: {
      float: "left",
      display: "inline-block",
      marginRight: "1rem"
    },
    buttonLabel: {
      float: "right",
      lineHeight: "30px",
      fontWeight: "bold",
      color: "#F4F4F9"
    }
  });

  const menu = menuToGenerate.map((item) => (
    <div style={menuStyle.navButton} key={item.id}>
      <FontAwesomeIcon style={menuStyle.buttonIcon} icon={item.icon} size={item.iconSize}/>
      <Text style={menuStyle.buttonLabel}>
        {item.title}
      </Text>
    </div>
  ));

  return <nav style={menuStyle.navMenu}>{menu}</nav>;
};

export default NavMenu;
