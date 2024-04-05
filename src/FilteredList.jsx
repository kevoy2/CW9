import React, { Component } from 'react'; 
import List from './List'; 
import {DropdownButton, Dropdown, MenuItem} from 'react-bootstrap'; 

class FilteredList extends Component {  
    constructor(props) {  
        super(props);  
        // The state is just a list of key/value pair (like a hashmap)  
        this.state = {             
            search: "",
            check: ""
        }; 
    } 
    // Sets the state whenever the user types on the search bar     
    onSearch = (event) => { 
        this.setState({
            search: event.target.value.toLowerCase()
        });  
        console.log(event)
    } 
    filterItem = (item) => {  
        // Checks if the current search term is contained in this item 
        if (item.type.toLowerCase().search(this.state.check) !== -1 || this.state.check === "all") {
            return item.name.toLowerCase().search(this.state.search) !== -1; 
        }
    }  
     /* 
        TODO: Add an event handling method for when an item in dropdown is selected  
        Per the DropdownButton documentation, this function should take in an eventKey and event  
    */  
    onSelect= (event) => { 
        this.setState({
            check: event
        }); 
    } 
    render() {  
        return (  
            <div className="filter-list">  
                <h1>Produce Search</h1>  
                <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelect}>  
                    <Dropdown.Item eventKey="all">All</Dropdown.Item>    
                    <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>   
                    <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>                
                </DropdownButton> 
                <input type="text" placeholder="Search" onChange={this.onSearch} />  
                {/*  we are taking the items property (which is the list of  
                  produce), filtering the content to match the search word, then   
                  passing the filtered produce into the List component.            */}  
                <List items={this.props.items.filter(this.filterItem)} />  
            </div>  
        );  
    }  
}  
   
export default FilteredList; 