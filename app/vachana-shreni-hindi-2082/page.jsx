"use client";
import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal, Radio, Select, Checkbox, DatePicker } from "antd";
import { UserOutlined, PlusOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { states } from "@/app/data/states";

export default function VachanaShreniHindiForm() {
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
                "https://us-central1-adhyatm-parivar-main.cloudfunctions.net/vachanaShreniHindi2082",
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
                message.error("सर्वर से अप्रत्याशित प्रतिक्रिया।");
            }
        } catch (error) {
            console.error("Submission error:", error);
            message.error("फॉर्म जमा करने में विफल। कृपया पुनः प्रयास करें।");
        } finally {
            setLoading(false);
        }
    };

    const handleModalClose = () => {
        setSuccessModalVisible(false);
        setRegistrationCodes([]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-heading">
            {/* Hero Section */}
            <div className="relative bg-gradient1 text-gray-800 pb-12 pt-8 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <div className="space-y-1 text-gray-800 font-medium text-sm sm:text-base tracking-wide">
                        <div>चरमतीर्थपति श्री महावीरस्वामिने नमः</div>
                        <div>श्री जीत-हीर-बुद्धि-तिलक-शान्तिचन्द्र-कनकप्रभ-सोमचन्द्र-जिनचन्द्र-संयमरत्नसूरि सद् गुरुभ्यो नमः</div>
                    </div>

                    <div className="py-4">
                        <p className="text-lg md:text-xl font-bold px-4">
                            जिनकी ओजस्वी वाणी के प्रभाव से मुंबई में 64-64 दीक्षा का ऐतिहासिक-यशस्वी कार्यक्रम हुआ.. <br /> वो प्रभावक वाणी हिंदी में सुनने का एक सुनहरा अवसर
                        </p>
                    </div>

                    <p className="text-2xl font-bold mb-6">मुंबई में</p>

                    <div className="inline-block px-4">

                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                            नवमी हिंदी वाचना श्रेणी
                        </h1>
                    </div>


                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 -mt-4 pb-12">

                {/* Info Cards Section */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-block bg-lightpink px-8 py-4 rounded-sm shadow-lg">
                            <h2 className="text-xl font-bold mb-1 text-gray-800">...वाचना दाता...</h2>
                            <p className="text-lg md:text-xl font-bold text-black">
                                'सूरिजिन-संयम' कृपाप्राप्त दीक्षाधर्म के महानायक <br /> प.पू.आ.भ.श्रीमद् विजय योगतिलकसूरीश्वरजी महाराजा
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Mangal Pal */}
                        <div className="group transition-all duration-300">
                            <div className="bg-white text-center rounded-sm shadow-md border border-green-100 overflow-hidden hover:shadow-lg h-full">
                                <div className="bg-lightpink p-4">
                                    <h3 className="text-xl font-bold text-gray-800">मंगल पल</h3>
                                </div>
                                <div className="p-6 space-y-2 text-gray-700">
                                    <p className="font-medium text-lg">वि.सं. २०८२ (गुज)</p>
                                    <p className="font-medium text-lg">वै.व.७ से वै.व.१०</p>
                                    <p className="font-bold text-xl pt-2 border-t border-gray-100 mt-2">ता. 09.05.26 से 12.05.26</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="group transition-all duration-300">
                            <div className="bg-white text-center rounded-sm shadow-md border border-red-100 overflow-hidden hover:shadow-lg h-full">
                                <div className="bg-lightpink p-4">
                                    <h3 className="text-xl font-bold text-gray-800">मंगल स्थल</h3>
                                </div>
                                <div className="p-6 space-y-2 text-gray-700">
                                    <p className="font-medium text-xl">श्री जीवदया धाम</p>
                                    <p className="font-medium text-xl">वसई, मुंबई</p>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="group transition-all duration-300">
                            <div className="bg-white text-center rounded-sm shadow-md border border-purple-100 overflow-hidden hover:shadow-lg h-full">
                                <div className="bg-lightpink p-4">
                                    <h3 className="text-xl font-bold text-gray-800">संपर्क</h3>
                                </div>
                                <div className="p-6 space-y-2 text-gray-700">
                                    <p className="font-medium text-lg">प्रणय संचेती - 9979894114</p>
                                    <p className="font-medium text-lg">आशीष बैद - 9827111110</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                {/* Registration Form Section */}
                <div className="bg-white rounded-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="bg-lightpink p-4 px-8 text-center border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800">रजिस्ट्रेशन फॉर्म</h2>
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
                                            <div key={key} className="bg-gray-50 p-6 !font-heading rounded-sm border border-gray-200 shadow-sm relative">
                                                {/* Participant Header */}
                                                <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-orange-200">
                                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                                                        <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                                                            {index + 1}
                                                        </span>
                                                        प्रतिभागी विवरण
                                                    </h3>
                                                    {fields.length > 1 && (
                                                        <Button
                                                            type="text"
                                                            danger
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => remove(name)}
                                                            className="flex items-center px-4 h-9 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
                                                        >
                                                            <span className="hidden sm:inline ml-1">हटाएं</span>
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
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">पूरा नाम </span>}
                                                                rules={[{ required: true, message: "कृपया नाम दर्ज करें" }]}
                                                            >
                                                                <Input
                                                                    placeholder="पूरा नाम दर्ज करें"
                                                                    prefix={<UserOutlined className="text-gray-400 mr-2" />}
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "dob"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">जन्म तारीख</span>}
                                                                rules={[{ required: true, message: "जन्म तारीख आवश्यक है" }]}
                                                            >
                                                                <DatePicker
                                                                    placeholder="तारीख चुनें"
                                                                    format="DD-MM-YYYY"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                    style={{ height: '50px' }} // Match input height
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "gender"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">लिंग </span>}
                                                                rules={[{ required: true, message: "लिंग चुनें" }]}
                                                            >
                                                                <Radio.Group className="w-full flex gap-6 pt-2">
                                                                    <Radio value="Male" className="text-base font-medium text-gray-700 flex items-center"><span className="ml-1">पुरुष</span></Radio>
                                                                    <Radio value="Female" className="text-base font-medium text-gray-700 flex items-center"><span className="ml-1">महिला</span></Radio>
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
                                                                        className="!font-heading text-xs font-bold text-[#901E3E]"
                                                                    >
                                                                        ऊपर दिए गए प्रतिभागी से मोबाइल नंबर कॉपी करें
                                                                    </Checkbox>
                                                                </div>
                                                            )}
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "mobile"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">मोबाइल नंबर </span>}
                                                                rules={[
                                                                    { required: true, message: "मोबाइल नंबर आवश्यक है" },
                                                                    { pattern: /^[0-9]{10}$/, message: "10 अंकों का वैध नंबर दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="10 अंकों का मोबाइल नंबर"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                    maxLength={10}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "altMobile"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">वैकल्पिक मोबाइल नंबर</span>}
                                                                rules={[
                                                                    { pattern: /^[0-9]{10}$/, message: "10 अंकों का वैध नंबर दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="वैकल्पिक मोबाइल नंबर"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
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
                                                                        className="!font-heading text-xs font-bold text-[#901E3E]"
                                                                    >
                                                                        ऊपर दिए गए प्रतिभागी से पता कॉपी करें
                                                                    </Checkbox>
                                                                </div>
                                                            )}
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "address"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">पूरा पता</span>}
                                                                rules={[{ required: true, message: "पता आवश्यक है" }]}
                                                            >
                                                                <Input.TextArea
                                                                    rows={2}
                                                                    placeholder="पूरा पता दर्ज करें"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "city"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">शहर </span>}
                                                                rules={[{ required: true, message: "शहर आवश्यक है" }]}
                                                            >
                                                                <Input
                                                                    placeholder="अपना शहर दर्ज करें"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "state"]}
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">राज्य </span>}
                                                                rules={[{ required: true, message: "राज्य चुनें" }]}
                                                            >
                                                                <Select
                                                                    placeholder="राज्य चुनें"
                                                                    className="font-heading h-[52px]" // Height match for AntD Select
                                                                    showSearch
                                                                    size="large"
                                                                    filterOption={(input, option) =>
                                                                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                                                                    }
                                                                >
                                                                    {states.map((s) => (
                                                                        <Select.Option key={s.value} value={s.value} className="font-heading">
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
                                                                label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed">पिनकोड </span>}
                                                                rules={[
                                                                    { required: true, message: "पिनकोड आवश्यक है" },
                                                                    { pattern: /^[0-9]{6}$/, message: "6 अंकों का वैध पिनकोड दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="पिनकोड"
                                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 font-heading text-base"
                                                                    maxLength={6}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, "attendedBefore"]}
                                                                    label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed block mb-2">क्या आप पहले हिंदी वाचना अटेंड कर चुके हैं? </span>}
                                                                    rules={[{ required: true, message: "कृपया चुनें" }]}
                                                                    className="mb-0"
                                                                >
                                                                    <Radio.Group className="w-full flex gap-4">
                                                                        <Radio value="Yes" className="text-base text-gray-700">हां</Radio>
                                                                        <Radio value="No" className="text-base text-gray-700">नहीं</Radio>
                                                                    </Radio.Group>
                                                                </Form.Item>
                                                            </div>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, "understandGujarati"]}
                                                                    label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed block mb-2">क्या आपको गुजराती समझ आती हैं? </span>}
                                                                    rules={[{ required: true, message: "कृपया चुनें" }]}
                                                                    className="mb-0"
                                                                >
                                                                    <Radio.Group className="w-full flex flex-wrap gap-4">
                                                                        <Radio value="Yes" className="text-base text-gray-700">हां</Radio>
                                                                        <Radio value="No" className="text-base text-gray-700">नहीं</Radio>
                                                                        <Radio value="Little" className="text-base text-gray-700">थोड़ी-थोड़ी</Radio>
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
                                                className="h-14 text-lg font-bold !font-heading border-2 border-dashed border-gray-400 text-gray-600 hover:text-blue-600 hover:border-blue-500 rounded-xl flex items-center justify-center gap-2 font-heading transition-all duration-300 hover:bg-blue-50"
                                                size="large"
                                            >
                                                एक और प्रतिभागी जोड़ें
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
                                    className="h-14 text-xl !font-heading font-bold font-heading !pt-1 !bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 shadow-lg rounded-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {loading ? "रजिस्ट्रेशन हो रहा है..." : "सभी प्रतिभागियों को रजिस्टर करें"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden mb-12">
                    <div className="bg-lightpink p-4 px-8 pt-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">नोट</h2>
                    </div>
                    <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
                        <div className="space-y-4">
                            {[
                                "उपलब्ध व्यवस्था अनुसार मर्यादित संख्या में ही वाचानार्थी लिए जा सकेंगे.",
                                "चयन में हिंदी भाषी क्षेत्र के श्रोताओं को प्राथमिकता दि जाएगी.",
                                "हमारी ओर से आपको कन्फर्मेशन मिलने पर ही आप टिकिट करवाएं."
                            ].map((note, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-darkpink flex items-start">
                                    <div className="mr-3 mt-1 text-darkpink font-bold">{idx + 1}.</div>
                                    <p className="text-gray-700 font-medium text-lg leading-relaxed">{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Organizer Section */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <div className="bg-lightpink w-full sm:w-72 h-32 flex flex-col items-center justify-center p-4 rounded-sm shadow-md border border-lightpink">
                        <h3 className="font-bold text-lg text-gray-600 mb-1">... आयोजक ...</h3>
                        <h2 className="font-bold text-2xl text-gray-800">श्री अध्यात्म परिवार</h2>
                        <h2 className="font-bold text-2xl text-gray-800">श्री कल्याण मित्र परिवार</h2>
                    </div>

                </div>

                {/* Map Section */}
                <div className="bg-white rounded-sm shadow-sm border border-lightpink overflow-hidden group hover:shadow-2xl transition-all duration-300 mb-12">
                    <div className="bg-lightpink p-4 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                            📍 मंगल स्थल
                        </h3>
                        <p className="text-center font-medium mt-1">श्री जीवदया धाम, वसई, मुंबई</p>
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
                            Google Maps पर देखें
                        </a>
                    </div>
                </div>

                <div className="group transition-all duration-300">
                    <div className="bg-white text-center rounded-sm shadow-md border border-purple-100 overflow-hidden hover:shadow-lg h-full">
                        <div className="bg-lightpink p-4">
                            <h3 className="text-xl font-bold text-gray-800">संपर्क</h3>
                        </div>
                        <div className="p-6 space-y-2 text-gray-700">
                            <p className="font-medium text-lg">प्रणय संचेती - 9979894114</p>
                            <p className="font-medium text-lg">आशीष बैद - 9827111110</p>
                        </div>
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
                className="font-heading"
                closeIcon={<CloseCircleOutlined className="text-2xl text-gray-400 hover:text-gray-600" />}
            >
                <div className="text-center py-6 px-4">
                    <div className="mb-6">
                        <CheckCircleOutlined className="text-6xl text-green-500 sm:text-7xl " />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 font-heading">
                        रजिस्ट्रेशन सफल!
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 font-heading">
                        आपका रजिस्ट्रेशन सफलतापूर्वक पूर्ण हो गया है।
                    </p>

                    <div className="bg-white p-4 mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 font-heading">
                            रजिस्ट्रेशन नंबर:
                        </h3>
                        <div className="space-y-3">
                            {registrationCodes.map((code, index) => (
                                <div key={index} className="bg-gray-200 rounded-sm p-3">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className="text-sm sm:text-base font-semibold text-gray-600 font-heading">
                                            {/* प्रतिभागी {index + 1}: */}
                                            {code.name}
                                        </span>
                                        <span className="text-lg sm:text-xl font-bold text-black font-mono tracking-wider bg-gray-100 px-3 py-1">
                                            {code.code}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-4 font-heading">
                            यह आपका रजिस्ट्रेशन नंबर है। कृपया इसे नोट कर लें।
                        </p>
                    </div>

                    <Button
                        type="primary"
                        size="large"
                        onClick={handleModalClose}
                        className="!bg-black !rounded-sm border-none h-10 sm:h-12 text-base sm:text-lg font-bold font-heading px-8 hover:bg-gray-800"
                    >
                        बंद करें
                    </Button>
                </div>
            </Modal>
        </div>
    );
}