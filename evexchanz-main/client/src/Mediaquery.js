import React,{Fragment} from "react";
import Media from "react-media";
const Mediaquery = ({small,medium,large}) => {
    return (
         <div className="">
          <Media
            queries={{
              small: "(max-width: 1199px)",
              large: "(min-width: 1199px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  {small}
                )}
                {matches.large && (
                  {large}
                )}
                {matches.medium&&{medium
                }}
              </Fragment>
            )}
          </Media>
        </div>
      );
}
 
export default Mediaquery;