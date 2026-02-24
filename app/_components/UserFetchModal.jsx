import React from 'react';
import { Modal, Button, Descriptions } from 'antd';
import { maskData } from '@/app/utils/userFetchUtils';

const translations = {
    hindi: {
        title: "वाचक का विवरण मिला",
        description: "हमें इस मोबाइल नंबर के लिए मौजूदा विवरण मिले हैं। क्या आप इन विवरणों के साथ आगे बढ़ना चाहेंगे?",
        phone: "मोबाइल नंबर",
        name: "नाम",
        surname: "उपनाम",
        address: "पता",
        pincode: "पिनकोड",
        city: "शहर",
        state: "राज्य",
        edit: "बदलें",
        proceed: "आगे बढ़ें"
    },
    gujarati: {
        title: "વાચકની વિગતો મળી",
        description: "આ મોબાઇલ નંબર માટે અમને હાલની વિગતો મળી છે. શું તમે આ વિગતો સાથે આગળ વધવા માંગો છો?",
        phone: "મોબાઈલ નંબર",
        name: "નામ",
        surname: "અટક",
        address: "સરનામું",
        pincode: "પિનકોડ",
        city: "શહેર",
        state: "રાજ્ય",
        edit: "બદલો",
        proceed: "આગળ વધો"
    },
    english: {
        title: "User Details Found",
        description: "We found existing details for this mobile number. Would you like to proceed with these details?",
        phone: "Mobile Number",
        name: "Name",
        surname: "Surname",
        address: "Address",
        pincode: "Pincode",
        city: "City",
        state: "State",
        edit: "Change",
        proceed: "Proceed"
    }
};

const UserFetchModal = ({ visible, data, onConfirm, onCancel, language = 'hindi' }) => {
    if (!data) return null;

    const t = translations[language] || translations.hindi;
    const fontClass = language === 'gujarati' ? 'font-anek' : language === 'hindi' ? 'font-heading' : 'font-sans';

    return (
        <Modal
            title={<span className={fontClass}>{t.title}</span>}
            open={visible}
            onCancel={onCancel}
            footer={[
                <Button key="edit" onClick={onCancel} className={fontClass}>
                    {t.edit}
                </Button>,
                <Button key="proceed" type="primary" onClick={onConfirm} className={fontClass}>
                    {t.proceed}
                </Button>,
            ]}
            centered
        >
            <p className={`mb-4 ${fontClass}`}>
                {t.description}
            </p>
            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label={<span className={fontClass}>{t.phone}</span>} className={fontClass}>{data.phoneNumber}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.name}</span>} className={fontClass}>{maskData(data.firstName)}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.surname}</span>} className={fontClass}>{maskData(data.lastName)}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.address}</span>} className={fontClass}>{maskData(data.address?.street, 'address')}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.pincode}</span>} className={fontClass}>{maskData(data.address?.pincode)}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.city}</span>} className={fontClass}>{maskData(data.address?.city)}</Descriptions.Item>
                <Descriptions.Item label={<span className={fontClass}>{t.state}</span>} className={fontClass}>{maskData(data.address?.state)}</Descriptions.Item>
            </Descriptions>
        </Modal>
    );
};

export default UserFetchModal;
