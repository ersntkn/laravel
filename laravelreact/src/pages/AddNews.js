import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class AddNews extends Component
{

    state = {
        title: '',
        description: '',
        image: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleImage = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    saveNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);

        const res = await axios.post('http://127.0.0.1:8000/api/add-news', formData); 
        if(res.data.status === 200){
            swal({
                title: "Success",
                text: res.data.message,
                icon: "success",
                button: "OK",
            });
            this.setState({
                title: '',
                description: '',
            });
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add News
                                    <Link to={'/'} className="btn btn-primary btn-md float-end">Back</Link>
                                </h4>
                            </div>
                            <div>
                            <div className="card-header">
                                <form onSubmit={this.saveNews}>
                                    <div className="form-group mb-3">
                                        <label>News Title</label>
                                        <input type="text" name="title" onChange={this.handleInput} value={this.state.title} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>News Description</label>
                                        <textarea type="text" name="description" onChange={this.handleInput} value={this.state.description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Image</label>
                                        <input type="file" name="image" onChange={this.handleImage} className="form-control" />
                                    </div>

                                    <div className="form-group mb-3 text-center">
                                        <button type="submit" className="btn btn-md btn-primary">Save News</button>
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
export default AddNews;