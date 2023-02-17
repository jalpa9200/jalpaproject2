import React,{Component} from 'react';
import axios from 'axios';
import Display from './DisplayOrder';
import Header from '../Header';

const ourl = "https://jewelleryapi.onrender.com/orders";
const url="http://localhost:9800/updateOrder";

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            order:''
        }
    }

    render(){
        return(
            <>
                <Header/>
                {/* {console.log(this.state.order)} */}
                <Display orderData={this.state.order}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status": query[0].split('=')[1],
                    "date": query[2].split('=')[1],
                    "bank_name": query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                console.log(data)
                console.log(id)
            }
        }
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        // axios.get(`${ourl}`).then((res) => {this.setState({order:res.data})})
        axios.get(`${ourl}?email=${sessionData[1]}`).then((res) => {this.setState({order:res.data})})


    }
}
export default ViewOrder;











































// import React,{Component} from 'react';
// import axios from 'axios';
// import Display from './DisplayOrder';
// import Header from '../Header';

// const orderApi = "https://jewelleryapi.onrender.com/orders";

// class ViewOrder extends Component{

//     constructor(props){
//         super(props)

//         this.state={
//             orders:''
//         }
//     }

//     render(){
//         return(
//             <>
//                  <Header/>
//                 <Display orderData={this.state.orders}/>
//             </>
//         )
//     }

//     componentDidMount(){
//         if(this.props.location){
//             let query = this.props.location.search.split('&');
//             if(query){
//                 let data = {
//                     "status": query[0].split('=')[1],
//                     "date": query[2].split('=')[1],
//                     "bank_name": query[3].split('=')[1]
//                 }
//                 let id = query[1].split('=')[1].split('_')[1];
//                 fetch(`${orderApi}/${id}`,{
//                     method:'PATCH',
//                     headers:{
//                         'Accept':'application/json',
//                         'Content-Type':'application/json'
//                     },
//                     body: JSON.stringify(data)
//                 })
//             }
//         }

//         let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]


//         axios.get(`${orderApi}?email=${sessionData[2]}`).then((res) => {this.setState({orders:res.data})})
//     }
// }

// export default ViewOrder;