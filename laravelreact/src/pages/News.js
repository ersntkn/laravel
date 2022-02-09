import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import DataTable from 'react-data-table-component';



class News extends Component
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

    deleteNews = async (e, id) =>{
        const clickedButton = e.currentTarget;
        clickedButton.innerText = "Deleting...";
        const res = await axios.post(`http://127.0.0.1:8000/api/delete-news/${id}`);
        if(res.data.status === 200){
            swal({
                title: "Deleted",
                text: res.data.message,
                icon: "success",
                button: "OK",
            });
            document.getElementById(`row-${id}`).remove();
            
        }
    }

        
    render(){

        const columns = [
            {
                name: 'ID',
                selector: row => row.id,
                sortable: true,
            },
            {
                name: 'Image',
                selector: row => row.image,
                sortable: true,
            },
            {
                name: 'Title',
                selector: row => row.title,
                sortable: true,
            },
            {
                name: 'Edit',
                selector: row => row.edit,
                sortable: true,
            },
            {
                name: 'Delete',
                selector: row => row.delete,
                sortable: true,
            },
        ];

        var data = [];

        this.state.news.forEach(item => {     
            const newObject = {
                id     : `${item.id}`,
                image  : <img src={`http://127.0.0.1:8000/${item.image}`} width='50px' alt={item.title} />,
                title  : `${item.title.substring(0,40)}`,
                edit   : <Link to={`edit-news/${item.id}`} className="btn btn-sm btn-success"> Edit </Link>,
                delete : <button onClick={(e) => this.deleteNews(e, item.id)} className="btn btn-sm btn-danger"> Delete </button>,
            };
            data.push(newObject);
         })
      
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>News Data
                                    <Link to={'show-news'} className="btn btn-warning btn-md float-end">News Page</Link>
                                    <Link to={'add-news'} className="btn btn-primary btn-md me-4 float-end">Add News</Link>
                                </h4>
                            </div>                            
                            <div className="card-header">
                                <DataTable
                                    columns={columns}
                                    data={data}       
                                    pagination           
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default  News;