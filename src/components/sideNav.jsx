import { StyleSheet, View, Text } from "react-native";
import Grid from './grid.jsx';

const SideNav = ({ layout, sizes, scrollable, children }) => {

  return (
    <Grid layout={["header", "menu", "footer"]} sizes={{rows:["300px", "Auto", "100px"]}}>
      <Text>The Image Will Go Here</Text>
      <Text>The Navigation Menu Will Be Here</Text>
      <Text>The Footer will be here</Text>
    </Grid>
  );
};

export default SideNav;
