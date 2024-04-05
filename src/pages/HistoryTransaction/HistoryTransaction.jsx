import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faBuildingColumns, faCircleInfo, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Siderbar/Siderbar";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const TranscationHistory = () => {
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
                                    <h1 className="text-3xl font-bold">Lịch sử giao dịch</h1>
                                </div>
                                <div className="search-box flex bg-[#F9FAFB] w-[600px] h-[45px] border border-black rounded-s-2xl px-4">
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
                        <div className="w-auto mx-4 h-full text-left bg-white rounded-lg shadow-lg py-14">
                            <table className="min-w-full border-collapse w-full">
                                <thead>
                                <tr className="text-gray-500">
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Họ và tên</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Biển số</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Ngày giao dich</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Thời gian</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Số tiền</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Số dư</th>
                                    <th className="py-2 px-3 border-t text-black border-gray-300 bg-white">Cơ sở </th>
                                </tr>
                                </thead>
                                <tbody>
                                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <tr key={item} className="text-gray-500">
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white">Nguyễn Phi Hiền</td>
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white">81A1 88888</td>
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white">10/03/2024</td>
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white">10:55:45 s</td>
                                        <td className="py-2 px-4 border-t text-red-600 border-gray-300 bg-white"> -2.000đ</td>
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white"> 102.000đ</td>
                                        <td className="py-2 px-4 border-t border-gray-300 bg-white">245 Nguyễn Văn Linh</td>

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

export default TranscationHistory;
