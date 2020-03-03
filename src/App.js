import React from 'react';
import ReactDOM from 'react-dom';
import ProductData from './ProductData.json'

class App extends React.Component{
   constructor(props){
      super(props);
      this.state = {isShowStocked: false, key: ''};
      
      this.handleCheck = this.handleCheck.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
   
   handleCheck(e){
      this.setState({isShowStocked: !this.state.isShowStocked});
      //alert('value: '+ this.state.isShowStocked);
   }

   handleChange(e){
      this.setState({key: e.target.value});
   }

   render(){
      const listData = ProductData.filter((ProductData)=>((!this.state.isShowStocked|| ProductData.stocked)
                                       &&(ProductData.name.toLowerCase().includes(this.state.key.toLowerCase()))));
      console.log(listData);
      
      return (
         <div>
            <div>
               <div>
                  <input type="text" onChange = {this.handleChange}></input>
               </div>
               <input type="checkbox" defaultChecked={this.state.isShowStocked} onChange = {this.handleCheck}/>
               <label for="checkbox"> show only stocked product + {this.state.isShowStocked}</label><br></br>
            </div>
            <div>
                  <ul>
                  {
                     listData.map(
                        (dataDetail,  index)=>{
                           return <li>{dataDetail.name}</li>
                        }
                     )
                  }
                  </ul>
            </div>
         </div>
      )
   }
}
export default App