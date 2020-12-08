const createConstraint = (constraintName = "", value = "", type = 1, likeSearch = false) => {
    return {
        _field: constraintName,
        _initialValue: value,
        _finalValue: value,
        _type: type,
        _likeSearch: likeSearch
    }
};

export default createConstraint;
