// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Edit from "../edit/Edit";
// import Header from "../header/Header";
// import NavBar from "../navbar/NavBar";
// import ProfileData from "../profileData/ProfileData";
// import "./Profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   // const [name, setName] = useState("");
//   // let signupData = localStorage.getItem("name").toUpperCase();
//   let signupData =
//     localStorage.getItem("name").charAt(0).toUpperCase() +
//     localStorage.getItem("name").slice(1);
 
//   const Back = () => {
//     navigate("/home");
//   };
//   const reset = () => {
//     navigate("/ResetPassword");
//   };

//   return (
//     <>
//       <Header />
//       <NavBar />

//       <section className="h-100 user">
//         <button className="reset-back" onClick={Back}>
//           <i className="fa-solid fa-arrow-left"></i> Back{" "}
//         </button>
//         <div className="container py-5 h-80">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col">
//               <div className="card card-registration my-4">
//                 <div className="row g-0">
//                   <div className="col-xl-6 d-none d-xl-block">
//                     <img
//                       src="https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                       alt="Sample"
//                       className="img-fluid img-pwd"
//                     />
//                   </div>
//                   <div className="col-xl-6">
                  
//                     <ProfileData/>
//                     {/* <ProfileData     reset={reset}
//                         signupData={signupData}
//                         handleState={handleState}/>
//                         <Edit/> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Profile;
