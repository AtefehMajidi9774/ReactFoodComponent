import React, { Component } from 'react';
import Food from "./Food";
import "../styles/foods.css";
import img1 from "../images/food.jpg"
import img2 from "../images/images.jpg"
import img3 from "../images/pizza.jpg"
import img4 from "../images/sushi.jpg"




class Foods extends Component {

    constructor() {
        super();
        this.state = {
            flag: true
        }
    }
    openProduct = () => {
        const { flag } = this.state;
        this.setState({ flag: !flag })
        // console.log(flag)
        // var arrow = document.getElementsByTagName("header")[0].ch
        // var titleProduct = document.querySelector(".title-header")
        // var container = document.querySelector(".product-container")
        // if (flag === true) {
        //     arrow.classList.add(".btn-upArrow");
        //     arrow.classList.remove(".btn-downArrow");

        // }else{
        //     container.style.display = "none";
        //     arrow.classList.add(".btn-downArrow");
        //     arrow.classList.remove(".btn-upArrow");
        // }
        // var header = document.getElementsByTagName("header")[0];
        // if (flag !== true) {
        //     header.style.backgroundColor = "rgb(85, 142, 243)";
        // } else {
        //     header.style.backgroundColor = "#CCC"
        // }
    }
    render() {
        return (
            <>
                {this.state.flag ? (

                    <div className='box-foods'>
                        <header className='up' onClick={this.openProduct}>
                            <span className='title-header'>Digital Products</span>
                            <span className='arrow btn-upArrow'><i className="fa-solid fa-angle-up"></i></span>

                        </header>

                        <div className='product-container'>
                            <Food imgFood={img1} title="Product_1" price="230" >Lorem ipsum dolor sit amet, consectetusmod e dolor pariatur. Excepteur sint occaeca</Food>
                            <Food imgFood={img2} title="Product_2" price="420" >Lorem ipsum dolor sit amet, uis aute irure dolor pariatur. Excepteur sint occaecat cupidatat non proident.</Food>
                            <Food imgFood={img3} title="Product_3" price="32" >Iusmod tempor incididunt ut labore et dolore magna aliqud exercitation ullamco laboris nisi ut a</Food>
                            <Food imgFood={img4} title="Product_4" price="75" >Lorem ipsum dolor sit amet,  Excepteur sint occaecatdeserunt mollit anim id est laborum.</Food>
                        </div>
                    </div>
                ) : (
                    <div className='box-foods'>
                        <header className='down' onClick={this.openProduct}>
                            <span className='title-Down'>Digital Products</span>
                            <span className='arrow btn-downArrow'><i className="fa-solid fa-angle-up"></i></span>

                        </header>
                    </div>
                )
                }
            </>
               /*----------------------------------- یک روش دیگر نوشتن با یه شرط ----------------------------------*/ 
        /* <div className='box-foods'>
                    <header onClick={this.openProduct}>
                        <span className='title-header'>Digital Products</span>
                        <span className='btn-upArrow'><i className="fa-solid fa-angle-up"></i></span>

                    </header>
                    {this.state.flag && (
                        <div className='product-container'>
                            <Food></Food>
                            <Food></Food>
                            <Food></Food>
                            <Food></Food>
                        </div>
                    )} </div> </> */
           

        );
    }

}
export default Foods;