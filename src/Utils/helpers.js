export const getParams = (value) => {
    const params = new URLSearchParams(document.location.search.substring(1));
    return params.get(value)
}
