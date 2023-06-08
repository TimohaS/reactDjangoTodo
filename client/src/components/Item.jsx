import React from 'react';
import Moment from 'react-moment';


export class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
    };  
    };
    
    
    delAuthor = async (id) => {    
        try {
          const response = await fetch(
            "http://sergeytimushkin.pythonanywhere.com/Records/" + id + "/",
            {
              method: "DELETE",
              headers: {
                Authorization: "Token " + this.props.token,
                "content-type": "application/json",
              },
            }
          );
          
        } catch (err) {
          console.log(err);
        }
      
    };

    render() { 
        return (<div className='item'>
            <p className='title_record'>{this.props.item.title_record}</p>
            <div className='name'>
                <h2 className='first_name'>{this.props.item.first_name}</h2>
                <h2 className='last_name'>{this.props.item.last_name}</h2>
            </div>
            
            <p className='position'>{this.props.item.position}</p>
            
            <p className='description'>{this.props.item.description}</p>
            <div className='data_record'>
                <time className='data_created_record' dateTime={this.props.item.data_created_record}> От: <Moment  format="YYYY/MM/DD" date = {this.props.item.data_created_record} /> </time>
                <time className='due_date_record' dateTime={this.props.item.due_date_record}> До: <Moment  format="YYYY/MM/DD" date ={this.props.item.due_date_record} /></time>
            </div>         
            <div className="del_cursor" onClick = {this.delAuthor.bind(null,this.state.id)}></div>
            {/* <div className='tag'>
                <p className='title_tag'>{this.props.item.title_tag}</p>
            </div> */}
        </div>);
    }
}
 ///first_name: "Anton",
//  last_name: "Ivanov",
//  position: "Student",
//  title_tag: "купитьмороженое",
//  data_created_tag: "2022-07-12T18:14:21.745614Z",
//  is_active: true,
//  title_record: "срочно",
//  description: "надо купить мороженое, положить его в морозильник",
//  data_created_record: "2022-07-18T08:00:21.160035Z",
//  due_date_record: "2022-07-18",
export default Item;