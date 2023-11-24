import {Component} from "react";
import './styles.css';
import Moviecard from "./Moviecard";

export default class MovieList extends Component{

   
    
    render(){
        // const {title,plot,price,rating,stars,fav,isInCart, poster} =this.state.movies;
        const {movies,addStars, decStars,handleFav,handleIsInCart} = this.props;
        return(
           <div className="main">
                {movies.map((movie) => (
                <Moviecard movies = {movie}
                            key = {movie.id} 
                            addStars={addStars}
                            decStars={decStars}
                            handleFav={handleFav} 
                            handleIsInCart={handleIsInCart}

                            />

            ))}              
            </div>
            
        )
    }

}