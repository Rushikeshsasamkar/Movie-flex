import React from 'react';
import './styles.css';
import styled from 'styled-components';


const Nav= styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  
  

`;

const Title = styled.div`

        font-size:30px;
        color:#fff;
        font-weight:600px;
        font-family:Montserrat, sans-serif;
        text-transform: uppercase;
        margin-left:20px;
        margin-top:7px;
        &:hover{color: black}
`;

export default class Navbar extends React.Component{
    render(){
        return(
               
               <Nav>
                <Title>Movie App</Title>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="Cart Icon" style={styles.cartIcon} />
                    <span style={{marginRight:"10px"}}>{this.props.cartCount}</span>
                </div>
               </Nav>

        )
    }    
}

const styles={
  

    cartIcon:{
        height:"30px",
        width:"30px",
        marginTop:5
      
    }

                    
                    
}