import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './../css/responsive.css';

const ResumeCard = ({title, subTitle, children}) => {
  const cardStyle = StyleSheet.create({
    cardContainer: {
      marginBottom: "2rem",
      padding: "1rem",
      borderLeftStyle: "solid",
      borderLeftWidth: "2px",
      borderRadius: "25px",
      borderColor: "#FEFFBE"
    },
    cardHeading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#F4F4F9"
    },
    cardSubHeading: {
      fontSize: "1rem",
      fontStyle: "italic",
      fontWeight: "bold",
      color: "#F4F4F9"
    }
  });
  
  return (
    <div className="cardContainer">
      <div className="cardHeading">{title}</div>
      <div className="cardSubHeading">{subTitle}</div>
      {children}
    </div>
  );
};

export default ResumeCard;
