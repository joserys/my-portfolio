import { StyleSheet, View } from "react-native";

const Grid = ({ layout, sizes, scrollable, children }) => {
  console.log(layout, sizes, scrollable, children);

  let gridStyle = {
      gridContainer: {
        display: "grid",
        maxHeight: "100vh",
        maxWidth: "100vw",
      },
    },
    gridStringFormat = "",
    columnSizingFormat = "",
    rowSizingFormat = "",
    areaNames = [],
    areaCount = 0;

  if (typeof scrollable !== "undefined") {
    gridStyle.gridContainer.overflowY = scrollable ? "scroll" : "hidden";
  }

  if (typeof layout !== "undefined") {
    for (var row = 0; row < layout.length; row++) {
      let columns = layout[row].split(" ");
      gridStringFormat += '"' + layout[row] + '"\n';

      console.log(gridStringFormat, columns);

      for (var col = 0; col < columns.length; col++) {
        if (areaNames.indexOf(columns[col]) === -1) {
          areaNames.push(columns[col]);
          areaCount++;
          gridStyle["area" + areaCount] = {
            gridArea: columns[col],
          };
          console.log(columns[col]);
        }
      }
    }

    gridStyle.gridContainer.gridTemplateAreas = gridStringFormat;
  }

  if (typeof sizes !== "undefined") {
    if (typeof sizes.cols !== "undefined") {
      for (var col = 0; col < sizes.cols.length; col++) {
        let width = sizes.cols[col];
        columnSizingFormat += width + " ";

        console.log(columnSizingFormat);
      }

      gridStyle.gridContainer.gridTemplateColumns = columnSizingFormat;
    } else {
      gridStyle.gridContainer.width = '100%';
    }

    if (typeof sizes.rows !== "undefined") {
      for (var row = 0; row < sizes.rows.length; row++) {
        let height = sizes.rows[row];
        rowSizingFormat += height + " ";

        console.log(rowSizingFormat);
      }

      gridStyle.gridContainer.gridTemplateRows = rowSizingFormat;
    } else {
      gridStyle.gridContainer.height = '100%';
    }
  }

  console.log("******", gridStyle);
  
  const finalStyle = StyleSheet.create(gridStyle);

  return <View style={finalStyle.gridContainer}>{children}</View>;
};

export default Grid;
