import _ from 'lodash';
import React,{Component} from 'react';
import {Card,CardSection,Input,Button} from './common';
import {ListView} from 'react-native';
import {employeeFetch} from '../actions';
import {connect} from 'react-redux';
import ListItem from './ListItem';
class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeeFetch();
       
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        //nextProps are the next set of props that this component
        //will be rendered with this props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){  
         const ds=new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!==r2
        });
        this.dataSource=ds.cloneWithRows(employees);
    } 
    renderRow(employees)  {
        return(
            <ListItem employee={employees}/>
        );
    }
    render(){
        console.log(this.props);
        return(
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }   
}
const mapStatetoProps=state=>{
    const employees =_.map(state.employees,(val,uid)=>{
        return{...val,uid}
    });
    return{employees}
}
export default connect(mapStatetoProps,{employeeFetch})(EmployeeList);