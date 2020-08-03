import React from 'react';

import Footer from '../layout/Footer/footer';
import BackgroundVideo from '../component/backgroundVideo';
import CardPhilosophy from '../component/cardPhilosophy';
import VideoYoutube from '../component/videoYoutube';
import BlogCard from '../component/BlogCard';

import './home.css'

const Home = () => {
  const section2 =[
      {
        title: "Freedom and Responsibility",
        classCard : "bg-white mt-5 d-flex",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec nulla finibus, pulvinar felis sed, pretium lacus. Quisque quis erat.",
        textButton: "Read About Our Culture >>",
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg",
        position: "float-left",
        redhr: <div className="redhr"></div>
      },
      {
        title: "Internet, Entertainment. Global Original Content",
        classCard : "bg-dark text-white mt-5 d-flex flex-row-reverse",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec nulla finibus, pulvinar felis sed, pretium lacus. Quisque quis erat.",
        textButton: "<< See What's Next",
        position: "float-right",
        src: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg",
        widthimg: "600px"
        

      },
    ];
  const section3 =[
    {
      urlVideo: "https://www.youtube.com/watch?v=zIwLWfaAg-8",
      titleVideo: "The Future we're building",
      
    },
    {
      urlVideo: "https://www.youtube.com/watch?v=QuR969uMICM",
      titleVideo: "A beginer's guide to quantum computing",
     
    },
    {
      urlVideo: "https://www.youtube.com/watch?v=TVNHd8ZODio",
      titleVideo: "What tech companies know about your kids",
      
    },
  ]
  const section4 =[
    {
      categoryBlog: "Tech Blog",
      titleBlog: "Machine Learning for a Better Developer Experience",
      authorBlog: "Sanislav Kirley",
      highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum, mauris sit amet scelerisque molestie, ex ante sollicitudin nulla, non consectetur massa est vel enim. Sed accumsan, arcu in aliquam luctus, dolor purus congue orci, ut dapibus velit dui id quam. Suspendisse ultricies fermentum sem. Sed euismod malesuada efficitur. Mauris.",
      textButton: "Read More >>",
    },
    {
      categoryBlog: "Company Blog",
      titleBlog: "Ted Sarandos appointed co-CEO of Netflix",
      authorBlog: "Channing Tatum",
      highlight: "  ",
      textButton: "Read More >>",
    },
  ]
  return (
    <>
      <main>
        <header>
             <div className="overlay" />
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://www.youtube.com/watch?v=gOqlwlQjVis.mp4" type="video/mp4" />
                </video>
            
                <div className="container h-100">
                    <div className="d-flex h-100 align-items-center text-video">
                        <div className="w-100 text-white">
                            <div className="col">
                                <h1 className="display-5">A great workplace combines exceptional colleagues and hard problems.</h1>
                                <div className="test d-flex">
                                    <form action="search.html" method="get">
                                        <input type="text" className="nav-link d-inline-block" id="search" placeholder="Search jobs by keyword" title="Search Jobs" />
                                        <div className="btn-search">
                                            <button type="submit" className="btn"><i className="fa fa-search fa-2x"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
       <BackgroundVideo/>
    </div>
    </header>
    <div className="test">
    <div className="e-card e-card-horizontal">
                    {
                    section2.map((data) => (
                        <CardPhilosophy
                        textButton={data.textButton}
                        classCard={data.classCard} 
                        title={data.title}
                        desc={data.desc}
                        position={data.position}
                        src={data.src}
                        redhr= {
                            data.redhr
                        }
                        widthimg={data.widthimg}
                        />
                    ))
                    }
    </div>
    <div className="section3 text-center mt-5 mb-5">
      <h3>Latest From ImpactByte</h3>
      <div className="container mb-5 wrapperVideo">
          {
            section3.map((data) => (
              <VideoYoutube
              urlVideo={data.urlVideo}
              titleVideo={data.titleVideo}
              />
            ))
          }
      </div>
    </div>
    </div>
    <div className="section4">
      {
        section4.map((data) =>(
          <BlogCard
          categoryBlog={data.categoryBlog}
          titleBlog={data.titleBlog}
          authorBlog={data.authorBlog}
          highlight={data.highlight}
          textButton={data.textButton}/>
        ))
      }
    </div>
   
    
    </main>
    <Footer/>
    </>
  );
}

export default Home;