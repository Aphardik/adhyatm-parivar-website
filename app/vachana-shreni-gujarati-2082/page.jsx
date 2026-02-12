"use client";
import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal, Radio, Select, Checkbox, DatePicker } from "antd";
import { UserOutlined, PlusOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { states } from "@/app/data/states";

export default function VachanaShreniGujaratiForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [registrationCodes, setRegistrationCodes] = useState([]);

    const onFinish = async (values) => {
        setLoading(true);

        try {
            // Structure the data for the Firebase Function
            const payload = {
                participants: values.participants,
            };

            // Replace with your actual Firebase Function URL
            const response = await axios.post(
                "https://us-central1-adhyatm-parivar-main.cloudfunctions.net/vachanaShreniGujarati2082",
                payload
            );

            if (response.status === 200) {
                // Assuming the response contains unique codes for each participant
                // Example: response.data.codes = ["CODE001", "CODE002", ...]
                const codes = response.data.codes || values.participants.map((_, i) =>
                    `REG${Date.now()}${String(i + 1).padStart(3, '0')}`
                );

                const registrationDetails = values.participants.map((p, i) => ({
                    code: codes[i],
                    name: p.fullName
                }));

                setRegistrationCodes(registrationDetails);
                setSuccessModalVisible(true);
                form.resetFields();
            } else {
                message.error("સર્વર તરફથી અનપેક્ષિત પ્રતિસાદ.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            message.error("ફોર્મ જમા કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.");
        } finally {
            setLoading(false);
        }
    };

    const handleModalClose = () => {
        setSuccessModalVisible(false);
        setRegistrationCodes([]);
    };

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-anek">
            {/* Top Image Section */}
            <div className="w-full">
                {/* Placeholder for the top banner image. Please replace '/path/to/your/banner.jpg' with the actual image path. */}
                <img
                    src="/formpatternbg.jpg" // Using an existing image as placeholder, please update
                    alt="Vachana Shreni Banner"
                    className="w-full h-auto max-h-[400px] object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 -mt-12 pb-12">

                {/* Registration Form Section */}
                <div className="bg-white rounded-sm border border-gray-100 overflow-hidden mb-12 shadow-lg">
                    <div className="bg-lightpink p-4 px-8 text-center border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800">રજીસ્ટ્રેશન ફોર્મ</h2>
                    </div>

                    <div className=" sm:p-8">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{
                                participants: [{}],
                            }}
                            className="space-y-6"
                        >
                            <Form.List name="participants">
                                {(fields, { add, remove }) => (
                                    <div className="space-y-8">
                                        {fields.map(({ key, name, ...restField }, index) => (
                                            <div key={key} className="bg-gray-50 p-6 !font-anek rounded-sm border border-gray-200 shadow-sm relative">
                                                {/* Participant Header */}
                                                <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-orange-200">
                                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                                                        <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                                                            {index + 1}
                                                        </span>
                                                        પ્રતિભાગી વિગતો
                                                    </h3>
                                                    {fields.length > 1 && (
                                                        <Button
                                                            type="text"
                                                            danger
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => remove(name)}
                                                            className="flex items-center px-4 h-9 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
                                                        >
                                                            <span className="hidden sm:inline ml-1">દૂર કરો</span>
                                                        </Button>
                                                    )}
                                                </div>

                                                {/* Form Fields */}
                                                <div className="space-y-4">
                                                    <Row gutter={[24, 24]}>
                                                        <Col xs={24} sm={24}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "fullName"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">પૂરું નામ </span>}
                                                                rules={[{ required: true, message: "કૃપા કરીને નામ દાખલ કરો" }]}
                                                            >
                                                                <Input
                                                                    placeholder="પૂરું નામ દાખલ કરો"
                                                                    prefix={<UserOutlined className="text-gray-400 mr-2" />}
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "dob"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">જન્મ તારીખ</span>}
                                                                rules={[{ required: true, message: "જન્મ તારીખ જરૂરી છે" }]}
                                                            >
                                                                <DatePicker
                                                                    placeholder="તારીખ પસંદ કરો"
                                                                    format="DD-MM-YYYY"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                    style={{ height: '50px' }} // Match input height
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "gender"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">લિંગ </span>}
                                                                rules={[{ required: true, message: "લિંગ પસંદ કરો" }]}
                                                            >
                                                                <Radio.Group className="w-full flex gap-6 pt-2">
                                                                    <Radio value="Male" className="text-base font-medium text-gray-700 flex items-center"><span className="ml-1">પુરુષ</span></Radio>
                                                                    <Radio value="Female" className="text-base font-medium text-gray-700 flex items-center"><span className="ml-1">મહિલા</span></Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            {index > 0 && (
                                                                <div className="mb-2">
                                                                    <Checkbox
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                const participants = form.getFieldValue("participants");
                                                                                const prevData = participants[index - 1];
                                                                                if (prevData) {
                                                                                    const currentParticipants = [...participants];
                                                                                    currentParticipants[index] = {
                                                                                        ...currentParticipants[index],
                                                                                        mobile: prevData.mobile,
                                                                                        altMobile: prevData.altMobile,
                                                                                    };
                                                                                    form.setFieldsValue({ participants: currentParticipants });
                                                                                }
                                                                            }
                                                                        }}
                                                                        className="!font-anek text-xs font-bold text-[#901E3E]"
                                                                    >
                                                                        ઉપરના પ્રતિભાગી માંથી મોબાઇલ નંબર કોપી કરો
                                                                    </Checkbox>
                                                                </div>
                                                            )}
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "mobile"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">મોબાઇલ નંબર </span>}
                                                                rules={[
                                                                    { required: true, message: "મોબાઇલ નંબર જરૂરી છે" },
                                                                    { pattern: /^[0-9]{10}$/, message: "10 અંકોનો માન્ય નંબર દાખલ કરો" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="10 અંકોનો મોબાઇલ નંબર"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                    maxLength={10}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "altMobile"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">વૈકલ્પિક મોબાઇલ નંબર</span>}
                                                                rules={[
                                                                    { pattern: /^[0-9]{10}$/, message: "10 અંકોનો માન્ય નંબર દાખલ કરો" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="વૈકલ્પિક મોબાઇલ નંબર"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                    maxLength={10}
                                                                />
                                                            </Form.Item>
                                                        </Col>




                                                        <Col xs={24} sm={12}>
                                                            {index > 0 && (
                                                                <div className="mb-2">
                                                                    <Checkbox
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                const participants = form.getFieldValue("participants");
                                                                                const prevData = participants[index - 1];
                                                                                if (prevData) {
                                                                                    const currentParticipants = [...participants];
                                                                                    currentParticipants[index] = {
                                                                                        ...currentParticipants[index],
                                                                                        address: prevData.address,
                                                                                        city: prevData.city,
                                                                                        state: prevData.state,
                                                                                        pincode: prevData.pincode,
                                                                                    };
                                                                                    form.setFieldsValue({ participants: currentParticipants });
                                                                                }
                                                                            }
                                                                        }}
                                                                        className="!font-anek text-xs font-bold text-[#901E3E]"
                                                                    >
                                                                        ઉપરના પ્રતિભાગી માંથી સરનામું કોપી કરો
                                                                    </Checkbox>
                                                                </div>
                                                            )}
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "address"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">પૂરું સરનામું</span>}
                                                                rules={[{ required: true, message: "સરનામું જરૂરી છે" }]}
                                                            >
                                                                <Input.TextArea
                                                                    rows={2}
                                                                    placeholder="પૂરું સરનામું દાખલ કરો"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "city"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">શહેર </span>}
                                                                rules={[{ required: true, message: "શહેર જરૂરી છે" }]}
                                                            >
                                                                <Input
                                                                    placeholder="શહેર દાખલ કરો"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "state"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">રાજ્ય </span>}
                                                                rules={[{ required: true, message: "રાજ્ય પસંદ કરો" }]}
                                                            >
                                                                <Select
                                                                    placeholder="રાજ્ય પસંદ કરો"
                                                                    className="font-anek h-[52px]" // Height match for AntD Select
                                                                    showSearch
                                                                    size="large"
                                                                    filterOption={(input, option) =>
                                                                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                                                                    }
                                                                >
                                                                    {states.map((s) => (
                                                                        <Select.Option key={s.value} value={s.value} className="font-anek">
                                                                            {s.label}
                                                                        </Select.Option>
                                                                    ))}
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "pincode"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed">પીનકોડ </span>}
                                                                rules={[
                                                                    { required: true, message: "પીનકોડ જરૂરી છે" },
                                                                    { pattern: /^[0-9]{6}$/, message: "6 અંકોનો માન્ય પીનકોડ દાખલ કરો" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="પીનકોડ"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-anek text-base"
                                                                    maxLength={6}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, "attendedBefore"]}
                                                                    label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed block mb-2">શું તમે પહેલા હિન્દી વાચનામાં હાજરી આપી છે? </span>}
                                                                    rules={[{ required: true, message: "કૃપા કરીને પસંદ કરો" }]}
                                                                    className="mb-0"
                                                                >
                                                                    <Radio.Group className="w-full flex gap-4">
                                                                        <Radio value="Yes" className="text-base text-gray-700">હા</Radio>
                                                                        <Radio value="No" className="text-base text-gray-700">ના</Radio>
                                                                    </Radio.Group>
                                                                </Form.Item>
                                                            </div>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, "understandGujarati"]}
                                                                    label={<span className="text-[#901E3E] font-bold text-lg font-anek leading-relaxed block mb-2">શું તમને ગુજરાતી સમજાય છે? </span>}
                                                                    rules={[{ required: true, message: "કૃપા કરીને પસંદ કરો" }]}
                                                                    className="mb-0"
                                                                >
                                                                    <Radio.Group className="w-full flex flex-wrap gap-4">
                                                                        <Radio value="Yes" className="text-base text-gray-700">હા</Radio>
                                                                        <Radio value="No" className="text-base text-gray-700">ના</Radio>
                                                                        <Radio value="Little" className="text-base text-gray-700">થોડી-થોડી</Radio>
                                                                    </Radio.Group>
                                                                </Form.Item>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Add Participant Button */}
                                        <Form.Item className="mb-0">
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                                className="h-14 text-lg font-bold !font-anek border-2 border-dashed border-gray-400 text-gray-600 hover:text-blue-600 hover:border-blue-500 rounded-xl flex items-center justify-center gap-2 font-anek transition-all duration-300 hover:bg-blue-50"
                                                size="large"
                                            >
                                                બીજા પ્રતિભાગી ઉમેરો
                                            </Button>
                                        </Form.Item>
                                    </div>
                                )}
                            </Form.List>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-gray-100">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    loading={loading}
                                    className="h-14 text-xl !font-anek font-bold font-anek !pt-1 !bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 shadow-lg rounded-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {loading ? "રજીસ્ટ્રેશન થઈ રહ્યું છે..." : "બધા પ્રતિભાગીઓને રજીસ્ટર કરો"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-sm shadow-sm border border-lightpink overflow-hidden group hover:shadow-2xl transition-all duration-300 mb-12">
                    <div className="bg-lightpink p-4 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                            📍 મંગલ સ્થળ
                        </h3>
                        <p className="text-center font-medium mt-1">શ્રી જીવદયા ધામ, વસઈ, મુંબઈ</p>
                    </div>
                    <div className="h-96 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.18432579603!2d72.84334927498143!3d19.5076283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7081ec7e32ed9%3A0x514bb76c4877e603!2sJeevdaya%20Dham%20Jain%20Tirth!5e0!3m2!1sen!2sin!4v1719223456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Jeevdaya Dham Map"
                            className="border-0"
                        ></iframe>
                    </div>
                    <div className="p-4 bg-gray-50 text-center">
                        <a
                            href="https://www.google.com/maps/place/Jeevdaya+Dham+Jain+Tirth/@19.5063852,72.8515059,12.17z/data=!4m6!3m5!1s0x3be7081ec7e32ed9:0x514bb76c4877e603!8m2!3d19.5076283!4d72.918791!16s%2Fg%2F11b7fptt27?entry=tts&g_ep=EgoyMDI2MDIwOS4wIPu8ASoASAFQAw%3D%3D&skid=496fc225-4f1f-4abb-bccd-89ef80cae665"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Google Maps પર જુઓ
                        </a>
                    </div>
                </div>

            </div>

            {/* Success Modal */}
            <Modal
                open={successModalVisible}
                onCancel={handleModalClose}
                footer={null}
                centered
                width={500}
                className="font-anek"
                closeIcon={<CloseCircleOutlined className="text-2xl text-gray-400 hover:text-gray-600" />}
            >
                <div className="text-center py-6 px-4">
                    <div className="mb-6">
                        <CheckCircleOutlined className="text-6xl text-green-500 sm:text-7xl " />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 font-anek">
                        રજીસ્ટ્રેશન સફળ!
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 font-anek">
                        તમારું રજીસ્ટ્રેશન સફળતાપૂર્વક પૂર્ણ થયું છે.
                    </p>

                    <div className="bg-white p-4 mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 font-anek">
                            રજીસ્ટ્રેશન નંબર:
                        </h3>
                        <div className="space-y-3">
                            {registrationCodes.map((code, index) => (
                                <div key={index} className="bg-gray-200 rounded-sm p-3">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className="text-sm sm:text-base font-semibold text-gray-600 font-anek">
                                            {/* પ્રતિભાગી {index + 1}: */}
                                            {code.name}
                                        </span>
                                        <span className="text-lg sm:text-xl font-bold text-black font-mono tracking-wider bg-gray-100 px-3 py-1">
                                            {code.code}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-4 font-anek">
                            આ તમારો રજીસ્ટ્રેશન નંબર છે. કૃપા કરીને તેને નોંધી લો.
                        </p>
                    </div>

                    <Button
                        type="primary"
                        size="large"
                        onClick={handleModalClose}
                        className="!bg-black !rounded-sm border-none h-10 sm:h-12 text-base sm:text-lg font-bold font-anek px-8 hover:bg-gray-800"
                    >
                        બંધ કરો
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
