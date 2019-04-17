
const offer = { offer: { message: "10% discount on the Webcorses", code: "WEB10" } };

export let OfferReducer = (state = offer, action) => {
    switch (action.type) {
        case "OFFER_ACTION":
            return { offer: action.data }
        default:
            return state;
    }
}

export let CartReducer = (state = { items: [] }, action) => {
    console.log(`State ${state}`)
    console.log(`Action Item ${action.item}`)
    console.log(`state Action Item ${state.items}`)

    switch (action.type) {
        case "CART_ACTION":
            state.items.push(action.item);
            return { items: [...new Set(state.items)] }
        default:
            return state;
    }
}

export let ReviewReducer = (state = { reviews: []},action) => {
    switch (action.type) {
        case "REVIEW_ACTION":
            return { reviews: action.reviews }
        default:
            return state;
    }
}