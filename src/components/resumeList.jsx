import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

import './../css/responsive.css'

const ResumeList = ({listToGenerate, columnNum = 4}) => {

  const columnsToGenerate = StyleSheet.create({
    columns: {
      gridTemplateColumns: `repeat(${columnNum}, ${100/columnNum}%)`    },
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
    <div className="listContainer" style={columnsToGenerate.columns}>
      {list}
    </div>
  );
};

export default ResumeList;
