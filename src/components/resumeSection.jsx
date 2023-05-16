import { StyleSheet, View, Text } from "react-native";
import Grid from './grid.jsx';

const ResumeSection = ({title, subTitle, children, withBorder = false}) => {

  let renderStyle = {
    sectionContainer: {
      marginLeft: "3rem",
      marginRight: "3rem",
      padding:"2rem",
    },
    sectionHeading: {
      color: "#F4F4F9",
      fontSize: "4rem"
    }
  }

  if(withBorder) {
    renderStyle.sectionContainer.borderStyle = "solid";
    renderStyle.sectionContainer.borderBottomWidth = "2px";
    renderStyle.sectionContainer.borderColor = "#FEFFBE";
  }

  if(typeof subTitle !== 'undefined') {
    renderStyle.sectionSubHeading = {
      fontSize: "2rem",
      marginBottom: "2rem",
      fontStyle: "italic",
      color: "#F4F4F9",
    }

    const sectionedStyled = StyleSheet.create(renderStyle);

   return (
      <View style={sectionedStyled.sectionContainer}>
        <Text style={sectionedStyled.sectionHeading}>{title}</Text>
        <Text style={sectionedStyled.sectionSubHeading}>{subTitle}</Text>
        {children}
      </View>
    );
  } else {
    renderStyle.sectionHeading.marginBottom = "2rem"

    const sectionedStyled = StyleSheet.create(renderStyle)

    return (
      <View style={sectionedStyled.sectionContainer}>
        <Text style={sectionedStyled.sectionHeading}>{title}</Text>
        {children}
      </View>
    );
  }
};

export default ResumeSection;
