import { StyleSheet, View, Text } from "react-native";
import Grid from './grid.jsx';

import './../css/responsive.css';

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
    },
    sectionContainer: {
      borderStyle: "none"
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
      <div className={withBorder ? "sectionContainer sectionBorder" : "sectionContainer"}>
        <div className="sectionHeading">{title}</div>
        <div className="sectionSubHeading headingMargin">{subTitle}</div>
        {children}
      </div>
    );
  } else {
    renderStyle.sectionHeading.marginBottom = "2rem"

    const sectionedStyled = StyleSheet.create(renderStyle)

    return (
      <div className={withBorder ? "sectionContainer sectionBorder" : "sectionContainer"}>
        <div className="sectionHeading headingMargin">{title}</div>
        {children}
      </div>
    );
  }
};

export default ResumeSection;
