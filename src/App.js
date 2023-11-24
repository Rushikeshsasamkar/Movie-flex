import React from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import {movies} from './moviesData';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
          
          movies:movies,
          cartCount:0

        }
        // this.addStars = this.addStars.bind(this);
    }
    
    addStars = (movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].star>=5){
        return;
      }
      movies[mid].star+=0.5;
  
      this.setState({
          movies:movies

        })
    
    }

    decStars = (movie)=>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        if(movies[mid].star<=0){
          return;
        }
        movies[mid].star-=0.5;
        this.setState({
          movies:movies
        })
    }

    handleFav =(movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].fav = !movies[mid].fav;
        this.setState({
            movies
        })
    }

       handleIsInCart =(movie)=>{
        let {movies,cartCount} =this.state;
        const mid = movies.indexOf(movie);
        movies[mid].isInCart = !movies[mid].isInCart


        if(movies[mid].isInCart){
          cartCount+=1;
        }
        else{
          cartCount-=1;
        }
        this.setState({
            movies,
            cartCount
        })
    }

render(){
  const {movies, cartCount} = this.state;
    return( 

    <div>
      <Navbar cartCount={cartCount}/>
      <MovieList movies={movies}
      addStars={this.addStars}
      decStars={this.decStars}
      handleFav={this.handleFav}
      handleIsInCart={this.handleIsInCart}
      />
      

    </div>
  )
}
}
