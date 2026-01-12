import { useState, useEffect, useRef } from 'react';
import { fetchUserByPhone } from '../_utils/userFetchUtils';
import { message } from 'antd';

/**
 * Custom hook to fetch user details when phone number is entered (10 digits) with debounce.
 * @param {string} phoneNumber - The current phone number input value.
 * @param {function} onFetchSuccess - Callback when user is found.
 * @returns {Object} - { loading }
 */
const useUserFetch = (phoneNumber, onFetchSuccess) => {
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef(null);
    const lastFetchedNumber = useRef("");

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // If number changed (reset or user typing back), we might want to allow re-fetching 
        // but only if it's a DIFFERENT number than what we just successfully fetched.
        // Support 10 digits OR 11 digits starting with 0.
        if (phoneNumber && /^(0\d{10}|\d{10})$/.test(phoneNumber)) {
            if (phoneNumber === lastFetchedNumber.current) {
                return; // Already matched this number, don't trigger again
            }

            setLoading(true);
            timeoutRef.current = setTimeout(async () => {
                try {
                    const userData = await fetchUserByPhone(phoneNumber);
                    if (userData) {
                        lastFetchedNumber.current = phoneNumber;
                        onFetchSuccess(userData);
                    }
                } catch (error) {
                    console.error("Error in useUserFetch:", error);
                } finally {
                    setLoading(false);
                }
            }, 1000); // 1-second debounce
        } else {
            setLoading(false);
            // Reset if user clears or types something invalid, allowing re-fetch if they fix it
            if (!phoneNumber || phoneNumber.length < 10) {
                lastFetchedNumber.current = "";
            }
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [phoneNumber, onFetchSuccess]);

    return { loading };
};

export default useUserFetch;
