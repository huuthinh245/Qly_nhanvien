import React,{Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import{Card,CardSection,Input,Button,Spinner} from './common';
import {emailChanged,passwordChanged,loginUser} from '../actions';
class LoginForm extends Component{
  onEmailChange(text){
    this.props.emailChanged(text);
  }
  onPwdChange(text){
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {email,password}=this.props;
    this.props.loginUser({email,password});
  }
  renderButton(){
    if(this.props.loading){
      return<Spinner size="large"/>;
    }
    return(
        <Button onPress={this.onButtonPress.bind(this)}>
            LOGIN
        </Button>
    );
  }
  render(){
    return(
        <Card>
          <CardSection>
            <Input
                label="email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
                secureTextEntry={true}
                label="password"
                placeholder="password"
                onChangeText={this.onPwdChange.bind(this)}
                value={this.props.password}
            />
          </CardSection>
          <Text style={styles.errTextStyle}>{this.props.error}</Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}
const styles={
  errTextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
}
const mapStatetoProps=({auth})=>{
  const{email,password,error,loading}=auth;
  return {email,password,error,loading};
}
export default connect(mapStatetoProps,{emailChanged,passwordChanged,loginUser}) (LoginForm);
