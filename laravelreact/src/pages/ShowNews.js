import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DateTime } from "react-intl-datetime-format"
import { FaCalendarAlt } from 'react-icons/fa';

class ShowNews extends Component
{


    

    state = {
        news: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/news');        
        if(res.data.status === 200){
            this.setState({
                news: res.data.news,
                loading: false,
            });
        }        
    }

        
    render(){



         var news_HTML_TABLE = "";
         if(this.state.loading){
             news_HTML_TABLE = <tr><td colSpan="5"> <h2>Loading...</h2> </td></tr>;
         }else{
             news_HTML_TABLE =
             this.state.news.map( (item) => {
                 return(
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                        <div className="card">
                            <div className="card-header">
                                 <img className="news-image-s" src={`http://127.0.0.1:8000/${item.image}`} width='100%' alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h4 className="news-title-s text-center">{item.title.substring(0,40)}</h4>
                                <hr/>
                                <p className="news-description-s">{item.description.substring(0,100)}</p>
                            </div>
                            <div className="card-footer">
                                <FaCalendarAlt /><h4 className="news-date-s"><DateTime locale="pl-PL">{item.created_at}</DateTime></h4>
                            </div>
                        </div>
                    </div>
                 );
             });
         }






      
        return(
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>News Page
                                    <Link to={'/'} className="btn btn-warning btn-md float-end">Back</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {news_HTML_TABLE}
                </div>

            </div>
            
        );
    }
}

export default  ShowNews;