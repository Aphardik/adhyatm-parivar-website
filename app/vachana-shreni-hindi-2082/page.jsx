"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Row, Col, Modal, Radio, Select, Checkbox, DatePicker } from "antd";
import { UserOutlined, PlusOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import axios from "axios";
import { states } from "@/app/data/states";

export default function VachanaShreniHindiForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [registrationCodes, setRegistrationCodes] = useState([]);
    const router = useRouter();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const payload = { participants: values.participants };
            const response = await axios.post(
                "https://vachanashrenihindi2082test-fahifz22ha-uc.a.run.app",
                payload
            );
            if (response.status === 200) {
                const codes = response.data.codes || values.participants.map((_, i) =>
                    `REG${Date.now()}${String(i + 1).padStart(3, "0")}`
                );
                const registrationDetails = values.participants.map((p, i) => ({
                    code: codes[i],
                    name: p.fullName,
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

    // Close modal and redirect to home page
    const handleModalClose = () => {
        setSuccessModalVisible(false);
        setRegistrationCodes([]);
        router.push("/");
    };

    // Downloads registration card as a PNG image using Canvas API (no external library)
    const handleDownloadScreenshot = () => {
        const scale = 2; // retina quality
        const W = 520;
        const rowH = 64;
        const paddingX = 36;
        const headerH = 180;
        const footerH = 60;
        const totalH = headerH + registrationCodes.length * (rowH + 12) + footerH;

        const canvas = document.createElement("canvas");
        canvas.width = W * scale;
        canvas.height = totalH * scale;
        const ctx = canvas.getContext("2d");
        ctx.scale(scale, scale);

        // ── Background ──
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, W, totalH);

        // ── Top green accent bar ──
        ctx.fillStyle = "#22c55e";
        ctx.fillRect(0, 0, W, 6);

        // ── Checkmark circle ──
        const cx = W / 2;
        ctx.beginPath();
        ctx.arc(cx, 52, 26, 0, Math.PI * 2);
        ctx.fillStyle = "#dcfce7";
        ctx.fill();
        ctx.font = "bold 28px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "#16a34a";
        ctx.fillText("✓", cx, 62);

        // ── Title ──
        ctx.font = "bold 22px sans-serif";
        ctx.fillStyle = "#111827";
        ctx.textAlign = "center";
        ctx.fillText("रजिस्ट्रेशन सफल!", cx, 108);

        // ── Subtitle ──
        ctx.font = "14px sans-serif";
        ctx.fillStyle = "#6b7280";
        ctx.fillText("आपका रजिस्ट्रेशन सफलतापूर्वक पूर्ण हो गया है।", cx, 130);

        // ── Divider ──
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(paddingX, 148);
        ctx.lineTo(W - paddingX, 148);
        ctx.stroke();

        // ── "Registration Number" label ──
        ctx.font = "bold 14px sans-serif";
        ctx.fillStyle = "#374151";
        ctx.textAlign = "center";
        ctx.fillText("वेटिंग नंबर:", cx, 168);

        // ── Code rows ──
        let y = headerH;
        registrationCodes.forEach((entry) => {
            const rowY = y;
            const rowW = W - paddingX * 2;

            // Row background
            ctx.fillStyle = "#f3f4f6";
            roundRect(ctx, paddingX, rowY, rowW, rowH, 8);
            ctx.fill();

            // Name (left)
            ctx.font = "600 14px sans-serif";
            ctx.fillStyle = "#374151";
            ctx.textAlign = "left";
            ctx.fillText(entry.name, paddingX + 16, rowY + 28);

            // Participant label
            ctx.font = "11px sans-serif";
            ctx.fillStyle = "#9ca3af";
            ctx.fillText("प्रतिभागी", paddingX + 16, rowY + 46);

            // Code pill (right)
            const codeText = entry.code;
            ctx.font = "bold 16px monospace";
            const codeW = ctx.measureText(codeText).width + 28;
            const codeX = W - paddingX - codeW - 8;
            const codeY = rowY + 14;
            const codeH = 36;

            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#d1d5db";
            ctx.lineWidth = 1.5;
            roundRect(ctx, codeX, codeY, codeW, codeH, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#111827";
            ctx.textAlign = "center";
            ctx.fillText(codeText, codeX + codeW / 2, codeY + 23);

            y += rowH + 12;
        });

        // ── Footer note ──
        ctx.font = "12px sans-serif";
        ctx.fillStyle = "#9ca3af";
        ctx.textAlign = "center";
        ctx.fillText("यह आपका वेटिंग नंबर है। कृपया इसे नोट कर लें।", cx, y + 28);

        // ── Bottom border ──
        ctx.fillStyle = "#f59e0b";
        ctx.fillRect(0, totalH - 4, W, 4);

        // ── Trigger download ──
        const link = document.createElement("a");
        link.download = "registration-confirmation.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    // Helper: rounded rectangle path
    function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-heading">
            {/* Top Image Section */}
            <div className="w-full">
                <img
                    src="/vachana-shreni-hindi-2082.jpg"
                    alt="Vachana Shreni Banner"
                    className="w-full h-auto max-w-5xl mx-auto object-contain"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto relative z-10 pb-12">

                {/* Registration Form Section */}
                <div className="bg-white rounded-sm border border-gray-100 overflow-hidden mb-12 shadow-lg">
                    <div className="bg-lightpink p-4 px-8 text-center border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800">रजिस्ट्रेशन फॉर्म</h2>
                    </div>

                    <div className="sm:p-8">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{ participants: [{}] }}
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

                                                {/* ── Waiting Message above पूरा नाम ── */}
                                                <div className="mb-6 border border-amber-300 bg-amber-50 rounded-sm p-4 font-heading text-sm leading-relaxed text-gray-800">
                                                    <p className="font-bold text-amber-800 mb-2 text-base">प्रणाम</p>
                                                    <p className="mb-1">आपका वाचना सुनने में रस है उसकी हम अनुमोदना करते हैं।</p>
                                                    <p className="mb-1">व्यवस्था अनुसार वाचनार्थी की संख्या पूरी हो चुकी है।</p>
                                                    <p className="mb-1">आपका नाम वेटिंग में लिया जा रहा है।</p>
                                                    <p className="mb-1">उतारे की और जगह प्राप्त करने के लिए हमारा प्रयास चालू है।</p>
                                                    <p className="mb-1">यदि जगह मिल जाती है अथवा कोई कैंसिलेशन आता है तो आपको हमारी ओर से कंफर्मेशन दिया जाएगा।</p>
                                                    <p className="mt-2 font-semibold text-amber-700">क्षमा करें अभी आपका नाम वेटिंग में लिया जा रहा है।</p>
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
                                                                    style={{ height: "50px" }}
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

                                                        {index > 0 && (
                                                            <Col xs={24} sm={24}>
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
                                                            </Col>
                                                        )}

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
                                                                    className="font-heading h-[52px]"
                                                                    showSearch
                                                                    size="large"
                                                                    filterOption={(input, option) =>
                                                                        (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
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
                                                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, "attendedBefore"]}
                                                                    label={<span className="text-[#901E3E] font-bold text-lg font-heading leading-relaxed block mb-2">क्या आप पहले कोई वाचना अटेंड कर चुके हैं? </span>}
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
                                                className="h-14 text-lg font-bold !font-heading border-2 border-dashed border-gray-400 text-gray-600 hover:text-blue-600 hover:border-blue-500 rounded-xl flex items-center justify-center gap-2  transition-all duration-300 hover:bg-blue-50"
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
                                    className="h-14 text-xl !font-heading font-bold !pt-1 !bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 shadow-lg rounded-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {loading ? "रजिस्ट्रेशन हो रहा है..." : "सभी प्रतिभागियों को रजिस्टर करें"}
                                </Button>
                            </div>
                        </Form>
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
                        <CheckCircleOutlined className="text-6xl text-green-500 sm:text-7xl" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 font-heading">
                        रजिस्ट्रेशन सफल!
                    </h2>

                    <p className="text-base sm:text-lg font-semibold text-red-600 mb-6 font-heading">
                        आपका रजिस्ट्रेशन वेटिंग में सफलतापूर्वक पूर्ण हो गया है।
                    </p>

                    <div className="bg-white p-4 mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 font-heading">
                            वेटिंग नंबर:
                        </h3>
                        <div className="space-y-3">
                            {registrationCodes.map((code, index) => (
                                <div key={index} className="bg-gray-200 rounded-sm p-3">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className="text-sm sm:text-base font-semibold text-gray-600 font-heading">
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
                            यह आपका वेटिंग नंबर है। कृपया इसे नोट कर लें।
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* Download button — saves as PNG image via Canvas API */}
                        <Button
                            icon={<DownloadOutlined />}
                            size="large"
                            onClick={handleDownloadScreenshot}
                            className="flex-1 !rounded-sm border bg-gray-100 !border-blue-400 !py-2 !h-10 !sm:h-12 text-base sm:text-lg font-bold font-heading hover:bg-gray-50"
                        >
                            इमेज डाउनलोड करें
                        </Button>

                        {/* Close button — redirects to home page */}
                        <Button
                            type="primary"
                            size="large"
                            onClick={handleModalClose}
                            className="flex-1 !bg-black !rounded-sm !py-2 border-none !h-10 !sm:h-12 text-base sm:text-lg font-bold font-heading px-8 hover:!bg-gray-800"
                        >
                            बंद करें
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}