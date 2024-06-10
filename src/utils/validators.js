export const validateDay = (value) => {
    const day = parseInt(value);

    if (isNaN(value)) {
        return "Invalid day";
    }

    if (day < 1 || day > 31) {
        return "Invalid day";
    }
};

export const validateMonth = (value) => {
    if (isNaN(value)) {
        return "Invalid month";
    }
    
    const month = parseInt(value);
    return month > 0 && month <= 12 || "Invalid month";
};

export const validateYear = (value) => {
    if (isNaN(value)) {
        return "Invalid year";
    }
    
    const year = parseInt(value);
    const currentYear = new Date().getFullYear();
    return year > 1900 && year <= currentYear || "Invalid year";
};