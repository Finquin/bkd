const errorMidadleware = (_req, res, err) => {
    res.status(500).json({
        sucess: false,
        // eslint-disable-next-line
        error: err.message
    });
};

module.exports = errorMidadleware;
