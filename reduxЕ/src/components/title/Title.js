import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/action";
 

function Title(props) {
    // console.log("props >", props);
    const dispatch = useDispatch();
    const text = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
        // console.log("state >" , state);
    })
    const handleChange = (e) => {
        // console.log("handle text >>", e.target.value);
        dispatch(inputText( e.target.value))
    }
    
    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={handleChange} />
                <p>{text}</p>
            </div>
          
        </div>
    )
}

export default Title;