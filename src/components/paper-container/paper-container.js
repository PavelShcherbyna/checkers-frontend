// import React, { Component } from "react";
// import "./paper-container.scss";
// import Box from "@mui/material/Box";
// // import Paper from "@mui/material/Paper";
// import cN from "classnames";
// import { connect } from "react-redux";

// class PaperContainer extends Component {
//   render() {
//     return (
//       <Box className="paper-container">
//         {/* <Paper elevation={3}> */}
//         <div className="test-paper">
//           {this.props.historyOfMoves.map(({ type, step }, itemIndex) => {
//             return (
//               <div key={itemIndex} className="paper-row">
//                 <div
//                   className={cN({
//                     "white-checker": type === "white",
//                     "black-checker": type === "black",
//                   })}
//                 ></div>
//                 <div>{step}</div>
//               </div>
//             );
//           })}
//         </div>
//         {/* </Paper> */}
//       </Box>
//     );
//   }
// }

// const mapStateToProps = ({ historyOfMoves }) => {
//   return { historyOfMoves };
// };

// export default connect(mapStateToProps)(PaperContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import cN from "classnames";

import "./paper-container.scss";

class PaperContainer extends Component {
  render() {
    return (
        <Paper elevation={3} className="paper-container">
          { this.props.historyOfMoves.map(({type, step}, itemIndex) => {
                    return( 
                    <div key={itemIndex} className='paper-row'>
                      <div className={cN({
                        'white-checker': type === 'white',
                        'black-checker': type === 'black'
                      })}></div><div>{step}</div>
                    </div>
                    )}) 
                }
        </Paper>
      
    );
  }
};

const mapStateToProps = ({ historyOfMoves }) => {
  return { historyOfMoves }
}

export default connect(mapStateToProps)(PaperContainer);
