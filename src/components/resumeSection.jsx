import { StyleSheet, View, Text } from "react-native";
import Grid from './grid.jsx';

const ResumeSection = ({title, subTitle, children, withBorder = false}) => {

  let renderStyle = {
    sectionContainer: {
      margin: "1rem",
      padding: "1rem"
    },
    sectionHeading: {
      fontSize: "4rem"
    }
  }

  if(withBorder) {
    renderStyle.sectionContainer.borderStyle = "solid";
    renderStyle.sectionContainer.borderBottomWidth = "2px";
  }

  if(typeof subTitle !== 'undefined') {
    renderStyle.sectionSubHeading = {
      fontSize: "2rem",
      marginBottom: "2rem",
      fontStyle: "italic"
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
