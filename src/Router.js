import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import  EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
const RouterComponent=()=>{
    return(
        // sceneStyle fix loi mat Input email
        //initial dung de set mac dinh scene nao hien len truoc
        <Router sceneStyle={{paddingTop:65}}> 
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title=" LOGIN"/>
            </Scene>

            <Scene key="main">
                <Scene
                 onRight={()=>Actions.employeeCreate()}// onRight+rightTitle neu khong se ko hien 
                 rightTitle="Add"
                 key="employeeList" 
                 component={EmployeeList} 
                 title="Employee"
                 initial/>
                <Scene
                key="employeeCreate"
                component={EmployeeCreate}
                title="Employee Form"
                />
            </Scene>
        </Router>
    );
};
export default RouterComponent;
