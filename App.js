import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, Button } from 'react-native';

var userInputs = [];

class SelectedSquare extends React.Component{
    render(){
      return(
      <View>
        <View style={[styles.selectedLine, {transform: [{translateX: this.props.area.startX - 3}]}] }></View>
        <View style={[styles.selectedLine, {transform: [{translateX: this.props.area.endX}]}]}></View>
        <View style={[styles.selectedLine, {transform: [{translateY: this.props.area.startY - 3}]}]}></View>
        <View style={[styles.selectedLine, {transform: [{translateY: this.props.area.endY}]}]}></View>
      </View>
      );
    }
}

export default class Board extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      coordinates : area,
    };
  }

  boardClickHandler(e) {
    const { locationX, locationY } = e.nativeEvent;
    const area = areas.find(d => (locationX >= d.startX && locationX <= d.endX ) && (locationY >= d.startY && locationY <= d.endY));
    console.log(area.id);
    this.setState({coordinates : area});
  }

  //Main render method
  render() {
    return (
      <View style={styles.gameScreen}>
        <View>
          <Text>Test</Text>
        </View>
        <View style={styles.container}>
          <TouchableNativeFeedback onPress={e => this.boardClickHandler(e)}>
            <View style={styles.board}>
              <View 
                style={styles.line}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 67}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 102}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 137}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 172}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 207}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 242}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {transform : [{translateX: 277}]}
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 32}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 67}]
                  }
                ]}
              />
              <View 
                style={[styles.line, 
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 102}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 137}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 172}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 207}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 242}]
                  }
                ]}
              />
              <View 
                style={[styles.line,
                  {
                    height: 3,
                    width: 312,
                    transform : [{translateY: 277}]
                  }
                ]}
              />
              {
                <SelectedSquare area={this.state.coordinates}/>
              }
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
} 

//Area of squares
const areas = [
    //Column 1
    {startX: 3, startY: 3, endX: 35, endY: 35, id: 1, value: ""},
    {startX: 3, startY: 38, endX: 35, endY: 70, id: 2, value: ""},
    {startX: 3, startY: 73, endX: 35, endY: 105, id: 3, value: ""},
    {startX: 3, startY: 108, endX: 35, endY: 140, id: 4, value: ""},
    {startX: 3, startY: 143, endX: 35, endY: 175, id: 5, value: ""},
    {startX: 3, startY: 178, endX: 35, endY: 210, id: 6, value: ""},
    {startX: 3, startY: 213, endX: 35, endY: 245, id: 7, value: ""},
    {startX: 3, startY: 248, endX: 35, endY: 280, id: 8, value: ""},
    {startX: 3, startY: 283, endX: 35, endY: 315, id: 9, value: ""},
    //Column 2
    {startX: 38, startY: 3, endX: 70, endY: 35, id: 10, value: ""},
    {startX: 38, startY: 38, endX: 70, endY: 70, id: 11, value: ""},
    {startX: 38, startY: 73, endX: 70, endY: 105, id: 12, value: ""},
    {startX: 38, startY: 108, endX: 70, endY: 140, id: 13, value: ""},
    {startX: 38, startY: 143, endX: 70, endY: 175, id: 14, value: ""},
    {startX: 38, startY: 178, endX: 70, endY: 210, id: 15, value: ""},
    {startX: 38, startY: 213, endX: 70, endY: 245, id: 16, value: ""},
    {startX: 38, startY: 248, endX: 70, endY: 280, id: 17, value: ""},
    {startX: 38, startY: 283, endX: 70, endY: 315, id: 18, value: ""},
    //Column 3
    {startX: 73, startY: 3, endX: 105, endY: 35, id: 19, value: ""},
    {startX: 73, startY: 38, endX: 105, endY: 70, id: 20, value: ""},
    {startX: 73, startY: 73, endX: 105, endY: 105, id: 21, value: ""},
    {startX: 73, startY: 108, endX: 105, endY: 140, id: 22, value: ""},
    {startX: 73, startY: 143, endX: 105, endY: 175, id: 23, value: ""},
    {startX: 73, startY: 178, endX: 105, endY: 210, id: 24, value: ""},
    {startX: 73, startY: 213, endX: 105, endY: 245, id: 25, value: ""},
    {startX: 73, startY: 248, endX: 105, endY: 280, id: 26, value: ""},
    {startX: 73, startY: 283, endX: 105, endY: 315, id: 27, value: ""},
    //Column 4
    {startX: 108, startY: 3, endX: 140, endY: 35, id: 28, value: ""},
    {startX: 108, startY: 38, endX: 140, endY: 70, id: 29, value: ""},
    {startX: 108, startY: 73, endX: 140, endY: 105, id: 30, value: ""},
    {startX: 108, startY: 108, endX: 140, endY: 140, id: 31, value: ""},
    {startX: 108, startY: 143, endX: 140, endY: 175, id: 32, value: ""},
    {startX: 108, startY: 178, endX: 140, endY: 210, id: 33, value: ""},
    {startX: 108, startY: 213, endX: 140, endY: 245, id: 34, value: ""},
    {startX: 108, startY: 248, endX: 140, endY: 280, id: 35, value: ""},
    {startX: 108, startY: 283, endX: 140, endY: 315, id: 36, value: ""},
    //Column 5
    {startX: 143, startY: 3, endX: 175, endY: 35, id: 37, value: ""},
    {startX: 143, startY: 38, endX: 175, endY: 70, id: 38, value: ""},
    {startX: 143, startY: 73, endX: 175, endY: 105, id: 39, value: ""},
    {startX: 143, startY: 108, endX: 175, endY: 140, id: 40, value: ""},
    {startX: 143, startY: 143, endX: 175, endY: 175, id: 41, value: ""},
    {startX: 143, startY: 178, endX: 175, endY: 210, id: 42, value: ""},
    {startX: 143, startY: 213, endX: 175, endY: 245, id: 43, value: ""},
    {startX: 143, startY: 248, endX: 175, endY: 280, id: 44, value: ""},
    {startX: 143, startY: 283, endX: 175, endY: 315, id: 45, value: ""},
    //Column 6
    {startX: 178, startY: 3, endX: 210, endY: 35, id: 46, value: ""},
    {startX: 178, startY: 38, endX: 210, endY: 70, id: 47, value: ""},
    {startX: 178, startY: 73, endX: 210, endY: 105, id: 48, value: ""},
    {startX: 178, startY: 108, endX: 210, endY: 140, id: 49, value: ""},
    {startX: 178, startY: 143, endX: 210, endY: 175, id: 50, value: ""},
    {startX: 178, startY: 178, endX: 210, endY: 210, id: 51, value: ""},
    {startX: 178, startY: 213, endX: 210, endY: 245, id: 52, value: ""},
    {startX: 178, startY: 248, endX: 210, endY: 280, id: 53, value: ""},
    {startX: 178, startY: 283, endX: 210, endY: 315, id: 54, value: ""},
    //Column 7
    {startX: 213, startY: 3, endX: 245, endY: 35, id: 55, value: ""},
    {startX: 213, startY: 38, endX: 245, endY: 70, id: 56, value: ""},
    {startX: 213, startY: 73, endX: 245, endY: 105, id: 57, value: ""},
    {startX: 213, startY: 108, endX: 245, endY: 140, id: 58, value: ""},
    {startX: 213, startY: 143, endX: 245, endY: 175, id: 59, value: ""},
    {startX: 213, startY: 178, endX: 245, endY: 210, id: 60, value: ""},
    {startX: 213, startY: 213, endX: 245, endY: 245, id: 61, value: ""},
    {startX: 213, startY: 248, endX: 245, endY: 280, id: 62, value: ""},
    {startX: 213, startY: 283, endX: 245, endY: 315, id: 63, value: ""},
    //Column 8
    {startX: 248, startY: 3, endX: 280, endY: 35, id: 64, value: ""},
    {startX: 248, startY: 38, endX: 280, endY: 70, id: 65, value: ""},
    {startX: 248, startY: 73, endX: 280, endY: 105, id: 66, value: ""},
    {startX: 248, startY: 108, endX: 280, endY: 140, id: 67, value: ""},
    {startX: 248, startY: 143, endX: 280, endY: 175, id: 68, value: ""},
    {startX: 248, startY: 178, endX: 280, endY: 210, id: 69, value: ""},
    {startX: 248, startY: 213, endX: 280, endY: 245, id: 70, value: ""},
    {startX: 248, startY: 248, endX: 280, endY: 280, id: 71, value: ""},
    {startX: 248, startY: 283, endX: 280, endY: 315, id: 72, value: ""},
    //Column 9
    {startX: 283, startY: 3, endX: 315, endY: 35, id: 73, value: ""},
    {startX: 283, startY: 38, endX: 315, endY: 70, id: 74, value: ""},
    {startX: 283, startY: 73, endX: 315, endY: 105, id: 75, value: ""},
    {startX: 283, startY: 108, endX: 315, endY: 140, id: 76, value: ""},
    {startX: 283, startY: 143, endX: 315, endY: 175, id: 77, value: ""},
    {startX: 283, startY: 178, endX: 315, endY: 210, id: 78, value: ""},
    {startX: 283, startY: 213, endX: 315, endY: 245, id: 79, value: ""},
    {startX: 283, startY: 248, endX: 315, endY: 280, id: 80, value: ""},
    {startX: 283, startY: 283, endX: 315, endY: 315, id: 81, value: ""},
];

//Stylesheet
const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
  },
  container: {
    flex: 2,
    alignSelf: 'center',
    //justifyContent: 'center',
    marginTop: 20,
  },
  board: {
    borderWidth: 3,
    height: 318,
    width: 318,
    backgroundColor: 'skyblue',
  },
  line: {
    backgroundColor: 'black',
    height: 312,   //318 - (2 * 3)  : top and bottom border
    width: 3,
    position: 'absolute',
    transform: [
      {translateX: 32}
    ]
  },
  selectedLine: {
    backgroundColor: 'yellow',
    height: 38,
    width: 3,
    position: "absolute",
  }
});