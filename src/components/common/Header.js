//import lib
import React from 'react';
import{ Text,View } from 'react-native';


//make a Component
const Header= (pros) =>{
  const { textStyle, viewStyle }=styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{pros.headerText}</Text>
      </View>
    );
};


//css
const styles={
  viewStyle: {
    backgroundColor:'#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor:'#000',
    shadowOffset:{width: 0,height: 2},
    shadowOpacity:0.2,
    elevation: 10,//update show shadow if don't have can't sjpw
  },
  textStyle: {
    fontSize:20,
  }
}
//Make the components available to orther part off app
export {Header};
