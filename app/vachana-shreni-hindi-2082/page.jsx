"use client";
import React, { useState } from "react";
import { Form, Input, Row, Col, Button, Select, message, Radio, Modal } from "antd";
import { PlusOutlined, DeleteOutlined, UserOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
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
        <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-heading">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 font-heading">
                        नवमी हिंदी वाचना श्रेणी
                    </h1>
                    <p className="text-xl sm:text-2xl text-black font-semibold mb-1">रजिस्ट्रेशन फॉर्म</p>
                    <p className="text-base sm:text-lg text-gray-600 font-medium">मुंबई</p>
                    <div className="h-0.5 w-32 bg-black mx-auto mt-3"></div>
                </div>

                {/* Info Card */}
                <div className="bg-white mb-6">
                    <div className=" p-4 sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800 font-heading">
                            <div className=" bg-gray-200  p-3">
                                <span className="font-bold block text-gray-800 mb-2 text-base sm:text-lg">📅 मंगल पल:</span>
                                <p className="text-sm sm:text-base">वि.सं. २०८२ (गुज)</p>
                                <p className="text-sm sm:text-base">वै.व.७ से वै.व.१०</p>
                                <p className="text-xs sm:text-sm mt-1">ता. 09.05.26 से 12.05.26</p>
                            </div>
                            <div className="bg-gray-200 p-3">
                                <span className="font-bold block text-gray-800 mb-2 text-base sm:text-lg">📍 मंगल स्थल:</span>
                                <p className="text-sm sm:text-base">श्री जीवदया धाम</p>
                                <p className="text-sm sm:text-base">वसई, मुंबई</p>
                            </div>
                            <div className="bg-gray-200 p-3">
                                <span className="font-bold block text-gray-800 mb-2 text-base sm:text-lg">📞 संपर्क:</span>
                                <p className="text-sm sm:text-base">प्रणय संचेती - 9979894114</p>
                                <p className="text-sm sm:text-base">आशीष बैद - 9827111110</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="pt-4 ">
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
                                    <div className="space-y-6">
                                        {fields.map(({ key, name, ...restField }, index) => (
                                            <div key={key} className="bg-gray-100 p-4 sm:p-6">
                                                {/* Participant Header */}
                                                <div className="flex justify-between items-center mb-4 pb-3 border-b border-black">
                                                    <h3 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-3 font-heading">
                                                        <span className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold">
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
                                                            className="flex items-center px-3 sm:px-4 font-heading h-10 border border-black hover:bg-black hover:text-white"
                                                        >
                                                            <span className="hidden sm:inline">हटाएं</span>
                                                        </Button>
                                                    )}
                                                </div>

                                                {/* Form Fields */}
                                                <div className="space-y-4">
                                                    <Row gutter={[16, 16]}>
                                                        <Col xs={24} sm={24}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "fullName"]}
                                                                label={<span className="text-base font-bold text-black font-heading">पूरा नाम</span>}
                                                                rules={[{ required: true, message: "कृपया नाम दर्ज करें" }]}
                                                            >
                                                                <Input
                                                                    placeholder="पूरा नाम दर्ज करें"
                                                                    prefix={<UserOutlined className="text-gray-400" />}
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={12} sm={8}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "age"]}
                                                                label={<span className="text-base font-bold text-black font-heading">उम्र</span>}
                                                                rules={[{ required: true, message: "उम्र आवश्यक है" }]}
                                                            >
                                                                <Input
                                                                    type="number"
                                                                    placeholder="उम्र"
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={12} sm={16}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "gender"]}
                                                                label={<span className="text-base font-bold text-black font-heading">लिंग</span>}
                                                                rules={[{ required: true, message: "लिंग चुनें" }]}
                                                            >
                                                                <Radio.Group className="font-heading w-full">
                                                                    <Radio value="Male" className="text-base sm:text-lg font-heading mr-4 sm:mr-8">पुरुष</Radio>
                                                                    <Radio value="Female" className="text-base sm:text-lg font-heading">महिला</Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "mobile"]}
                                                                label={<span className="text-base font-bold text-black font-heading">मोबाइल नंबर</span>}
                                                                rules={[
                                                                    { required: true, message: "मोबाइल नंबर आवश्यक है" },
                                                                    { pattern: /^[0-9]{10}$/, message: "10 अंकों का वैध नंबर दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="10 अंकों का मोबाइल नंबर"
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                    maxLength={10}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "altMobile"]}
                                                                label={<span className="text-base font-bold text-black font-heading">वैकल्पिक मोबाइल नंबर</span>}
                                                                rules={[
                                                                    { pattern: /^[0-9]{10}$/, message: "10 अंकों का वैध नंबर दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="वैकल्पिक मोबाइल नंबर"
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                    maxLength={10}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "address"]}
                                                                label={<span className="text-base font-bold text-black font-heading">पूरा पता (Address)</span>}
                                                                rules={[{ required: true, message: "पता आवश्यक है" }]}
                                                            >
                                                                <Input.TextArea
                                                                    rows={2}
                                                                    placeholder="पूरा पता दर्ज करें"
                                                                    className="text-base font-heading border border-black"
                                                                    size="large"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "city"]}
                                                                label={<span className="text-base font-bold text-black font-heading">शहर</span>}
                                                                rules={[{ required: true, message: "शहर आवश्यक है" }]}
                                                            >
                                                                <Input
                                                                    placeholder="अपना शहर दर्ज करें"
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "state"]}
                                                                label={<span className="text-base font-bold text-black font-heading">राज्य</span>}
                                                                rules={[{ required: true, message: "राज्य चुनें" }]}
                                                            >
                                                                <Select
                                                                    placeholder="राज्य चुनें"
                                                                    className="font-heading"
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
                                                                label={<span className="text-base font-bold text-black font-heading">पिनकोड</span>}
                                                                rules={[
                                                                    { required: true, message: "पिनकोड आवश्यक है" },
                                                                    { pattern: /^[0-9]{6}$/, message: "6 अंकों का वैध पिनकोड दर्ज करें" },
                                                                ]}
                                                            >
                                                                <Input
                                                                    placeholder="पिनकोड"
                                                                    className="py-2 text-base font-heading border border-black"
                                                                    size="large"
                                                                    maxLength={6}
                                                                />
                                                            </Form.Item>
                                                        </Col>



                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "attendedBefore"]}
                                                                label={<span className="text-base font-bold text-black font-heading">क्या आप पहले हिंदी वाचना अटेंड कर चुके हैं?</span>}
                                                                rules={[{ required: true, message: "कृपया चुनें" }]}
                                                            >
                                                                <Radio.Group className="font-heading w-full">
                                                                    <Radio value="Yes" className="text-base sm:text-lg font-heading mr-4">हां</Radio>
                                                                    <Radio value="No" className="text-base sm:text-lg font-heading">नहीं</Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "understandGujarati"]}
                                                                label={<span className="text-base font-bold text-black font-heading">क्या आपको गुजराती समझ आती हैं?</span>}
                                                                rules={[{ required: true, message: "कृपया चुनें" }]}
                                                            >
                                                                <Radio.Group className="font-heading w-full">
                                                                    <Radio value="Yes" className="text-base sm:text-lg font-heading mr-4">हां</Radio>
                                                                    <Radio value="No" className="text-base sm:text-lg font-heading mr-4">नहीं</Radio>
                                                                    <Radio value="Little" className="text-base sm:text-lg font-heading">थोड़ी-थोड़ी</Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
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
                                                icon={<PlusOutlined className="text-lg" />}
                                                className="h-12 sm:h-14 text-base sm:text-lg font-bold !border-2 border-dashed !border-black text-black bg-white hover:bg-black hover:text-white flex items-center justify-center gap-3 font-heading"
                                                size="large"
                                            >
                                                <span className="text-base !pt-1 font-heading sm:text-lg">एक और प्रतिभागी जोड़ें</span>
                                            </Button>
                                        </Form.Item>
                                    </div>
                                )}
                            </Form.List>

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-black">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    loading={loading}
                                    className="!bg-black border-none !pt-1 !font-heading h-12 sm:h-14 text-base sm:text-lg font-bold font-heading hover:bg-gray-800"
                                >
                                    {loading ? "रजिस्ट्रेशन हो रहा है..." : "सभी प्रतिभागियों को रजिस्टर करें"}
                                </Button>
                            </div>
                        </Form>
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