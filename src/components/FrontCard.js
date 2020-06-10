import React from 'react'

const FrontCard = props => {
   return (

    <div className='front-card'>
        {<img src={props.frontImg} />}
    </div>
            
    )
}
export default FrontCard





// export default class FrontCard extends React.Component {
//     render() {

//     const { frontImg } = this.props

//         return (
//             <div className='front-card'>
//                 {<img src={frontImg} />}
//             </div>
            
//         )
//     }
// }