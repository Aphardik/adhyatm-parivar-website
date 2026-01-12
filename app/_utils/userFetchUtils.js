import axios from 'axios';

/**
 * Fetches user details by phone number.
 * @param {string} phoneNumber - The 10-digit mobile number.
 * @returns {Promise<Object|null>} - The user data or null if not found/error.
 */
export const fetchUserByPhone = async (phoneNumber) => {
  try {
    const response = await axios.get(`https://getuserbyphone-fahifz22ha-uc.a.run.app/?phoneNumber=${phoneNumber}`);
    if (response.data && response.status === 200 && response.data.success) {
      const rawData = response.data.data;
      if (!rawData) return null;

      // Normalize data from Gujarati keys or standard keys
      return {
        firstName: rawData.firstName || rawData["નામ"] || "",
        lastName: rawData.lastName || rawData["ઉપનામ"] || "",
        phoneNumber: rawData.phoneNumber || rawData["મોબાઇલ નંબર"] || phoneNumber,
        address: {
          street: rawData.address?.street || rawData["એડ્રેસ"] || "",
          area: rawData.address?.area || "",
          city: rawData.address?.city || rawData["શહેર"] || "",
          state: rawData.address?.state || rawData["રાજ્ય"] || "",
          pincode: rawData.address?.pincode || rawData["પિનકોડ"] || "",
        }
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching user by phone:", error);
    return null;
  }
};

/**
 * Masks a string based on the type of data.
 * @param {string} value - The value to mask.
 * @param {string} type - 'address' or 'default'.
 * @returns {string} - The masked string.
 */
export const maskData = (value, type = 'default') => {
  if (!value) return '';
  const str = String(value);

  if (type === 'address') {
    if (str.length <= 8) return str; // Too short to mask nicely
    const first4 = str.substring(0, 4);
    const last4 = str.substring(str.length - 4);
    return `${first4} xxxxxxx ${last4}`;
  } else if (type === 'mobile') {
    if (str.length < 4) return str;
    const first2 = str.substring(0, 2);
    const last2 = str.substring(str.length - 2);
    return `${first2}xxxxxx${last2}`;
  }
  else {
    // Default: Show first 2 chars, mask rest
    if (str.length <= 2) return str;
    const first2 = str.substring(0, 2);
    return `${first2}xxxxxxx`;
  }
};
