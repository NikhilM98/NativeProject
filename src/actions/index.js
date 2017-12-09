export const selectUser = (userId) => {
    return {
        type: 'select_user',
        payload: userId
    };
};
