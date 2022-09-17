import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate ,commentsLoad } from "../../redux/action";
import uniqid from "uniqid";
import SingleComment from "../singleComment/SingleComment";

function Comments(props) {
    const [textComment, setTextComment] = useState("");
    const comments = useSelector(state => {
        // console.log("redux state >", state);
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })
console.log("comments" , comments);
    const dispatch = useDispatch()
    console.log("comments props", props);

    const handleInput = (e) => {
        // console.log("input >", e.target.value);
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit", textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment , id))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    } , [])
    // console.log("comments" , comments);
    // console.log("COMMENTS" , comments);
    
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={ handleInput} />
                <input type="submit"  hidden/>

            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={ res} />

            })}
        </div>
    )
}

export default Comments;