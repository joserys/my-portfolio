import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeCard = ({title, subTitle, children}) => {
  const cardStyle = StyleSheet.create({
    cardContainer: {
      marginRight: "5rem",
      marginBottom: "2rem",
      padding: "1rem",
      borderLeftStyle: "solid",
      borderLeftWidth: "5px",
      borderTopStyle: "solid",
      borderTopWidth: "5px",
      borderRadius: "5px",
      backgroundColor: "#abc56c"
    },
    cardHeading: {
      fontSize: "2rem",
      fontWeight: "bold"
    },
    cardSubHeading: {
      fontSize: "1rem",
      fontStyle: "italic",
      fontWeight: "bold"
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
