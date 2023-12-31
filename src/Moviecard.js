import './styles.css';

export default function Moviecard(props){


        const {addStars,movies,decStars,handleFav,handleIsInCart} = props;
        const {title,plot,price,rating,star,fav,isInCart,poster} =props.movies;


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
                                    alt="decrease" onClick={()=>{decStars(movies)}}
                                     className='str-btn'/>
                                    &nbsp;
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 

                                        alt="stars" className='stars' 
                                    />

                                    &nbsp; 
                                     <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                     alt="increase"
                                     className='str-btn' onClick={()=>{addStars(movies)}}/>

                                     <span>  {star}</span>

                            </div>
                             {/* {fav?
                                <button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button>
                                :
                                <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>
                            } */}

                            <button className={fav?'unfavourite-btn': 'favourite-btn'}
                             onClick={()=>{handleFav(movies)}}>{fav?'Un-Favourite': 'Favourite'}</button>

                            <button className={isInCart?'remove-cart-btn':'cart-btn'} 
                             onClick={()=>{handleIsInCart(movies)}}>
                             {isInCart?'Remove from Cart':'Add to Cart'}</button>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

