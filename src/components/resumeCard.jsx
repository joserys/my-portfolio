import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  console.log(cardStyle);
  return (
    <View style={cardStyle.cardContainer}>
      <Text style={cardStyle.cardHeading}>{title}</Text>
      <Text style={cardStyle.cardSubHeading}>{subTitle}</Text>
      {children}
    </View>
  );
};

export default ResumeCard;
