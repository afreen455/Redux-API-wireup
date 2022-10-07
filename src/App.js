import React,{Component} from 'react';

import './App.css';



export default class App extends Component{

  componentDidMount(){

    this.props.getData();

  }

  render (){

    console.log("props value :",this.props.fetch_data);

    console.log("error values :", this.props.error_values);

    return(

      <div className='App'>

      <div style={{marginLeft:"80px"}}><h1 >Redux Wire-Up</h1>

        <h2 >{this.props.fetch_data.map(u=>

        (

          <p key={u.id}>{u.id}.{u.name},{u.email}</p>

        ))}
        </h2>

         <h2 >

         {this.props.error_values.status}

         {this.props.error_values.statusText}

        </h2>
        
        
      </div>

      </div>

    )

  }

}