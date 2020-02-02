import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import axios from 'axios'


export const mainListItems = (
  <div>
    <Link to='/issues' className='navLink'>
    <ListItem button onClick={dashboardColorFunction/*,getIssue*/} id="btnBack" className="dashboard">
      <ListItemIcon> 
        <DashboardIcon className="iconColor" />
      </ListItemIcon>
      <ListItemText primary="Issues" />
    </ListItem>
    </Link>
    <Link to='/users' className='navLink'>
    <ListItem button onClick={reportsColorFunction} className="reports"> 
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </Link>
    <Link to='/integration' className='navLink'>
    <ListItem button onClick={integrationsColorFunction} className="integrations">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button onClick={currentAssignmentColorFunction} className='currentAssignment'>
      <ListItemIcon>
        <AssignmentIcon id='currentAssignmentColor' />
      </ListItemIcon>
      <ListItemText primary="Current month"  />
    </ListItem>
    <ListItem button onClick={quarterAssignmentColorFunction} className='quarterAssignment'>
      <ListItemIcon>
        <AssignmentIcon id='quarterAssingmentColor' />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button onClick={yearAssignmentColorFunction} className='yearAssignment'>
      <ListItemIcon>
        <AssignmentIcon id='yearAssigmentColor' />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItem>
  </div>
);

function dashboardColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("dashboard")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function reportsColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("reports")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function integrationsColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("integrations")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function currentAssignmentColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("currentAssignment")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function quarterAssignmentColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("quarterAssignment")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function yearAssignmentColorFunction() {
    var listItem = document.getElementsByClassName("MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button");
    Array.from(listItem).forEach(element =>{
    if(element.classList.contains("yearAssignment")){
        highlightElement(element);
    } else {
        regularHighlightElement(element);
    }
  });
}

function highlightElement(element) {
    element.style.color = "#006FAE";
    element.style.backgroundColor = "#EBEBEB";
    element.style.borderRight = "5px solid #006FAE";
    element.firstChild.firstChild.style.color = "#006FAE";
}

function regularHighlightElement(element) {
    element.style.color = "#000000";
    element.style.backgroundColor = "transparent";
    element.style.borderRight = "0px";
    element.firstChild.firstChild.style.color = "rgba(0, 0, 0, 0.54)";
    element.classList.remove("true");
}

// function getIssue(){
//   console.log('Calling server')
//   // GET request for remote image
// axios({
//   method: 'get',
//   url: 'http://34.68.236.216/',
//   responseType: 'stream',
  
// },{
//   requestType: 'Issue'
// })
//   // .then(function (response) {
//   //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   // });
// }