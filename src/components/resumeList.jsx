import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

import './../css/responsive.css'

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
    <div className="listItem" key={item.id}>
      <FontAwesomeIcon className="listIcon" icon={item.icon} size={item.iconSize}/>
      <div className="listInfo">
        <div className="listTitle">{item.title}</div>
        <div className="listDescription">{item.description}</div>
      </div>
    </div>
  );

  return (
    <div className="listContainer">
      {list}
    </div>
  );
};

export default ResumeList;
