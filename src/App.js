import BX24API from 'bx24-api';
import React from 'react';
import './App.css'
import MainContainer from './modules/components/main/main-Container';
const bitrixInstall = async () => {
  BX24API.install(function(){
    BX24API.callMethod('user.current', {}, function(res){
        alert('Приложение Продай Гарант приветствует вас, ' + res.data().NAME + '!');
        BX24API.installFinish();
    });
});
}
const changeDeal = async () => {
 
  console.log('start change deal');
  // const currentUserIdExtend = await BX24API.callMethod('user.current')
  // console.log(currentUserIdExtend)
  console.log('info');
  const result = await BX24API.placement.info()
  console.log(result)
  const test = await BX24API.placement.call('reloadData', function(){console.log('reload call')});
  console.log(test)
  const bind = await BX24API.callMethod("placement.bind", {
    'PLACEMENT': 'CRM_COMPANY_DETAIL_TAB',
    'TITLE' : 'test',
    'DESCRIPTION' : 'test bind',
    'HANDLER' : 'https://april-garant.bitrix24.ru/marketplace/app/98/' 
  })
  console.log(bind())
  return result
};

class App extends React.Component {

  componentDidMount() {
    // bitrixInstall()
  //   BX24API.init(function(){
  //     BX24API.installFinish();
  //  });
   BX24API.init()
    changeDeal();
  }


  render() {
    return (
      <MainContainer />
    )
  }

}


export default App
