import React, { Component, Fragment } from 'react'
import  "./header.styles.css";
import SearchComponent from '../SearchComponent/Search';

 class HeaderComponent extends Component {
     constructor(props){
     super(props);
     this.state = {};
 }
 render() {
     
     return (
         <Fragment>
            <section id="header">
                <article>
                    <div className="logoBlock">
                        <i className="bars icon"></i>
                        <img src="https://i.dlpng.com/static/png/418669_preview.png" alt="logo" />
                    </div>
                    
                    <div className="searchBlock">
                         <SearchComponent
                         FromheaderFormSubmit={
                            this.props.FromAppFormSubmit} />
                        </div>
                    
                    <div className="menuBlock">
                        <section className="video_and_menuicons">
                            <div>
                                <i className="video icon"></i>
                            </div>
                            <div>
                                <i className="th icon"></i>
                            </div>
                            <div className="ellipsis vertical icon">

                            </div>
                            <div className="loginBlock">
                                <a href="">
                                    <i className="user circle icon"></i>SignIn
                                </a>

                            </div>
                        </section>
                    </div>
                </article>
            </section>
         </Fragment>
     );
   }
}
export default HeaderComponent;