import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBuildingColumns, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Siderbar/Siderbar";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const ManageUserAccount = () => {
    return (
        <div className="bg-[#F3F7FA] w-full h-full p-8">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-3">
                    <div className="border border-white">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="bg-[#ffff] border border-white p-2 rounded-lg">
                        <div className="mx-auto border border-white p-2">
                            <div className="App p-2 flex items-center justify-between">
                                <div style={{ textAlign: "left" }}>
                                    <h1>Danh sách người dùng</h1>
                                    <i className="text-green-700 py-4" style={{ width: "20%" }}>Active Members</i>
                                </div>
                                <div className="search-box flex bg-[#F9FAFB] w-[700px] h-[45px] border border-black rounded-s-2xl px-4">
                                    <input
                                        className="search-input w-9/12 font-bold outline-none bg-transparent pl-2"
                                        type="text"
                                        placeholder="Tìm kiếm theo họ và tên hoặc tên người dùng..."
                                    />
                                </div>
                                <div className="bg-[#212143] border border-black rounded-e-2xl">
                                    <button className="search-button p-1 w-[105px] h-[45px] text-white">
                                        <FontAwesomeIcon icon={faSearch} /> Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto mx-4 h-full text-left bg-white rounded-lg shadow-lg py-10">
                            <table className="min-w-full border-collapse w-full">
                                <thead>
                                <tr className="text-gray-500">
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Họ và tên</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Vai trò</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Mã số sinh viên</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Lịch sử giao dịch</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Chi tiết</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Trạng thái</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <tr key={item} className="text-gray-500">
                                        <td className="py-2 px-3 border-t border-gray-300 bg-white">Nguyễn Phi Hiền</td>
                                        <td className="py-2 px-3 border-t border-gray-300 bg-white">Sinh viên</td>
                                        <td className="py-2 px-3 border-t border-gray-300 bg-white">2621139026</td>
                                        <td className="py-2 px-14 text-red-500 text-2xl border-t border-gray-300 bg-white">

                                            <Link to="/transaction-history">
                                                <FontAwesomeIcon icon={faBuildingColumns} />
                                            </Link>

                                        </td>
                                        <td className="py-2 px-8 text-xl border-t border-gray-300 bg-white">
                                            <Link to="/admin/detail-account">
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </Link>
                                        </td>
                                        <td className="py-2 px-3 border-t bg-green-500 text-white font-bold border-gray-300 border rounded-e-2xl">Đang hoạt động</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="border border-white py-8">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUserAccount;
