import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeList = ({listToGenerate}) => {

  const listStyle = StyleSheet.create({
    listContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem 1rem",
      justifyContent:"space-evenly",
      alignItems:"baseline",
      alignContent: "stretch",
      width:"100%",
      backgroundColor: "red",
      padding:"0px",
      
    },
    listItem: {
      display: "inline-flex",
      flexGrow: "1",
      alignItems:"center",
      justifyContent:"center",
      width:"auto",
      backgroundColor: "#56da50",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      border: "2px solid #a2eda9",
      borderRadius: "10px",
    },
    listIcon: {
      display: "inline-block",
      float: 'left',
      marginRight: "1rem"
    },
    listInfo: {
      display: "inline-block",
      margin: "2px"
    }
  });

  const list = listToGenerate.map(item => 
    <div style={listStyle.listItem} key={item.id}>
      <FontAwesomeIcon style={listStyle.listIcon} icon={item.icon} size={item.iconSize}/>
      <div style={listStyle.listInfo}>
        <Text style={{display: "block"}}>{item.title}</Text>
        <Text style={{display: "block"}}>{item.description}</Text>
      </div>
    </div>
  );

  return (
    <>
      {list}
    </>
  );
};

export default ResumeList;
