import React,{Component} from 'React';
import {Card,CardSection,Input,Button} from './common';
import{connect} from 'react-redux';
import{employeeUpdate,employeeCreate} from '../actions';
import{Picker,Text} from 'react-native';


class EmployeeCreate extends Component{
    onButtonPress(){
        const{name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift:shift ||'Monday'});
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="name"
                        value={this.props.name}
                        onChangeText={value=>this.props.employeeUpdate({prop:'name',value})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={value=>this.props.employeeUpdate({prop:'phone',value})}
                    />
                </CardSection>
                
                <CardSection style={{flexDirection:'row'}}>
                    <Text style={styles.pickerStyle}>Shift</Text>
                    <Picker
                        mode='dropdown'
                        style={{flex:1,justifyContent:'center',}}
                        selectedValue={this.props.shift}
                        onValueChange={value=>this.props.employeeUpdate({prop:'shift',value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        CREATE
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles={
    pickerStyle:{
        fontSize:20,
        paddingLeft:20,
        fontWeight:'bold',
        alignSelf:'center',
    }
}
const mapStatetoProps=(state)=>{
    const{name,phone,shift}=state.employeeForm;
    return {name,phone,shift};
}
export default connect(mapStatetoProps,{employeeUpdate,employeeCreate})(EmployeeCreate);