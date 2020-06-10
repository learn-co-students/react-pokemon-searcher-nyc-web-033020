import React from 'react'


const BackCard = props => {
    return(

    <div className='back-card'>
        {<img src={props.backImg} />}
    </div>
    )
}
export default BackCard

// export default class BackCard extends React.Component {
//     render() {

//         const { backImg } = this.props

//         return (
//             <div className='back-card'>
//                 {<img src={backImg} />}
//             </div>
//         )
//     }
// }