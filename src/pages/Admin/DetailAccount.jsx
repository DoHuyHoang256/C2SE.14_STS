import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const DetailUserAccount = () => {
    const [detailUser, setDetailUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    const { userId } = useParams();

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/users/${userId}`);
                setDetailUser(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
    
        fetchUserDetail();
    }, [userId]);
    
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/roles');
                setRoles(response.data);
    
                // Tìm vai trò tương ứng với role_id của người dùng và gán cho selectedRole
                const userRole = roles.find(role => role.role_id === detailUser.role);
                if (userRole) {
                    setSelectedRole(userRole.role_name);
                }
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
    
        fetchRoles();
    }, [detailUser.role, roles]);
    

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    if (loading) {
        return <Spinner color="blue" />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                            <div className="grid-cols-12">
                                <div className="col-span-10" key={detailUser.id}>
                                    <div className="grid grid-cols-11 bg-white-200 p-1 mx-8">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Email:
                                        </label>
                                        <label className="text-gray-700  text-sm font-bold  col-span-8 text-left ">
                                            {detailUser.email}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Họ và tên:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                            {detailUser.full_name}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Ngày sinh:
                                        </label>
                                        <label className="text-gray-700  text-sm font-bold  col-span-8 text-left">
                                            {detailUser && detailUser.date_of_birth ? formatDate(detailUser.date_of_birth) : "2002"}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Giới tính:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                            {detailUser && detailUser.gender ? detailUser.gender : "Chưa chọn giới tính"}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Phone:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                            {detailUser.phone_number}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Code:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-8">
                                            {detailUser.user_code}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Địa chỉ:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold col-span-8 text-left">
                                            {detailUser && detailUser.address ? `${detailUser.address} ${detailUser.ward} ${detailUser.district} ${detailUser.city}` : "Chưa có địa chỉ"}
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                        <label className="text-gray-700 text-sm font-bold text-left col-span-3">
                                            Vai trò:
                                        </label>
                                        <select
                                            className="text-gray-700 text-sm font-bold text-left col-span-8"
                                            value={selectedRole}
                                            onChange={handleRoleChange}
                                        >
                                            <option value="">Chọn vai trò</option>
                                            {roles.map(role => (
                                                <option key={role.role_id} value={role.role_name}>
                                                    {role.role_name}
                                                </option>
                                            ))}
                                        </select>
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
                                        <input type="file" hidden/>
                                    </div>
                                    <div className="flex items-end mt-8 justify-end p-10">
                                        <button className="py-2 px-5 bg-red-500 hover:bg-red-700 text-white rounded-sm">
                                            Khóa tài khoản
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
