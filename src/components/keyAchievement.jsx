import { StyleSheet, View, Text } from "react-native";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './../css/responsive.css'

const KeyAchievement = ({title, children}) => {
  

  return (
    <div>
      <div>
        <FontAwesomeIcon className="listIcon" icon={icon({name: 'award', style: 'solid'})} size={"xl"}/>
        <div>Key Achievement: {title}</div>
      </div>
      <div>
        {children}
      </div>  
    </div>
  );
};

export default KeyAchievement;
