import React,{Component} from 'react';
import Data from '../data/data.json';
 class Profile extends Component{
     render(){
         var indexvalue=this.props.location.data.id;
         var specificcard=Data.profile[indexvalue]
         return(
             <div>
                 <h1>{specificcard.email}</h1>
             </div>
         )
     }
 }
 export default Profile;