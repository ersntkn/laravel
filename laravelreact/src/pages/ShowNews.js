import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { DateTime } from "react-intl-datetime-format"
import { FaCalendarAlt } from 'react-icons/fa';
import "./style.css";

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 6,
          currentPage: 2,
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }



  receivedData() {
      axios
          .get(`http://127.0.0.1:8000/api/news`)
          .then(res => {

              const data = [res.data];

              const slice = data[0].news.slice(this.state.offset, this.state.offset + this.state.perPage);
     
              const postData = slice.map(item => 
                <React.Fragment>
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
                </React.Fragment>)

              this.setState({
                  pageCount: Math.ceil(data[0].news.length / this.state.perPage),
                 
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>News Page</h4>
                            <a class="btn btn-primary btn-md float-end" href="/">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="row">
            {this.state.postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    </div>

    )
  }
}