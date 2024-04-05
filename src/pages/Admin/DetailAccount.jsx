import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@material-tailwind/react";

function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

const DetailUserAccount = () => {
    const [listUser, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const accessToken = localStorage.getItem('access-token');
    const [clinics, setClinics] = useState([]);

    const { id } = useParams();
    const detail = listUser[0];
    const [detailUser, setDetailUser] = useState({});
    const [selectedRole, setSelectedRole] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState([]);
    const [action, setAction] = useState(true);

    const fileRef = useRef();

    return (
        <div className="bg-[#F3F7FA] w-full h-full p-2">
            <div className="bg-[#ffffff] w-full h-full p-1">
                <div className="button rounded-full text-center bg-[#F9FBFF] items-center justify-center w-[60px] h-[30px] p-1">
                    <Link to='/admin/manager-account'>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Link>
                </div>
                <div className="bg-[#ffffff] w-full">
                    <div className="max-w-screen-xl container mx-16 " style={{ borderRadius: "20px" }}>
                            <div className="grid grid-cols-10 lg:grid-cols-2 gap-10 bg-white p-8" style={{ borderRadius: "30px" }}>
                                <div>
                                       <h1 className="text-2xl font-medium text-black text-start ">
                                           Thông tin chi tiết
                                       </h1>
                                   </div>
                                    <div></div>
                                    {/*<div key={detailUser.id} className="text-right">*/}
                                    {/*    <select*/}
                                    {/*        value={selectedRole}*/}
                                    {/*        onChange={(e) => setSelectedRole(e.target.value)}*/}
                                    {/*        className="py-1 px-4 border-t border-gray-600 bg-white w-60 h-2/4 text-center border rounded-lg"*/}
                                    {/*    >*/}
                                    {/*        <option value={1}>Admin</option>*/}
                                    {/*        <option value={2}>Sinh Viên</option>*/}
                                    {/*        <option value={3}>Ban quản lí</option>*/}
                                    {/*    </select>*/}
                                    {/*</div>*/}
                                    <div className="grid-cols-12">
                                        <div className="col-span-10" key={detailUser.id}>
                                            <div className="grid grid-cols-11 bg-white-200 p-1 mx-8">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Email:
                                                </label>
                                                <label className="text-gray-700  text-sm font-bold  col-span-8 text-left ">
                                                    {detailUser.email} nguyenphihien1011@gmail.com
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Họ và tên:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                                    {detailUser.fullName} Nguyen Phi Hien
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Năm sinh:
                                                </label>
                                                <label className="text-gray-700  text-sm font-bold  col-span-8 text-left" >
                                                    {detailUser && detailUser.birthYear ? detailUser.birthYear : "2002"}
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Giới tính:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                                    {detailUser && detailUser.gender
                                                        ? detailUser.gender
                                                        : "Chưa chọn giới tính"}
                                                </label>

                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Số điện thoại:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                                    {detailUser.phone} 0971010073
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Mã sinh viên:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                                    {detailUser.phone}  26211139026
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Địa chỉ:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold col-span-8 text-left">
                                                    {detailUser && detailUser.streetAddress
                                                        ? `${detailUser.streetAddress} ${detailUser.ward} ${detailUser.district} ${detailUser.city}`
                                                        : "Chưa có địa chỉ"}
                                                </label>

                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                  Biển số xe:
                                                </label>
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                                    {detailUser.phone}  81A1 88888
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                                <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                                    Ngày đăng ký:
                                                </label>
                                                <label className="text-gray-700  text-sm font-bold  col-span-8 text-left ">
                                                    {detailUser.createdAt ? formatDate(detail.createdAt.split('T')[0]) : null} 10/03/2024
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="col-span-2">
                                            <div className="flex flex-col items-center">
                                                <h1 className="text-3xl font-medium text-gray-800 p-2 mb-6">
                                                    Ảnh đại điện
                                                </h1>
                                                <img
                                                    src={detailUser.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                                                    alt="avatar"
                                                    className="w-60 h-60 object-cover border-2 rounded-full"
                                                />
                                                <input type="file" ref={fileRef} hidden/>
                                            </div>
                                            <div className="flex items-end mt-8 justify-end p-10">
                                                <button className="py-2 px-5 bg-red-500 hover:bg-red-700 text-white rounded-sm">
                                                    Khóa tài khoản
                                                </button>
                                                <button className="py-2 px-5 bg-blue-500 hover:bg-blue-700 text-white rounded-sm">
                                                    Cập nhật vai trò
                                                </button>
                                                <button className="py-2 px-5 bg-green-500 hover:bg-green-700 text-white rounded-sm">
                                                    Lưu thay đổi
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
        </div>
    );
};

export default DetailUserAccount;
