import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "../../redux/action";

function SingleComment({ data }) {
    const { text, id } = data;
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log("submit", commentText);
        dispatch(commentUpdate(commentText , id))
    }

    
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id))
    }
   
    useEffect(() => {
        if (text ) {
            setCommentText(text );
        }
    }, [text])
    
    const handleInput = (e) => {
        setCommentText(e.target.value)
    }
    // console.log("singlecomment", props);
    
    return (
       
        <form onSubmit={handleUpdate } className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={ handleInput} />
                <input type="submit"  hidden/>

            </form>
    )
}

export default SingleComment