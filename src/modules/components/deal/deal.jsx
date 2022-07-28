import React, { Component } from "react";
import getCurrentUser from "./services/get-current-user.service";
import "./deal.css"
import createDeal from "./services/create-deal";
import getDeal from "./services/get-deal";

import Button from '@material-ui/core/Button';

import { PrepaidContainer} from "./prepaid-Container";
import { TypeOfClientContainer } from "./typeOfClient-Container";
import { TypeOfContractContainer } from "./typeOfContract-Container";
import { AddDealContainer } from "./AddDeal-Container";
import { DealIncludedContainer } from "./included/deal-included-Container";
import { TableDealContainer } from "./table-price/dealPrice-Container";
import { DealPushButtonContainer } from "./push-deal-form/push-deal-button-Container";
import { DealNameContainer } from "./dealName-Container";
import ODButtonsContainer from '../buttons/od-Container'
import Circular from "./deal-loading/dealLoading";
const Deal = (props) => {
  // if(props.status){
    let dealResult =  <>
    {/* <h3>Добавление Сделки</h3> */}
   <div className="deal__container">
    
     <div className="addDeal__container">
     
     <DealNameContainer/>
     <div className="dealOd__container">
     <ODButtonsContainer/>
     </div>
   
     </div>
     <div className="dealContract__container">
     <TypeOfContractContainer/>
    
     {/* <PrepaidContainer /> */}
     
     {/* <TypeOfClientContainer/> */}
     
     </div>
     <div className="dealFields__container">
     <DealIncludedContainer/>

     </div>
     <div className="dealTable__container">
     <TableDealContainer/>
     </div>
     {/* <div className="dealPush__container">
     <DealPushButtonContainer/>
     </div> */}
     
      <div className="dealPush__container">
      <AddDealContainer />
     </div>
   </div>
   </>
   if(props.status){
    dealResult =  <div className="deal__circular__container">
<Circular/>
    </div>
   }
    return dealResult
    // (
    //   <>
    //    {/* <h3>Добавление Сделки</h3> */}
    //   <div className="deal__container">
       
    //     <div className="addDeal__container">
        
    //     <DealNameContainer/>
    //     <div className="dealOd__container">
    //     <ODButtonsContainer/>
    //     </div>
      
    //     </div>
    //     <div className="dealContract__container">
    //     <TypeOfContractContainer/>
       
    //     {/* <PrepaidContainer /> */}
        
    //     {/* <TypeOfClientContainer/> */}
        
    //     </div>
    //     <div className="dealFields__container">
    //     <DealIncludedContainer/>
  
    //     </div>
    //     <div className="dealTable__container">
    //     <TableDealContainer/>
    //     </div>
    //     {/* <div className="dealPush__container">
    //     <DealPushButtonContainer/>
    //     </div> */}
        
    //      <div className="dealPush__container">
    //      <AddDealContainer />
    //     </div>
    //   </div>
    //   </>
    // );
  // }else{
  //   <div className="deal__container--load">
       
  //   Загрузка...
  //   </div>
   
  // }
  
};

export default Deal;


// class Deal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       id: null,
//       deal: null
//     };

//     createDeal().then(id => {
//       getDeal(id)
//     }).then(deal => {
//       this.setState({
//         id: id,
//         deal: deal,
//         loading: false
//       });
//       console.log(this.state)
//     });

//     // getDeal(this.id).then(deal => {
//     //   this.setState({
//     //     deal: deal,
//     //     loading: false
//     //   });
//     //   console.log(this.state.deal)
//     // });

//   }
//   click = () => {
    
//   }

//   render() {
//     return (
//       <div className="deal__container">
//         <Button key={'deal-button'} onClick={()=>{this.click()}}> Создать</Button>
//       </div>
//     )

//     //   if (!this.state.loading) {
//     //     return (
//     //       <div className="deal__container">
//     //         <h1>
//     //           Hello {this.state.user} 
//     //         </h1>
//     //         <h2>Start editing to see some magic happen!</h2>
//     //       </div>
//     //     );
//     //   } else {
//     //     return (
//     //       <div className="deal__container">
//     //         <div>Загрузка...</div>
//     //       </div>

//     //     )
//     //   }
//     // }
//   }
// }

