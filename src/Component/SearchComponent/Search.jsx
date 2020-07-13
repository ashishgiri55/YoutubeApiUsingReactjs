import React, { Component, Fragment } from 'react';



class SearchComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {term: "" };
    }


handlechange = (e) => {
    this.setState({term :e.target.value});
};
handleSubmit =(e) => {
    e.preventDefault();
    this.props.FromheaderFormSubmit(this.state.term);
};


 render() {

    return (
        <Fragment>
            <div className="searchBlock">
                <section>
                    <form id = "form" onSubmit ={this.handleSubmit}>
                        <div className="ui action input searchinput">
                            <input type="text"
                            placeholder="search..."
                            value={this.state.term}
                            onChange={this.handlechange}
                            />
                            <button className="ui button">
                                <i className="search icon"></i>
                                 </button>

                            
                        </div>

                    </form>
                </section>
            </div>
        </Fragment>
    );
  }
}
export default SearchComponent;