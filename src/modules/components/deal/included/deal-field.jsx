import "./offerIncluded.css"



const Field = (props) => {
    // props.state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    // props.state.changePaketsErData()
    // props.state.changeErData()
    // props.state.changeltData()

    let defineClassName = () => {
        if (props.state.currentComplect.name === 'Предприятие' || props.state.currentComplect.name === 'Предприятие PRO') {
            return 'texSmall';

        } else if (props.state.currentComplect.name === 'Бухгалтер' || props.state.currentComplect.name === 'Бухгалтер госсектора') {
            return 'texSmall'
        } else {
            return 'texSmall';
        }
    }

    const Сonsalting = () => {
        if (props.state.currentComplect.name === 'Главный Бухгалтер' || props.state.currentComplect.name === 'Главный Бухгалтер госсектора' || props.state.currentComplect.name === 'Предприятие' || props.state.currentComplect.name === 'Предприятие PRO') {
            return `<>
                    <p key='itemOfinfoblock-6' className={className}> Правовой Консалтинг. Премиум</p>
                    <p key='itemOfinfoblock-7' className={className}> 2 Экспертных заключения в месяц</p>
                </>`

        } else {
            return null
        }
    }

    const className = defineClassName()
    const FreeBlocks = () => {


        return ` 
Дополнительная поддержка
Услуги горячей линии 
ПРАЙМ 
Большая Домашняя правовая библиотека 
Судебная практика: приложение к консультационным блокам
База знаний службы Правового консалтинга
Гарант Консалтинг: нормативные акты и судебная практика
${<Сonsalting />}`


    }

    if (props.state.currentComplect) {

        let infoblocks = (array) => {
            let result = ``



            array.forEach((elem, idx) => {
                let resultArray = ``
                let type = `${array[idx].nameOfType}
`
                elem.value.forEach((element) => {

                    if (element.checked) {
                        resultArray += `${element.name} </br>`
                    }
                })
                if (resultArray.length > 0) {
                    result += type
                    result += resultArray
                }


            })
            return `${result}`


        }

        let legalTech = (array) => {
            let resultArray = ``
            array.value.forEach((elem) => {
                if (elem.checked === true) {
                    resultArray += `${elem.name}
`
                }
            })
            let title
            if (resultArray.length > 0) {
                title = `${array.nameOfType}`
            }
            return ` ${title}
                    ${resultArray}`



        }
        props.changeCurrentField(props.state.currentComplect, props.state.infoblocks, props.state.er, props.state.lt, props.state.freeBlocks)
        return `${props.state.field.current} `
    }



}
export default Field