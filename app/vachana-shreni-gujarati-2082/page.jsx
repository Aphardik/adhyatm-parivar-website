"use client";
import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal, Radio, Select, Checkbox, DatePicker, Switch, message } from "antd";
import { UserOutlined, PlusOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import axios from "axios";
import { states } from "@/app/data/states";

const translations = {
    gu: {
        formTitle: "વાચના શ્રેણી રજીસ્ટ્રેશન ૨૦૮૨",
        instructionTitle: "વાચનાશ્રેણીનો વેશભૂષા નિયમ (ડ્રેસકોડ)",
        instructionText: "નિમ્નલિખિત ડ્રેસકોડવાળાને જ પ્રવેશ મળશે. ચોબીશે કલાક (દિવસ અને રાત્રે) એના સિવાયનો વેશ પહેરી શકાશે નહીં. એ સિવાયના વેશમાં આવનાર ૨૦૦૦ કિ.મી. દૂરથી પણ આવેલ હશે તો પણ અમે પ્રવેશ આપી શકીશું નહીં. કોઈપણ ઉમરની વ્યક્તિ માટે આ જ ડ્રેસકોડ છે.",
        markOnly: "Mark only one oval.",
        option1Dress: "પુરુષો માટે - ધોતી-ખેસ, લુંઘો-ઝભ્ભો અથવા ચુડીદાર",
        option2Dress: "બહેનો માટે - સાડી અથવા ચણિયાચોળી",
        naam: "પૂરું નામ",
        naamPlaceholder: "પૂરું નામ દાખલ કરો",
        dob: "જન્મ તારીખ",
        dobPlaceholder: "તારીખ પસંદ કરો",
        gender: "લિંગ",
        male: "પુરુષ",
        female: "મહિલા",
        address1: "શેરી સરનામું ૧",
        address2: "શેરી સરનામું ૨",
        city: "શહેર",
        state: "રાજ્ય",
        pincode: "પીનકોડ",
        mulVatan: "મૂળ વતન",
        mobile: "મોબાઇલ નંબર",
        altMobile: "વૈકલ્પિક મોબાઇલ નંબર",
        groupPrimaryMobile: "ગ્રુપ પ્રાઈમરી મોબાઇલ નંબર",
        firstVachana: "શું આ તમારી પ્રથમ વાચના છે?",
        howKnow: "તમને વાચના શ્રેણી વિશે કેવી રીતે જાણ થઈ?",
        option1: "હું કે મારા પરિવારમાંથી કોઈ ગુરુમહારાજ સાથે જોડાયેલ છે",
        option2: "કોઈ પરિચિત દ્વારા / કોઈ સંબંધી દ્વારા",
        option3: "જૈન ગ્રુપ દ્વારા",
        other: "અન્ય",
        otherPlaceholder: "વિગત જણાવો",
        copyHeader: "ઉપરના પ્રતિભાગી માંથી વિગતો કોપી કરો",
        addParticipant: "બીજા પ્રતિભાગી ઉમેરો",
        submit: "બધા પ્રતિભાગીઓને રજીસ્ટર કરો",
        submitting: "રજીસ્ટ્રેશન થઈ રહ્યું છે...",
        yes: "હા",
        no: "ના",
        registrationCodeTitle: "રજીસ્ટ્રેશન નંબર:",
        successTitle: "રજીસ્ટ્રેશન સફળ!",
        successMessage: "તમારું રજીસ્ટ્રેશન સફળતાપૂર્વક પૂર્ણ થયું છે.",
        close: "બંધ કરો",
        address: "સરનામું",
        addressPlaceholder: "સરનામું દાખલ કરો",
        pincodePlaceholder: "પીનકોડ",
        required: "જરૂરી છે",
        validMobile: "૧૦ અંકોનો માન્ય નંબર દાખલ કરો",
        validPincode: "૬ અંકોનો માન્ય પીનકોડ દાખલ કરો",
        participantTitle: "પ્રતિભાગી વિગતો"
    },
    hi: {
        formTitle: "वाचना श्रेणी पंजीकरण २०८२",
        instructionTitle: "वाचनाश्रेणी का वेशभूषा नियम (ड्रेसकोड)",
        instructionText: "निम्नलिखित ड्रेसकोड वाले को ही प्रवेश मिलेगा। चौबीसों घंटे (दिन और रात) अन्य कोई वेश पहना नहीं जा सकता। अन्य कोई वेश में आने वाले २००० किलोमीटर दूर से भी आए तो भी हम प्रवेश नहीं दे पाएंगे। किसी भी उम्र के व्यक्ति के लिए यही ड्रेसकोड है।",
        markOnly: "Mark only one oval.",
        option1Dress: "पुरुषों के लिए - धोती-खेस, कुर्ता-पायजामा या चूड़ीदार",
        option2Dress: "बहनों के लिए - साड़ी या चनियाचोली",
        naam: "पूरा नाम",
        naamPlaceholder: "पूरा नाम दर्ज करें",
        dob: "जन्म तिथि",
        dobPlaceholder: "तारीख चुनें",
        gender: "लिंग",
        male: "पुरुष",
        female: "महिला",
        address1: "गली का पता १",
        address2: "गली का पता २",
        city: "शहर",
        state: "राज्य",
        pincode: "पिनकोड",
        mulVatan: "मूल वतन",
        mobile: "मोबाइल नंबर",
        altMobile: "वैकल्पिक मोबाइल नंबर",
        groupPrimaryMobile: "ग्रुप प्राइमरी मोबाइल नंबर",
        firstVachana: "क्या यह आपकी पहली वाचना है?",
        howKnow: "आपको वाचना श्रेणी के बारे में कैसे पता चला?",
        option1: "में या मेरे परिवार में से कोई गुरुमहाराज से जुड़ा हुआ है",
        option2: "किसी परिचित द्वारा / किसी संबंधी द्वारा",
        option3: "जैन ग्रुप द्वारा",
        other: "अन्य",
        otherPlaceholder: "विवरण दें",
        copyHeader: "पिछले प्रतिभागी से विवरण कॉपी करें",
        addParticipant: "अन्य प्रतिभागी जोड़ें",
        submit: "सभी प्रतिभागियों को पंजीकृत करें",
        submitting: "पंजीकरण हो रहा है...",
        yes: "हाँ",
        no: "नहीं",
        registrationCodeTitle: "पंजीकरण संख्या:",
        successTitle: "पंजीकरण सफल!",
        successMessage: "आपका पंजीकरण सफलतापूर्वक पूरा हो गया है।",
        close: "बंद करें",
        address: "पता",
        addressPlaceholder: "पता दर्ज करें",
        pincodePlaceholder: "पिनकोड",
        required: "आवश्यक है",
        validMobile: "१० अंकों का मान्य नंबर दर्ज करें",
        validPincode: "६ अंकों का मान्य पिनकोड दर्ज करें",
        participantTitle: "प्रतिभागी विवरण"
    }
};

// Custom Card Radio component
const CardRadio = ({ value, checked, onChange, children, fontClass }) => {
    return (
        <div
            onClick={() => onChange(value)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${checked
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-300 bg-white hover:border-orange-300'
                }`}
        >
            <span className={`text-base ${fontClass}`}>{children}</span>
        </div>
    );
};

export default function VachanaShreniGujaratiForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [registrationCodes, setRegistrationCodes] = useState([]);
    const [language, setLanguage] = useState("gu"); // Default to Gujarati for this page

    const t = translations[language];
    const fontClass = language === "hi" ? "font-heading" : "font-anek";

    const onFinish = async (values) => {
        setLoading(true);

        try {
            const participantsFormatted = values.participants.map(p => ({
                ...p,
                dob: p.dob ? p.dob.format("YYYY-MM-DD") : null,
            }));

            const payload = {
                participants: participantsFormatted,
            };

            const response = await axios.post(
                "https://us-central1-adhyatm-parivar-main.cloudfunctions.net/vachanaShreniGujarati2082",
                payload
            );

            if (response.status === 200) {
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
                message.error(language === "gu" ? "સર્વર તરફથી અનપેક્ષિત પ્રતિસાદ." : "सर्वर से अप्रत्याशित प्रतिक्रिया।");
            }
        } catch (error) {
            console.error("Submission error:", error);
            message.error(language === "gu" ? "ફોર્મ જમા કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો." : "फॉर्म जमा करने में विफल। कृपया पुनः प्रयास करें।");
        } finally {
            setLoading(false);
        }
    };

    const handleCopyPrevious = (index) => {
        const participants = form.getFieldValue("participants");
        const prevData = participants[index - 1];
        if (prevData) {
            const currentParticipants = [...participants];
            currentParticipants[index] = {
                ...currentParticipants[index],
                address1: prevData.address1,
                address2: prevData.address2,
                city: prevData.city,
                state: prevData.state,
                pincode: prevData.pincode,
                mulVatan: prevData.mulVatan,
                mobile: prevData.mobile,
                altMobile: prevData.altMobile,
                groupPrimaryMobile: prevData.groupPrimaryMobile,
            };
            form.setFieldsValue({ participants: currentParticipants });
        }
    };

    const handleLanguageToggle = (checked) => {
        setLanguage(checked ? "hi" : "gu");
    };

    return (
        <div className={`min-h-screen w-screen bg-gradient-to-br from-orange-50 to-yellow-50 ${fontClass}`}>
            {/* Top Image Section */}
            {/* <div className="w-full">
                <img
                    src="/vachana-shreni-hindi-2082.jpg"
                    alt="Vachana Shreni Banner"
                    className="w-full h-auto max-w-5xl mx-auto object-contain"
                />
            </div> */}

            {/* Language Toggle Fixed */}
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-end items-center gap-3">
                <span className={`text-sm font-bold ${language === "gu" ? "text-orange-600" : "text-gray-400"}`}>ગુજરાતી</span>
                <Switch
                    checked={language === "hi"}
                    onChange={handleLanguageToggle}
                    className="bg-gray-400"
                />
                <span className={`text-sm font-bold ${language === "hi" ? "text-orange-600" : "text-gray-400"}`}>हिन्दी</span>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto relative z-10 pb-12 px-4">
                {/* Instructions Section */}
                <div className="bg-white rounded-lg border border-orange-200 overflow-hidden mb-8 shadow-md">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 px-4">
                        <h3 className={`text-xl font-bold text-white flex items-center gap-2 ${fontClass}`}>
                            {/* <span className="text-2xl">📋</span> */}
                            {t.instructionTitle}
                        </h3>
                    </div>
                    <div className="p-6 space-y-4">
                        <p className={`text-base leading-relaxed text-gray-700 ${fontClass}`}>
                            {t.instructionText}
                        </p>
                        {/* <p className="text-sm italic text-gray-500 font-sans">
                            {t.markOnly}
                        </p> */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                                {/* <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex-shrink-0 mt-1"></div> */}
                                <p className={`text-base text-gray-800 ${fontClass}`}>
                                    {t.option1Dress}
                                </p>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-pink-50 border-l-4 border-pink-500 rounded-r-lg">
                                {/* <div className="w-6 h-6 rounded-full border-2 border-pink-500 flex-shrink-0 mt-1"></div> */}
                                <p className={`text-base text-gray-800 ${fontClass}`}>
                                    {t.option2Dress}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-sm border border-gray-100 overflow-hidden mb-12 shadow-lg">
                    <div className="bg-lightpink p-4 px-8 text-center border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800">{t.formTitle}</h2>
                    </div>

                    <div className="p- sm:p-8">
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
                                            <div key={key} className={`bg-gray-50 p-6 ${fontClass} rounded-sm border border-gray-200 shadow-sm relative`}>
                                                <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-orange-200">
                                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                                                        <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                                                            {index + 1}
                                                        </span>
                                                        {t.participantTitle}
                                                    </h3>
                                                    {fields.length > 1 && (
                                                        <Button
                                                            type="text"
                                                            danger
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => remove(name)}
                                                            className="flex items-center px-4 h-9 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
                                                        />
                                                    )}
                                                </div>

                                                <div className="space-y-4">
                                                    {index > 0 && (
                                                        <div className="mb-6 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                                            <Checkbox
                                                                onChange={(e) => e.target.checked && handleCopyPrevious(index)}
                                                                className={`${fontClass} text-sm font-bold text-[#901E3E]`}
                                                            >
                                                                {t.copyHeader}
                                                            </Checkbox>
                                                        </div>
                                                    )}

                                                    <Row gutter={[24, 16]}>
                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "fullName"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.naam}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <Input
                                                                    placeholder={t.naamPlaceholder}
                                                                    prefix={<UserOutlined className="text-gray-400 mr-2" />}
                                                                    className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 ${fontClass} text-base`}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "dob"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.dob}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <DatePicker
                                                                    placeholder={t.dobPlaceholder}
                                                                    format="DD-MM-YYYY"
                                                                    className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 ${fontClass} text-base`}
                                                                    style={{ height: '50px' }}
                                                                />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "gender"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.gender}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <Radio.Group className="w-full flex gap-6 pt-2">
                                                                    <Radio value="Male" className={`text-base font-medium text-gray-700 flex items-center !${fontClass}`}><span className="ml-1">{t.male}</span></Radio>
                                                                    <Radio value="Female" className={`text-base font-medium text-gray-700 flex items-center !${fontClass}`}><span className="ml-1">{t.female}</span></Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={24}>
                                                            <h4 className={`text-[#901E3E] font-bold text-lg mb-2 ${fontClass}`}>{t.address}</h4>
                                                            <Row gutter={[16, 16]}>
                                                                <Col xs={24} sm={12}>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, "address1"]}
                                                                        label={<span className={`text-sm font-bold text-gray-600 ${fontClass}`}>{t.address1}</span>}
                                                                        rules={[{ required: true, message: t.required }]}
                                                                    >
                                                                        <Input placeholder={t.addressPlaceholder} className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg ${fontClass}`} />
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col xs={24} sm={12}>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, "address2"]}
                                                                        label={<span className={`text-sm font-bold text-gray-600 ${fontClass}`}>{t.address2}</span>}
                                                                    >
                                                                        <Input placeholder={t.addressPlaceholder} className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg ${fontClass}`} />
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col xs={24} sm={8}>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, "city"]}
                                                                        label={<span className={`text-sm font-bold text-gray-600 ${fontClass}`}>{t.city}</span>}
                                                                        rules={[{ required: true, message: t.required }]}
                                                                    >
                                                                        <Input placeholder={t.city} className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg ${fontClass}`} />
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col xs={24} sm={8}>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, "state"]}
                                                                        label={<span className={`text-sm font-bold text-gray-600 ${fontClass}`}>{t.state}</span>}
                                                                        rules={[{ required: true, message: t.required }]}
                                                                    >
                                                                        <Select
                                                                            placeholder={t.state}
                                                                            showSearch
                                                                            filterOption={(input, option) =>
                                                                                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                                                                            }
                                                                            className={`w-full h-[45px] ${fontClass}`}
                                                                        >
                                                                            {states.map((s) => (
                                                                                <Select.Option key={s.value} value={s.value}>{s.label}</Select.Option>
                                                                            ))}
                                                                        </Select>
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col xs={24} sm={8}>
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, "pincode"]}
                                                                        label={<span className={`text-sm font-bold text-gray-600 ${fontClass}`}>{t.pincode}</span>}
                                                                        rules={[
                                                                            { required: true, message: t.required },
                                                                            { pattern: /^[0-9]{6}$/, message: t.validPincode }
                                                                        ]}
                                                                    >
                                                                        <Input placeholder={t.pincodePlaceholder} maxLength={6} className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg ${fontClass}`} />
                                                                    </Form.Item>
                                                                </Col>
                                                            </Row>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "mulVatan"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.mulVatan}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <Input placeholder={t.mulVatan} className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg ${fontClass} text-base`} />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "mobile"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.mobile}</span>}
                                                                rules={[
                                                                    { required: true, message: t.required },
                                                                    { pattern: /^[0-9]{10}$/, message: t.validMobile },
                                                                ]}
                                                            >
                                                                <Input placeholder="10 Digits" maxLength={10} className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg ${fontClass} text-base`} />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "altMobile"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.altMobile}</span>}
                                                                rules={[{ pattern: /^[0-9]{10}$/, message: t.validMobile }]}
                                                            >
                                                                <Input placeholder="10 Digits" maxLength={10} className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg ${fontClass} text-base`} />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "groupPrimaryMobile"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.groupPrimaryMobile}</span>}
                                                                rules={[
                                                                    { required: true, message: t.required },
                                                                    { pattern: /^[0-9]{10}$/, message: t.validMobile },
                                                                ]}
                                                            >
                                                                <Input placeholder="10 Digits" maxLength={10} className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg ${fontClass} text-base`} />
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24} sm={12}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "firstVachana"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.firstVachana}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <Radio.Group className="w-full flex gap-4">
                                                                    <Radio value="Yes" className={`text-base text-gray-700 !${fontClass}`}>{t.yes}</Radio>
                                                                    <Radio value="No" className={`text-base text-gray-700 !${fontClass}`}>{t.no}</Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>

                                                        <Col xs={24}>
                                                            <Form.Item
                                                                {...restField}
                                                                name={[name, "howKnow"]}
                                                                label={<span className={`text-[#901E3E] font-bold text-lg ${fontClass} leading-relaxed`}>{t.howKnow}</span>}
                                                                rules={[{ required: true, message: t.required }]}
                                                            >
                                                                <Form.Item noStyle shouldUpdate={(prev, curr) => prev.participants?.[index]?.howKnow !== curr.participants?.[index]?.howKnow}>
                                                                    {() => {
                                                                        const currentValue = form.getFieldValue(['participants', index, 'howKnow']);
                                                                        return (
                                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                                <CardRadio
                                                                                    value="Family/Guru Maharaj"
                                                                                    checked={currentValue === "Family/Guru Maharaj"}
                                                                                    onChange={(val) => {
                                                                                        const participants = form.getFieldValue("participants");
                                                                                        participants[index].howKnow = val;
                                                                                        form.setFieldsValue({ participants });
                                                                                    }}
                                                                                    fontClass={fontClass}
                                                                                >
                                                                                    {t.option1}
                                                                                </CardRadio>
                                                                                <CardRadio
                                                                                    value="Personal Contact/Relative"
                                                                                    checked={currentValue === "Personal Contact/Relative"}
                                                                                    onChange={(val) => {
                                                                                        const participants = form.getFieldValue("participants");
                                                                                        participants[index].howKnow = val;
                                                                                        form.setFieldsValue({ participants });
                                                                                    }}
                                                                                    fontClass={fontClass}
                                                                                >
                                                                                    {t.option2}
                                                                                </CardRadio>
                                                                                <CardRadio
                                                                                    value="Jain Group"
                                                                                    checked={currentValue === "Jain Group"}
                                                                                    onChange={(val) => {
                                                                                        const participants = form.getFieldValue("participants");
                                                                                        participants[index].howKnow = val;
                                                                                        form.setFieldsValue({ participants });
                                                                                    }}
                                                                                    fontClass={fontClass}
                                                                                >
                                                                                    {t.option3}
                                                                                </CardRadio>
                                                                                <CardRadio
                                                                                    value="Other"
                                                                                    checked={currentValue === "Other"}
                                                                                    onChange={(val) => {
                                                                                        const participants = form.getFieldValue("participants");
                                                                                        participants[index].howKnow = val;
                                                                                        form.setFieldsValue({ participants });
                                                                                    }}
                                                                                    fontClass={fontClass}
                                                                                >
                                                                                    {t.other}
                                                                                </CardRadio>
                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Form.Item>
                                                            </Form.Item>
                                                            <Form.Item
                                                                noStyle
                                                                shouldUpdate={(prevValues, currentValues) => {
                                                                    return prevValues.participants?.[index]?.howKnow !== currentValues.participants?.[index]?.howKnow;
                                                                }}
                                                            >
                                                                {({ getFieldValue }) =>
                                                                    getFieldValue(['participants', index, 'howKnow']) === 'Other' ? (
                                                                        <Form.Item
                                                                            {...restField}
                                                                            name={[name, "otherSource"]}
                                                                            rules={[{ required: true, message: t.required }]}
                                                                            className="mt-2"
                                                                        >
                                                                            <Input placeholder={t.otherPlaceholder} className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg ${fontClass}`} />
                                                                        </Form.Item>
                                                                    ) : null
                                                                }
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        ))}

                                        <Form.Item className="mb-0">
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                                className={`h-14 text-lg font-bold !${fontClass} border-2 border-dashed border-gray-400 text-gray-600 hover:text-blue-600 hover:border-blue-500 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-50`}
                                            >
                                                {t.addParticipant}
                                            </Button>
                                        </Form.Item>
                                    </div>
                                )}
                            </Form.List>

                            <div className="pt-6 border-t border-gray-100">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    loading={loading}
                                    className={`h-14 text-xl !${fontClass} font-bold !pt-1 !bg-gradient-to-r from-orange-500 to-yellow-600 border-none hover:from-orange-600 hover:to-yellow-700 shadow-lg rounded-xl transform hover:-translate-y-0.5 transition-all duration-300`}
                                >
                                    {loading ? t.submitting : t.submit}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-sm shadow-sm border border-lightpink overflow-hidden group hover:shadow-2xl transition-all duration-300 mb-12">
                    <div className="bg-lightpink p-4 text-center">
                        <h3 className={`text-2xl font-bold text-gray-800 flex items-center justify-center gap-2 ${fontClass}`}>
                            📍 {language === "gu" ? "મંગલ સ્થળ" : "मंगल स्थल"}
                        </h3>
                        <p className={`text-center font-medium mt-1 ${fontClass}`}>{language === "gu" ? "શ્રી જીવદયા ધામ, વસઈ, મુંબઈ" : "श्री जीवदया धाम, वसई, मुंबई"}</p>
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
                </div>
            </div>

            {/* Success Modal */}
            <Modal
                open={successModalVisible}
                onCancel={() => setSuccessModalVisible(false)}
                footer={null}
                centered
                width={500}
                className={fontClass}
                closeIcon={<CloseCircleOutlined className="text-2xl text-gray-400 hover:text-gray-600" />}
            >
                <div className="text-center py-6 px-4">
                    <div className="mb-6">
                        <CheckCircleOutlined className="text-6xl text-green-500 sm:text-7xl " />
                    </div>
                    <h2 className={`text-2xl sm:text-3xl font-bold text-black mb-3 ${fontClass}`}>{t.successTitle}</h2>
                    <p className={`text-base sm:text-lg text-gray-600 mb-6 ${fontClass}`}>{t.successMessage}</p>

                    <div className="bg-white p-4 mb-6">
                        <h3 className={`text-lg sm:text-xl font-bold text-black mb-4 ${fontClass}`}>{t.registrationCodeTitle}</h3>
                        <div className="space-y-3">
                            {registrationCodes.map((code, index) => (
                                <div key={index} className="bg-gray-200 rounded-sm p-3">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className={`text-sm sm:text-base font-semibold text-gray-600 ${fontClass}`}>
                                            {code.name}
                                        </span>
                                        <span className={`text-lg sm:text-xl font-bold text-black font-mono tracking-wider bg-gray-100 px-3 py-1`}>
                                            {code.code}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => setSuccessModalVisible(false)}
                        className={`!bg-black !rounded-sm border-none h-12 text-lg font-bold px-8 hover:bg-gray-800 ${fontClass}`}
                    >
                        {t.close}
                    </Button>
                </div>
            </Modal>
        </div>
    );
}