import {Component} from "react";
import './styles.css';
import Moviecard from "./Moviecard";

export default class MovieList extends Component{

     constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "Super heros saves the earth from thanos army.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            isInCart: true,


        }
        // this.addStars = this.addStars.bind(this);
    }

    
    render(){
        const {title,plot,price,rating,stars,fav,isInCart} =this.state;
        return(
            <>
                <Moviecard  movies={this.state} />     
            </>
            
        )
    }

}