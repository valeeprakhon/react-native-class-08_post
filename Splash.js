//Splash.js
import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import { connect } from 'react-redux';
import firestore from './firebase/Firestore';
import { addCar } from './actions/car';

class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  getSuccess=(querySnapshot)=>{
    var cars = []
    querySnapshot.forEach(function(doc){
      let car = doc.data();
      car.id = doc.id;
      cars=cars.concat(car);
    });
    console.log(cars);
    this.props.add(cars)
    
    this.props.navigation.navigate('Menu');
    //this.props.navigation.reset({index:0,routes:[{name:'Menu'}]});
  }

  getUnsuccess=(error)=>{
     console.log(error);
  }
  
  componentDidMount() {
        setTimeout(() => {
          console.log("test")
             firestore.getCar(this.getSuccess,this.getUnsuccess)
        }, 2500)
    }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{color:"black", fontSize:32}}>Splash Screen</Text>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.carReducer.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (car) => dispatch(addCar(car))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);