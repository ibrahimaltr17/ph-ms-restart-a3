export const formatNumber = (num) => {
    const format = (value, suffix) => {
        const formatted = (value).toFixed(1);
        return formatted.endsWith('.0')
            ? formatted.slice(0, -2) + suffix
            : formatted + suffix;
    };

    if (num >= 1_000_000_000) return format(num / 1_000_000_000, 'B');
    if (num >= 1_000_000) return format(num / 1_000_000, 'M');
    if (num >= 1_000) return format(num / 1_000, 'K');

    return num.toString();
};