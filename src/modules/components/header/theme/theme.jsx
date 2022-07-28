import './theme.css'
import '../../../../App.css'
import Moon from './img/broSunMoon/moon.svg'
import Sun from './img/broSunMoon/sun.svg'

import React from 'react'



const Theme = (props) => {
    let themeRef = React.createRef()
    let element = themeRef.current
    let img 
    if(props.classOfTheme === "round__img"){
        img = Moon
    }else if(props.classOfTheme == "round__img2"){
        img = Sun
    }

    let style = {
        backgroundImage: 'url(\'./img/broSunMoon/moon.svg\')'
    }


    return (
        <div className='container__darktheme'>
            <button ref={themeRef} onClick={() => {props.changeTheme(element)}} id="round" style={style} className={props.classOfTheme} >
            <img src={img} alt="theme"></img>
            </button>

        </div>
    )

}


export default Theme