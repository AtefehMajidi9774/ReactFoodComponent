import React, { Component } from 'react';
import "../styles/food.css"

class Food extends Component {

    constructor() {
        super();
        this.state = {
            like: "fa-heart fa-solid",
            dislike: "fa-heart fa-regular",
            flag: true,
        }
    }
    clickLike = () => {
        const { flag } = this.state;
        this.setState({ flag: !flag })
        console.log(flag)

        // if(like==true){
        //     heart.classList.add("fa-solid")
        // }else{
        //     heart.classList.remove("fa-solid")
        // }
    }

    render() {
        const { imgFood, title, price, children } = this.props;
        const { flag, like, dislike } = this.state;
        return (

            <div className='food-box'>
                <img src={imgFood} alt={title} className='img-food' />
                <h2 className='title'>{title}</h2>
                <span className='price'>{price}$</span>
                <p className='desc'>{children}</p>
                <span className='like' onClick={this.clickLike}>
                    <i className={flag ? (dislike) : (like)}></i>
                </span>



                {/* {this.state.flag ? (
                        <span className='like' onClick={this.clickLike}>
                        <i className="fa-heart {this.state.flag?(fa-regular);(fa-solid)}"></i>     </span>
                    ) : (  <div className='like' onClick={this.clickLike}><i className="fa-heart fa-solid"></i>  </div>)
                    }
               */}

            </div>
        );
    }
}

export default Food;