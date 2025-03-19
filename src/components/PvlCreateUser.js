import axios from 'axios';
 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 export default function PvlCreateUser() {
     // Khởi tạo state
     const [Pvl_name, setPvl_name] = useState('');
     const [Pvl_email, setPvl_email] = useState('');
     const [Pvl_phone, setPvl_phone] = useState('');
     const [Pvl_active, setPvl_active] = useState(true);
 
     // api post
     const PvlCreateUser = "https://67da684535c87309f52c47da.mockapi.io/Pvl_users/Pvl_user";
 
     // submit form
     const PvlHandleSubmit = (ev) => {
         ev.preventDefault(); // Ngăn form gửi tự động
 
         let PvlNewUser = { Pvl_name, Pvl_email, Pvl_phone, Pvl_active };
 
         // Gửi dữ liệu lên API
         axios
             .post(PvlCreateUser, PvlNewUser)
             .then((Pvl_response) => {
                 console.log(Pvl_response.data);
             })
             .catch((error) => {
                 console.log("Lỗi", error);
             });
     };
 
     return (
         <div className="container mt-4">
             <form onSubmit={PvlHandleSubmit}>
                 <h2>Thêm Mới User</h2>
 
                 <div className="mb-3">
                     <label htmlFor="Pvl_name" className="form-label">Name</label>
                     <input
                         type="text"
                         name="Pvl_name"
                         id="Pvl_name"
                         placeholder="Vui lòng nhập tên của bạn"
                         className="form-control"
                         onChange={(ev) => setPvl_name(ev.target.value)}
                         value={Pvl_name}
                         required
                     />
                 </div>
 
                 <div className="mb-3">
                     <label htmlFor="Pvl_email" className="form-label">Email</label>
                     <input
                         type="email"
                         name="Pvl_email"
                         id="Pvl_email"
                         placeholder="Vui lòng nhập email của bạn"
                         className="form-control"
                         onChange={(ev) => setPvl_email(ev.target.value)}
                         value={Pvl_email}
                         required
                     />
                 </div>
 
                 <div className="mb-3">
                     <label htmlFor="Pvl_phone" className="form-label">Phone</label>
                     <input
                         type="text"
                         name="Pvl_phone"
                         id="Pvl_phone"
                         placeholder="Vui lòng nhập số điện thoại của bạn"
                         className="form-control"
                         onChange={(ev) => setPvl_phone(ev.target.value)}
                         value={Pvl_phone}
                         required
                     />
                 </div>
 
                 <div className="mb-3">
                     <label className="form-label">Active</label>
                     <div className="form-check">
                         <input
                             type="radio"
                             className="form-check-input"
                             name="Pvl_active"
                             id="Pvl_active_hd"
                             value="true"
                             checked={Pvl_active === true}
                             onChange={() => setPvl_active(true)} // Cập nhật state khi chọn "Hoạt Động"
                         
                         />
                         <label className="form-check-label" htmlFor="Pvl_active_hd">Hoạt Động</label>
                     </div>
                     <div className="form-check">
                         <input
                             type="radio"
                             className="form-check-input"
                             name="Pvl_active"
                             id="Pvl_active_kh"
                             value="false"
                             checked={Pvl_active === false}
                             onChange={() => setPvl_active(false)} // Cập nhật state khi chọn "Khóa"
                         />
                         <label className="form-check-label" htmlFor="Pvl_active_kh">Khóa</label>
                     </div>
                 </div>
 
                 <button type="submit" className="btn btn-primary">Create</button>
                 <Link to={'/list-user'} >
                 <button type="submit" className="btn btn-info">Back</button>
                 </Link>
             </form>
         </div>
     );
 }