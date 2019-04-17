//this is the page to link the component with the reducer 
import { combineReducers } from 'redux'; // this is used to combine multiple reducers into a single object
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OfferReducer, CartReducer, ReviewReducer } from '../reducer/PageReducer';
import Offers from '../../pages/offers';
import cart from "../../pages/cart";
import reviewspage from "../../pages/reviews"
import { OfferAction } from "../actions/OfferAction";
import { CartAction } from "../actions/CartAction";
import cb from "../../components/coursebox";

let mapStateToProps = (state) => {
    return { offerMessage: state.offerData.offer.message, code: state.offerData.offer.code };
}

let mapStateToCartProps = (state) => {
    return { cart: state.cartData.items }
}

let mapStateToReviewProps = (state) => {
    return { reviews: state.reviewData.reviews }
}

let mapActionToProps = (dispatch) => {
    return bindActionCreators({ changeOffer: OfferAction, }, dispatch) //bindactioncreators is used to return actiond

}

let mapActionToCourseBoxAction = (dispatch) => {
    return bindActionCreators({ cartItem: CartAction }, dispatch)
}

export let Offer = connect(mapStateToProps, mapActionToProps)(Offers);
export let CourseBox = connect(null, mapActionToCourseBoxAction)(cb);
export let Cart = connect(mapStateToCartProps, null)(cart);
export let Reviews = connect(mapStateToReviewProps,null)(reviewspage);

export default combineReducers({
    offerData: OfferReducer,
    cartData: CartReducer,
    reviewData: ReviewReducer
});//combining the reducers here as one object which is nothing but a state
