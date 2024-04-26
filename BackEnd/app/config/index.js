const config = {
    app: {
        port: process.env.PORT || 3001,  // Default to 3000 if process.env.PORT is not defined
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/QuanLyThuVien',  // Default URI
    }
};

module.exports = config;
