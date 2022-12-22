import React from "react";
import TinderCard from "react-tinder-card";
import './Swipe.css';

class Swipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cars: [
                
                {name :'TATA',url:'https://images.firstpost.com/wp-content/uploads/2021/03/tata-nexon-ev-granted-interim-relief-by-delhi-high-court-in-range-controversy-case.jpg',model:'Nexon'},
                {name :'BMW',url:'https://cdn.motor1.com/images/mgl/kkvlP/s3/this-is-essentially-a-brand-new-1991-bmw-850i-sports-car.jpg',model:'Q7'},
                {name :'Audi',url:'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/11/Audi-TT.jpg',model:'R8'}
                
            ]
        }
    }
    render(){
        
        return (
           <div className="card-container">
            {this.state.cars.map(car => (
                <TinderCard className="swipe" preventSwipe={['up','down']} key={car.name}>
                    <div className="cards" style={{backgroundImage:`url(${car.url})`}}>
                    <h2 id="card">{car.name} : Model-{car.model}</h2>
                    </div>
                   
                   
                </TinderCard>
            )

            

            )
            }
           </div>
        );
    }
}
export default Swipe;