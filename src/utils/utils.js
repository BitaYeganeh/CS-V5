// Format the date to a string
function formatDate(date) {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
}
export { formatDate };
//# sourceMappingURL=utils.js.map