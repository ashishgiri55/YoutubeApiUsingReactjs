import React, { Component, Fragment } from 'react'
import HeaderComponent from "./Component/HeaderComponent/Header";
import youtubeapi,{ baseParams } from "./Api/YoutubeApi";
import VideoList from './Component/VideoComponent/VideoList';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos:[],
            loading:false,
            selectedVideo: null,
        };
    }
    componentDidMount(){
        this.FormSubmit("Play Date");
    }


   FormSubmit = async (term) => {
      let response = await youtubeapi.get("/search",{
          params:{
              q:term,
              ...baseParams,
          },
      }); 
      
      this.setState({
          videos:response.data.items,
          loading:true,
          selectedVideo:response.data.items[0],
        });
   };


onSelectedVideo = (video) => {
    this.setState({selectedVideo : video, loading:true});
};
    render() {
        return (
            <Fragment>
                <header>
                    <HeaderComponent FromAppFormSubmit={this.FormSubmit} />
                </header>
                <main className="container-fluid my-4">
                    <section id="data-list">
                        <article>
                            <div className="player_block">

                    <VideoDetails
                     video={this.state.selectedVideo}
                    loading={this.state.loading}
                    />
                    </div>
                     <div className="list-block">
                    <VideoList
                     videos={this.state.videos}
                    onSelectedVideo={this.onSelectedVideo}
                    />
                    </div>
                    </article>
                    </section>
                </main>
            </Fragment>
        );
    }
}
export default App;