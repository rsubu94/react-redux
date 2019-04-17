import Request from "superagent";

let handleReviewData = (data) => {
    return {
        type: "REVIEW_ACTION",
        reviews: data
    }
}
export let ReviewAction = () => {
    /*when doing async call the action fucntion should return as function like - return()=>{}
    when returning the value the without any async call that should return type and data object*/

    return (dispatch) => {
        return Request.get("http://162.241.222.49:8894/rest-api/reviews")
            .then(
                (res) => {
                    console.log("Got Response")
                    dispatch(handleReviewData(res.body))
                }
            )
            .catch(
                () => { dispatch(handleReviewData([])) }
            )
    }
}


