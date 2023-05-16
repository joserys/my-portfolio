import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const ResumeList = ({listToGenerate}) => {

  const listStyle = StyleSheet.create({
    listItem: {
      padding: ".5rem",
      marginBottom: "1rem",
      marginRight: "1rem",
      display: "inline-block",
      width: "calc(20% - 3rem)",
      borderLeftStyle: "solid",
      borderLeftWidth: "3px",
      borderBottomStyle: "solid",
      borderBottomWidth: "3px",
      borderRadius: "5px",
      borderColor: "#FEFFBE",
      backgroundColor: "#7C9885"
    },
    listIcon: {
      float: "left",
      display: "inline-block",
      marginRight: "1rem"
    },
    listInfo: {
      display: "inline-block",
      float: "left",
    }
  });

  const list = listToGenerate.map(item => 
    <div style={listStyle.listItem} key={item.id}>
      <FontAwesomeIcon style={listStyle.listIcon} icon={item.icon} size={item.iconSize}/>
      <div style={listStyle.listInfo}>
        <Text style={{display: "block", fontWeight: "bold", color: "#F4F4F9",}}>{item.title}</Text>
        <Text style={{display: "block", fontStyle: "italic",lineHeight: "1", color: "#F4F4F9",}}>{item.description}</Text>
      </div>
    </div>
  );

  return (
    <div>
      {list}
    </div>
  );
};

export default ResumeList;
