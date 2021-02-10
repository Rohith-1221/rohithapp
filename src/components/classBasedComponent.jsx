import React from "react"

class ClassBasedComponent extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            count:6
        }
    }
//  inc=()=>{
//      return this.setState({count:this.state.count+1}
//      );

//     }
//     render(){
//         return(
//             <div>
//             <h1>this is {this.props.name} from {this.props.tour}</h1>
//             <button onClick={()=>{this.inc()}}>Inc </button>
//             <h1>count is:{this.state.count}</h1>
//             </div>
//         );
//     }
dec=()=>{
    if(this.state.count>0){
    return (
       
        this.setState({count:this.state.count-1}
        )    
    );
    }
   
       }
       render(){
           return(
               <div>
               <button onClick={()=>{this.dec()}}>Dec</button>
               <h1>count is:{this.state.count}</h1>
               </div>
           );
       }
}
export default ClassBasedComponent;