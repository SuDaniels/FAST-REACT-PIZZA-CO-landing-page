// import React from "react";
// import '../css/index.css'

// const footer = () => {
//   return (
//     <>
//       <div className="order">
//         <h2 className="footer">
//           Our hours are from 12:00 to 22:00. Come visit us or order online
//         </h2>
//         {/* <div className="order"> */}
//           <button className="btn">Order</button>
//         {/* </div> */}
//       </div>
//     </>
//   );
// };

// export default footer;

// import React from "react";
// import "../css/index.css";

// const Footer = () => {
//   let currentTime = new Date().getHours();
//   // let currentHour = currentTime.getHours();
//   const isOpen = currentTime >= 12 && currentTime <= 22;

//   // let message;
//   // if (currentTime >= 13 && currentTime <= 22) {
//   //   message =
//   //     "Our hours are from 12:00 to 22:00. Come visit us or order online";
//   // } else {
//   //   message =
//   //     "We're currently closed. Please visit us during our operating hours.";
//   // }

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <>
//           <div className="order">
//             <h2>
//               Our hours are from 12:00 to 22:00. Come visit us or order online
//             </h2>
//             <button className="btn">Order</button>
//           </div>
//         </>
//       ) : (
//         <h2>
//           We're currently closed. Please visit us during our operating hours.
//         </h2>
//       )}
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const footer = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const isOpen = currentHour >= 13 && currentHour < 22;

  return (
    <div>
      {isOpen ? (
        <div className="btnn" id="hide">
          <h2>
            Our hours are from 12:00 to 22:00. Come visit us or order online
          </h2>
          <button className="btn">
            <div className="order"></div>Order
          </button>
        </div>
      ) : (
        <h2>
          We're currently closed. Please visit us during our operating hours.
        </h2>
      )}
    </div>
  );
};

export default footer;
