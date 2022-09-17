import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
  const Spin = (props) => {
      const spinner = useSelector(state => state.appReducer.loading);
      console.log("spinner" , spinner);
        return (
            <div className="loader-styles">
                <Audio
                    type="TailSpin"
                    color="#008843"
                    height={100}
                    width={100}
                    visible={spinner}
                />
      
        </div>
    )
}
export default Spin;
