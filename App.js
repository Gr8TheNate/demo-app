import React,{Component}from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableNativeFeedback, Button } from 'react-native';

//Init rendered board data
var renderedBoardData = [
  //Column 1
  {startX:3,startY:3,endX:36,endY:36,id:1,value:"0"},
  {startX:3,startY:39,endX:36,endY:72,id:2,value:"0"},
  {startX:3,startY:75,endX:36,endY:108,id:3,value:"0"},
  {startX:3,startY:111,endX:36,endY:144,id:4,value:"0"},
  {startX:3,startY:147,endX:36,endY:180,id:5,value:"0"},
  {startX:3,startY:183,endX:36,endY:216,id:6,value:"0"},
  {startX:3,startY:219,endX:36,endY:252,id:7,value:"0"},
  {startX:3,startY:255,endX:36,endY:288,id:8,value:"0"},
  {startX:3,startY:291,endX:36,endY:324,id:9,value:"0"},
  //Column 2
  {startX:39,startY:3,endX:72,endY:36,id:0,value:"0"},
  {startX:39,startY:39,endX:72,endY:72,id:0,value:"0"},
  {startX:39,startY:75,endX:72,endY:108,id:0,value:"0"},
  {startX:39,startY:111,endX:72,endY:144,id:0,value:"0"},
  {startX:39,startY:147,endX:72,endY:180,id:0,value:"0"},
  {startX:39,startY:183,endX:72,endY:216,id:0,value:"0"},
  {startX:39,startY:219,endX:72,endY:252,id:0,value:"0"},
  {startX:39,startY:255,endX:72,endY:288,id:0,value:"0"},
  {startX:39,startY:291,endX:72,endY:324,id:0,value:"0"},
  //Column 3
  {startX:75,startY:3,endX:108,endY:36,id:0,value:"0"},
  {startX:75,startY:39,endX:108,endY:72,id:0,value:"0"},
  {startX:75,startY:75,endX:108,endY:108,id:0,value:"0"},
  {startX:75,startY:111,endX:108,endY:144,id:0,value:"0"},
  {startX:75,startY:147,endX:108,endY:180,id:0,value:"0"},
  {startX:75,startY:183,endX:108,endY:216,id:0,value:"0"},
  {startX:75,startY:219,endX:108,endY:252,id:0,value:"0"},
  {startX:75,startY:255,endX:108,endY:288,id:0,value:"0"},
  {startX:75,startY:291,endX:108,endY:324,id:0,value:"0"},
  //Column 4
  {startX:111,startY:3,endX:144,endY:36,id:0,value:"0"},
  {startX:111,startY:39,endX:144,endY:72,id:0,value:"0"},
  {startX:111,startY:75,endX:144,endY:108,id:0,value:"0"},
  {startX:111,startY:111,endX:144,endY:144,id:0,value:"0"},
  {startX:111,startY:147,endX:144,endY:180,id:0,value:"0"},
  {startX:111,startY:183,endX:144,endY:216,id:0,value:"0"},
  {startX:111,startY:219,endX:144,endY:252,id:0,value:"0"},
  {startX:111,startY:255,endX:144,endY:288,id:0,value:"0"},
  {startX:111,startY:291,endX:144,endY:324,id:0,value:"0"},
  //Column 5
  {startX:147,startY:3,endX:180,endY:36,id:0,value:"0"},
  {startX:147,startY:39,endX:180,endY:72,id:0,value:"0"},
  {startX:147,startY:75,endX:180,endY:108,id:0,value:"0"},
  {startX:147,startY:111,endX:180,endY:144,id:0,value:"0"},
  {startX:147,startY:147,endX:180,endY:180,id:0,value:"0"},
  {startX:147,startY:183,endX:180,endY:216,id:0,value:"0"},
  {startX:147,startY:219,endX:180,endY:252,id:0,value:"0"},
  {startX:147,startY:255,endX:180,endY:288,id:0,value:"0"},
  {startX:147,startY:291,endX:180,endY:324,id:0,value:"0"},
  //Column 6
  {startX:183,startY:3,endX:216,endY:36,id:0,value:"0"},
  {startX:183,startY:39,endX:216,endY:72,id:0,value:"0"},
  {startX:183,startY:75,endX:216,endY:108,id:0,value:"0"},
  {startX:183,startY:111,endX:216,endY:144,id:0,value:"0"},
  {startX:183,startY:147,endX:216,endY:180,id:0,value:"0"},
  {startX:183,startY:183,endX:216,endY:216,id:0,value:"0"},
  {startX:183,startY:219,endX:216,endY:252,id:0,value:"0"},
  {startX:183,startY:255,endX:216,endY:288,id:0,value:"0"},
  {startX:183,startY:291,endX:216,endY:324,id:0,value:"0"},
  //Column 7
  {startX:219,startY:3,endX:252,endY:36,id:0,value:"0"},
  {startX:219,startY:39,endX:252,endY:72,id:0,value:"0"},
  {startX:219,startY:75,endX:252,endY:108,id:0,value:"0"},
  {startX:219,startY:111,endX:252,endY:144,id:0,value:"0"},
  {startX:219,startY:147,endX:252,endY:180,id:0,value:"0"},
  {startX:219,startY:183,endX:252,endY:216,id:0,value:"0"},
  {startX:219,startY:219,endX:252,endY:252,id:0,value:"0"},
  {startX:219,startY:255,endX:252,endY:288,id:0,value:"0"},
  {startX:219,startY:291,endX:252,endY:324,id:0,value:"0"},
  //Column 8
  {startX:255,startY:3,endX:288,endY:36,id:0,value:"0"},
  {startX:255,startY:39,endX:288,endY:72,id:0,value:"0"},
  {startX:255,startY:75,endX:288,endY:108,id:0,value:"0"},
  {startX:255,startY:111,endX:288,endY:144,id:0,value:"0"},
  {startX:255,startY:147,endX:288,endY:180,id:0,value:"0"},
  {startX:255,startY:183,endX:288,endY:216,id:0,value:"0"},
  {startX:255,startY:219,endX:288,endY:252,id:0,value:"0"},
  {startX:255,startY:255,endX:288,endY:288,id:0,value:"0"},
  {startX:255,startY:291,endX:288,endY:324,id:0,value:"0"},
  //Column 9
  {startX:291,startY:3,endX:327,endY:36,id:0,value:"0"},
  {startX:291,startY:39,endX:327,endY:72,id:0,value:"0"},
  {startX:291,startY:75,endX:327,endY:108,id:0,value:"0"},
  {startX:291,startY:111,endX:327,endY:144,id:0,value:"0"},
  {startX:291,startY:147,endX:327,endY:180,id:0,value:"0"},
  {startX:291,startY:183,endX:327,endY:216,id:0,value:"0"},
  {startX:291,startY:219,endX:327,endY:252,id:0,value:"0"},
  {startX:291,startY:255,endX:327,endY:288,id:0,value:"0"},
  {startX:291,startY:291,endX:327,endY:324,id:0,value:"0"},
];

//Highlighted Square drawn onto board
// class SelectedSquare extends React.Component{
//   render(){
//     const { startX, startY, endX, endY, id, value} = this.props;
//     return(
//       <View>
//         <View style={[styles.selectedLine, {transform: [{translateX: startX ? Math.floor(startX)-1 : 0 },{translateY: startY ? Math.floor(startY) : 0 }]}] }/>
//         <View style={[styles.selectedLine, {transform: [{translateX: endX ? (Math.floor(endX)-1) : 36 },{translateY: startY ? Math.floor(startY) : 0 }]}]}/>
//         <View style={[styles.selectedLine, {height: 3, width: 39, transform: [{translateY: startY ? Math.floor(startY) : 0 },{translateX: startX ? Math.floor(startX) - 1 : 0 }]}]}/>
//         <View style={[styles.selectedLine, {height: 3, width: 39, transform: [{translateY: endY ? Math.floor(endY) : 36 },{translateX: startX ? Math.floor(startX) - 1 : 0 }]}]}/>
//       </View>
//     );
//   }
// }

//Square that receives value from the puzzle or player
class Square extends React.Component {
  render(){
    const { startX, startY, id, value, select} = this.props;
    return(
      <View style={[styles.square,{
        borderWidth: (select ? 3 : 0),
        borderColor: "yellow", 
        transform: [{translateX: startX}, {translateY: startY}]
      }]}>
        <Text style={{textAlign: "center"}}> {value} </Text>
      </View>
    );
  }
}

//BIG TODO
//Nate: I'm just trying to figure out if this is the right way to implement
// the states for the button press in conjunction with the board atm 
class InputButton extends React.Component{

  constructor(){
    super();
    this.state = {
      select: false,
      userInput: null,
      area : null,
    };
  }
    
    assignPressValue(value){
      // this.setState(this.state);
    let propArea = this.props.area;  
    let startX = this.props.area.startX;
    let startY = this.props.area.startY;
    let endX = this.props.area.endX;
    let endY = this.props.area.endY;
    let id = this.props.area.id;
    let val = this.props.area.value;

    renderedInputData = {startX:startX,startY:startY,endX:endX,endY:endY,id:id,value:this.props.value};

      this.setState({
        select: true,
        userInput : value,
        area : this.props.area,
      });
     
      // let match = renderedInputData.find(d => (d.id == val))

      // console.log(match.id);
     

      // renderedInputData.map(obj => match.find(o => o.id === obj.id) || obj)

      //console.log(renderedInputData, "userinputSelectedArea");
      //return this.state.select;
    }

    render(){
      let value = (this.props.value).toString();
      return (
        <View>
          <Button style={styles.inputButtonStyle}
            onPress={() => { this.assignPressValue(value)}}
            title={value}
          />
        </View>
      );
    }
}

const inputButtons = [
  [1, 2, 3, 4, 5,],
  [6, 7, 8, 9, 'X'],
];

var sudokuPuzzle = Array(81).fill(Math.floor(Math.random() * (9 - 1 + 1) + 1));


//Main Board 
export default class Board extends React.Component { 

  constructor(){
    super();
    this.state = {
      puzzle: renderBoardData(), //sudoku Puzzle array
      select: false,        //If true, input button sends selected input to selected square
      userInputs: [],       //unsolved sudoku Puzzle array with empty spots for user entry 
      area: {startX: 0,startY: 0, endX: 0, endY:0 ,id:0 ,value: 0},           //selected area on board
    };

    //TODO!!!
    function renderBoardData(){
      let newPuzzle = [];
      let x1, y1, value; 
  
      for(let i = 0; i < renderedBoardData.length; i++){
        x1 = renderedBoardData[i].startX;
        y1 = renderedBoardData[i].startY;
        value = sudokuPuzzle[i];
        newPuzzle.push(
          <Square key={i} startX={x1} startY={y1} value={value} />
        );
      } 
      return newPuzzle;
    }
  }

  //TODO
  //Handles board presses and grabs input from inputbuttons if triggered
  boardClickHandler(e) {
    const { locationX, locationY } = e.nativeEvent;
    const area = areas.find(d => (locationX >= d.startX && locationX <= d.endX ) && (locationY >= d.startY && locationY <= d.endY));
    //console.log(area.id);
    var puzzle = this.state.puzzle;

    this.setState({
      select: true,
      area: area,
    });

    // for(let i = 0; i < puzzle.length; i++){
    //   if((puzzle[i].startX >= area.startX && puzzle[i].endX <= area.endX) && (puzzle[i].startY >= area.startY && puzzle[i].endY >= area.endY)){
    //     puzzle[i].select = this.state.select;
    //   }
    // }

  }

  // renderBoardData(){
  //   let newPuzzle = [];
  //   let x1, y1, value; 

  //   for(let i = 0; i < renderedBoardData.length; i++){
  //     x1 = renderedBoardData[i].startX;
  //     y1 = renderedBoardData[i].startY;
  //     value = sudokuPuzzle[i];
  //     newPuzzle.push(
  //       <Square key={i} startX={x1} startY={y1} value={value} />
  //     );
  //   }  
    
  //   // this.setState({
  //   //   puzzle: newPuzzle,
  //   // });

  //   return newPuzzle;
  // }

  // selectSquare(i){
  //   return(
  //     <SelectedSquare
  //       key={i.id}
  //       startX={i.startX}
  //       startY={i.startY}
  //       endX={i.endX}
  //       endY={i.endY}
  //     />
  //   );
  // }


  renderInputButtons(){
    let views = [];
    
    for (var r = 0; r < inputButtons.length; r ++) {
      let row = inputButtons[r];
    
      let inputRow = [];
      for (var i = 0; i < row.length; i ++) {
        let input = row[i];

        inputRow.push(
          <InputButton value={input} area = {this.state.area} userInputs = {this.state.userInputs} key={r + "-" + i} />
        );
      }    
      views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }

  //Main render method
  render() {
    return (
      <View style={styles.gameScreen}>
          <Image style={styles.background} source={require('./assets/background1.png')}>
        <View>
          <Text>Test</Text>
        </View>
        <View style={styles.timer}>
           <BlinkingClass/>
        </View>
        <View style={styles.container}>
          <TouchableNativeFeedback onPress={e => this.boardClickHandler(e)}>
            <View key={"board"} style={styles.board}>
              <View key={"grid"}>
                <View 
                  key={"left border"}
                  style={[styles.line,
                    {
                      width:0,
                      height: 327,
                      transform: [{translateX: 0}, {translateY: 0}]
                    }
                  ]}
                />
                <View 
                  key={"vert 1"}
                  style={styles.line}
                />
                <View 
                  key={"vert 2"}
                  style={[styles.line,
                    {transform : [{translateX: 73},{translateY: 3}]}
                  ]}
                />
                <View 
                  key={"vert 3 bold"}
                  style={[styles.line,
                    {
                      width: 3,
                      transform : [{translateX: 108},{translateY: 3}]
                    }
                  ]}
                />
                <View 
                  key={"vert 4"}
                  style={[styles.line,
                    {transform : [{translateX: 145},{translateY: 3}]}
                  ]}
                />
                <View 
                  key={"vert 5"}
                  style={[styles.line,
                    {transform : [{translateX: 181},{translateY: 3}]}
                  ]}
                />
                <View 
                  key={"vert 6 bold"}
                  style={[styles.line,
                    {
                      width: 3,
                      transform : [{translateX: 216},{translateY: 3}]
                    }
                  ]}
                />
                <View 
                  key={"vert 7"}
                  style={[styles.line,
                    {transform : [{translateX: 253},{translateY: 3}]}
                  ]}
                />
                <View 
                  key={"vert 8"}
                  style={[styles.line,
                    {transform : [{translateX: 289},{translateY: 3}]}
                  ]}
                />
                <View 
                  key={"right border"}
                  style={[styles.line,
                    {
                      width: 0,
                      height: 327,
                      transform: [{translateX: 324}, {translateY: 0}]
                    }
                  ]}
                />
                <View 
                  key={"top border"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 0,
                      width: 327,
                      transform: [{translateX: 0}, {translateY: 0}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 1"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      // transform : [{translateY: 36},{translateX: 3}]
                      transform : [{translateY: 37},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 2"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      //transform : [{translateY: 72},{translateX: 3}]
                      transform : [{translateY: 73},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 3 bold"}
                  style={[styles.line, 
                    {
                      height: 3,
                      width: 321,
                      transform : [{translateY: 108},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                key={"horizon 4"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      //transform : [{translateY: 144},{translateX: 3}]
                      transform : [{translateY: 145},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 5"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      //transform : [{translateY: 180},{translateX: 3}]
                      transform : [{translateY: 181},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 6 bold"}
                  style={[styles.line,
                    {
                      height: 3,
                      width: 321,
                      //transform : [{translateY: 216},{translateX: 3}]
                      transform : [{translateY: 217},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 7"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      //transform : [{translateY: 252},{translateX: 3}]
                      transform : [{translateY: 253},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"horizon 8"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 1,
                      width: 321,
                      //transform : [{translateY: 288},{translateX: 3}]
                      transform : [{translateY: 289},{translateX: 3}]
                    }
                  ]}
                />
                <View 
                  key={"bottom border"}
                  style={[styles.line,
                    {
                      //height: 3,
                      height: 0,
                      width: 327,
                      transform: [{translateX: 0}, {translateY: 324}]
                    }
                  ]}
                />
              </View>
              {
                //TODO!!!!!
                //this.renderBoardData()
                this.state.puzzle.map((x,i) => {
                  if(i<81)
                    return this.state.puzzle[i];
                })
              }
              {
              /*<View style={styles.board}> 
              {
                this.selectSquare(this.state.area)
              }  
              </View>
              */} 
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.userInputContainer}>
          { 
            this.renderInputButtons(this.state.area)
          }
        </View>
        </Image>
      </View>
    );
  }
} 

class BlinkingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      seconds:0,
      minutes:0,
  };

  // Change the state every second or the time given by User.
  setInterval(() => {
    this.setState({
        seconds: (this.state.seconds < 59 ? this.state.seconds + 1 : 0),
        minutes: (this.state.seconds == 59 ? this.state.minutes + 1 : this.state.minutes),
      });
    }, 
    // Define any blinking time.
    1000);
  }

  render() { 
    let displaySec = this.state.seconds;
    let displayMin = this.state.minutes;

    function displaySeconds(){
      if(displayMin < 10 && displaySec < 10){
        return "0" + displayMin + ":0" + displaySec;
      } 
      else if(displayMin < 10 && displaySec >= 10){
          return "0" + displayMin + ":" + displaySec;
      }
      else if(displayMin >= 10 && displaySec < 10){
        return displayMin + ":0" + displaySec;
      } 
      else {
        return displayMin + ":" + displaySec;
      }
    }

    return (
      <Text style = {{ textAlign: 'center', marginTop : 10,color:'white',fontSize:32 }}>{displaySeconds()}</Text>
    );
  }
}

//Area of squares
const areas = [
    //Column 1
    {startX: 0, startY: 0, endX: 36.3, endY: 36.3, id: 1, value: ""},
    {startX: 0, startY: 36.3, endX: 36.3, endY: 72.6, id: 2, value: ""},
    {startX: 0, startY: 72.6, endX: 36.3, endY: 109, id: 3, value: ""},
    {startX: 0, startY: 109, endX: 36.3, endY: 145.3, id: 4, value: ""},
    {startX: 0, startY: 145.3, endX: 36.3, endY: 181.6, id: 5, value: ""},
    {startX: 0, startY: 181.6, endX: 36.3, endY: 218, id: 6, value: ""},
    {startX: 0, startY: 218, endX: 36.3, endY: 254.3, id: 7, value: ""},
    {startX: 0, startY: 254.3, endX: 36.3, endY: 290.6, id: 8, value: ""},
    {startX: 0, startY: 290.6, endX: 36.3, endY: 327, id: 9, value: ""},
    //Column 2
    {startX: 36.3, startY: 0, endX: 72.6, endY: 36.3, id: 10, value: ""},
    {startX: 36.3, startY: 36.3, endX: 72.6, endY: 72.6, id: 11, value: ""},
    {startX: 36.3, startY: 72.6, endX: 72.6, endY: 109, id: 12, value: ""},
    {startX: 36.3, startY: 109, endX: 72.6, endY: 145.3, id: 13, value: ""},
    {startX: 36.3, startY: 145.3, endX: 72.6, endY: 181.6, id: 14, value: ""},
    {startX: 36.3, startY: 181.6, endX: 72.6, endY: 218, id: 15, value: ""},
    {startX: 36.3, startY: 218, endX: 72.6, endY: 254.3, id: 16, value: ""},
    {startX: 36.3, startY: 254.3, endX: 72.6, endY: 290.6, id: 17, value: ""},
    {startX: 36.3, startY: 290.6, endX: 72.6, endY: 327, id: 18, value: ""},
    //Column 3
    {startX: 72.6, startY: 0, endX: 109, endY: 36.3, id: 19, value: ""},
    {startX: 72.6, startY: 36.3, endX: 109, endY: 72.6, id: 20, value: ""},
    {startX: 72.6, startY: 72.6, endX: 109, endY: 109, id: 21, value: ""},
    {startX: 72.6, startY: 109, endX: 109, endY: 145.3, id: 22, value: ""},
    {startX: 72.6, startY: 145.3, endX: 109, endY: 181.6, id: 23, value: ""},
    {startX: 72.6, startY: 181.6, endX: 109, endY: 218, id: 24, value: ""},
    {startX: 72.6, startY: 218, endX: 109, endY: 254.3, id: 25, value: ""},
    {startX: 72.6, startY: 254.3, endX: 109, endY: 290.6, id: 26, value: ""},
    {startX: 72.6, startY: 290.6, endX: 109, endY: 327, id: 27, value: ""},
    //Column 4
    {startX: 109, startY: 0, endX: 145.3, endY: 36.3, id: 28, value: ""},
    {startX: 109, startY: 36.3, endX: 145.3, endY: 72.6, id: 29, value: ""},
    {startX: 109, startY: 72.6, endX: 145.3, endY: 109, id: 30, value: ""},
    {startX: 109, startY: 109, endX: 145.3, endY: 145.3, id: 31, value: ""},
    {startX: 109, startY: 145.3, endX: 145.3, endY: 181.6, id: 32, value: ""},
    {startX: 109, startY: 181.6, endX: 145.3, endY: 218, id: 33, value: ""},
    {startX: 109, startY: 218, endX: 145.3, endY: 254.3, id: 34, value: ""},
    {startX: 109, startY: 254.3, endX: 145.3, endY: 290.6, id: 35, value: ""},
    {startX: 109, startY: 290.6, endX: 145.3, endY: 327, id: 36, value: ""},
    //Column 5
    {startX: 145.3, startY: 0, endX: 181.6, endY: 36.3, id: 37, value: ""},
    {startX: 145.3, startY: 36.3, endX: 181.6, endY: 72.6, id: 38, value: ""},
    {startX: 145.3, startY: 72.6, endX: 181.6, endY: 109, id: 39, value: ""},
    {startX: 145.3, startY: 109, endX: 181.6, endY: 145.3, id: 40, value: ""},
    {startX: 145.3, startY: 145.3, endX: 181.6, endY: 181.6, id: 41, value: ""},
    {startX: 145.3, startY: 181.6, endX: 181.6, endY: 218, id: 42, value: ""},
    {startX: 145.3, startY: 218, endX: 181.6, endY: 254.3, id: 43, value: ""},
    {startX: 145.3, startY: 254.3, endX: 181.6, endY: 290.6, id: 44, value: ""},
    {startX: 145.3, startY: 290.6, endX: 181.6, endY: 327, id: 45, value: ""},
    //Column 6
    {startX: 181.6, startY: 0, endX: 218, endY: 36.3, id: 46, value: ""},
    {startX: 181.6, startY: 36.3, endX: 218, endY: 72.6, id: 47, value: ""},
    {startX: 181.6, startY: 72.66, endX: 218, endY: 109, id: 48, value: ""},
    {startX: 181.6, startY: 109, endX: 218, endY: 145.3, id: 49, value: ""},
    {startX: 181.6, startY: 145.3, endX: 218, endY: 181.6, id: 50, value: ""},
    {startX: 181.6, startY: 181.6, endX: 218, endY: 218, id: 51, value: ""},
    {startX: 181.6, startY: 218, endX: 218, endY: 254.3, id: 52, value: ""},
    {startX: 181.6, startY: 254.3, endX: 218, endY: 290.6, id: 53, value: ""},
    {startX: 181.6, startY: 290.6, endX: 218, endY: 327, id: 54, value: ""},
    //Column 7
    {startX: 218, startY: 0, endX: 254.3, endY: 36.3, id: 55, value: ""},
    {startX: 218, startY: 36.3, endX: 254.3, endY: 72.6, id: 56, value: ""},
    {startX: 218, startY: 72.6, endX: 254.3, endY: 109, id: 57, value: ""},
    {startX: 218, startY: 109, endX: 254.3, endY: 145.3, id: 58, value: ""},
    {startX: 218, startY: 145.3, endX: 254.3, endY: 181.6, id: 59, value: ""},
    {startX: 218, startY: 181.6, endX: 254.3, endY: 218, id: 60, value: ""},
    {startX: 218, startY: 218, endX: 254.3, endY: 254.3, id: 61, value: ""},
    {startX: 218, startY: 254.3, endX: 254.3, endY: 290.6, id: 62, value: ""},
    {startX: 218, startY: 290.6, endX: 254.3, endY: 327, id: 63, value: ""},
    //Column 8
    {startX: 254.3, startY: 0, endX: 290.6, endY: 36.3, id: 64, value: ""},
    {startX: 254.3, startY: 36.3, endX: 290.6, endY: 72.6, id: 65, value: ""},
    {startX: 254.3, startY: 72.6, endX: 290.6, endY: 109, id: 66, value: ""},
    {startX: 254.3, startY: 109, endX: 290.6, endY: 145.3, id: 67, value: ""},
    {startX: 254.3, startY: 145.3, endX: 290.6, endY: 181.6, id: 68, value: ""},
    {startX: 254.3, startY: 181.6, endX: 290.6, endY: 218, id: 69, value: ""},
    {startX: 254.3, startY: 218, endX: 290.6, endY: 254.3, id: 70, value: ""},
    {startX: 254.3, startY: 254.3, endX: 290.6, endY: 290.6, id: 71, value: ""},
    {startX: 254.3, startY: 290.6, endX: 290.6, endY: 327, id: 72, value: ""},
    //Column 9
    {startX: 290.6, startY: 0, endX: 327, endY: 36.3, id: 73, value: ""},
    {startX: 290.6, startY: 36.3, endX: 327, endY: 72.6, id: 74, value: ""},
    {startX: 290.6, startY: 72.6, endX: 327, endY: 109, id: 75, value: ""},
    {startX: 290.6, startY: 109, endX: 327, endY: 145.3, id: 76, value: ""},
    {startX: 290.6, startY: 145.3, endX: 327, endY: 181.6, id: 77, value: ""},
    {startX: 290.6, startY: 181.6, endX: 327, endY: 218, id: 78, value: ""},
    {startX: 290.6, startY: 218, endX: 327, endY: 254.3, id: 79, value: ""},
    {startX: 290.6, startY: 254.3, endX: 327, endY: 290.6, id: 80, value: ""},
    {startX: 290.6, startY: 290.6, endX: 327, endY: 327, id: 81, value: ""},
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
 
  //Board/Grid CSS 
  board: {
    height: 327,
    width: 327,
  },
  line: {
    backgroundColor: 'black',
    height: 321,   
    width: 1,
    position: 'absolute',
    transform: [
      {translateX: 37},
      {translateY: 3}
    ]
  },
  selectedLine: {
    backgroundColor: 'yellow',
    height: 39,
    width: 3,
    position: "absolute",
  },
  square: {
    height:33,
    width: 33,
    backgroundColor: 'green',
    opacity: .4,
    position: "absolute",
    justifyContent: "center",
    borderRadius: 5,

  },


  //CSS for input buttons, Can be changed
  inputButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D',
    width:"20px",
    height:"20px",
    backgroundColor: "green",
    // position: "absolute",
    // left:"100px",
    // top:"100px",
  },

  inputRow: {
    flex: 3,
    flexDirection: 'column'
  },
  formatData:{ 
    position: 'absolute',
    transform: [
      {translateX: 36},
      {translateY: 3}
    ],
    opacity:1,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  background:{
    flex:1,
    width: '100%',
    height:'100%',
  },

  timer:{
    backgroundColor:'black',
    height:50,
  },
  textUp:{
    flexDirection: 'column',
    color:'white',
  },
  userInputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   backgroundColor: 'green',
   opacity: .7,
  },
});