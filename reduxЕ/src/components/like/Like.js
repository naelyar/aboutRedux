import { connect } from "react-redux";
// import { likesReducer } from "../../redux/likesReducer";
import {incrementLikes , decrementLikes} from "../../redux/action"
import { likesReducer } from "../../redux/likesReducer";


function Like(props) {
    // console.log(props);
    return (
        <div className="button-controls">
            <button onClick={props.onIcrementLikes}> ❤{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>

        </div>
    )
}

function mapStateToProps(state) {
    // console.log("mapStateToProps >", state);
    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIcrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch (decrementLikes())

        
            // console.log("click");
            // const action = { type: "INCREMENT" };
            // dispatch(action)
       


            // console.log("disclick");
            // const action = { type: "DECREMENT" };
            // dispatch(action)
        
        
    }


}

export default connect(mapStateToProps ,mapDispatchToProps)(Like);