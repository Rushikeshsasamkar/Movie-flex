import {Component} from "react";
import './styles.css';

export default class Moviecard extends Component{

   

    addStars = ()=>{
         if(this.state.stars < 5){
            // first form of this.setState
            // this.setState({
               
            //     stars: this.state.stars+0.5,
            // })

            // Second form of setState (Recommeneded)
            this.setState((prevState)=>{
                return{
                    stars:prevState.stars+0.5
                }
            })
        }

            // this.state.stars+=0.5;
            // console.log("this",this.state.stars);

        
    }


    decStars = ()=>{
         if(this.state.stars > 0){
            this.setState((prevState)=>{
                return{
                    stars:prevState.stars-0.5
                }
            });
        }
    }

    handleFav =()=>{
        this.setState({
            fav: !this.state.fav
        })
    }

       handleisInCart =()=>{
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render(){

        const {title,plot,price,rating,stars,fav,isInCart,poster} =this.props.movies;


        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img src={poster} alt="Poster" />
                    </div>

                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>
                            {plot}
                        </div>
                        <div className='price'>RS.{price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                
                                    <img src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                                    alt="decrease" onClick={this.decStars}
                                     className='str-btn'/>
                                    &nbsp;
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 

                                        alt="stars" className='stars' 
                                    />

                                    &nbsp; 
                                     <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                     alt="increase"
                                     className='str-btn' onClick={this.addStars}/>

                                     <span>  {stars}</span>

                            </div>
                             {/* {fav?
                                <button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button>
                                :
                                <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>
                            } */}

                            <button className={fav?'unfavourite-btn': 'favourite-btn'}
                             onClick={this.handleFav}>{fav?'Un-Favourite': 'Favourite'}</button>

                            <button className={isInCart?'cart-btn':'remove-cart-btn'} 
                             onClick={this.handleisInCart}>
                             {isInCart?'Add to Cart':'Remove from Cart'}</button>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}