import {Component} from "react";
import './styles.css'

export default class Moviecard extends Component{

    render(){
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Poster" />
                    </div>

                    <div className='right'>
                        <div className='title'>The Avengers</div>
                        <div className='plot'>
                            Super heros saves the earth from thanos army.
                        </div>
                        <div className='price'>Rs.199</div>

                        <div className='footer'>
                            <div className='rating'>8.9</div>
                            <div className='star-dis'>
                                
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                        alt="stars" className='stars' 
                                    />
                            </div>
                            <button className='favourite-button'>Favourite</button>
                            <button className='cart-btn'>Add to cart</button>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}