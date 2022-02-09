import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class EditNews extends Component
{

    state = {
        title: '',
        description: '',
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount(){
        const news_id = this.props.match.params.id;        
        const res = await axios.post(`http://127.0.0.1:8000/api/edit-news/${news_id}`);
        if(res.data.status === 200){
            this.setState({
                title: res.data.news.title,
                description: res.data.news.description,
            });
        }
    }

 



    updateNews = async (e) => {
        e.preventDefault();
        document.getElementById('updateBtn').disabled = true;
        document.getElementById('updateBtn').innerHTML = "Updating";
        const news_id = this.props.match.params.id;
        const res = await axios.post(`http://127.0.0.1:8000/api/update-news/${news_id}`, this.state); 
        if(res.data.status === 200){    
            swal({
                title: "Updated",
                text: res.data.message,
                icon: "success",
                button: "OK",
            });
            document.getElementById('updateBtn').disabled = false;
            document.getElementById('updateBtn').innerHTML = "Update News";
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row  justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit News
                                    <Link to={'/'} className="btn btn-primary btn-md float-end">Back</Link>
                                </h4>
                            </div>
                            <div>
                            <div className="card-header">
                                <form onSubmit={this.updateNews}>
                                    <div className="form-group mb-3">
                                        <label>News Title</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>News Description</label>
                                        <textarea type="text" name="description" onChange={this.handleInput} value={this.state.description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updateBtn" className="btn btn-md btn-primary">Update News</button>
                                    </div>
                                </form>
                            </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditNews;