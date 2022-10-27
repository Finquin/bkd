const authMiddleware = (req, res, next) => {
    console.info("Auditando la solicitud: ", req.body);
    if (req.body.id === 5) {
        return res.status(400).json({
            success: false,
            message: "No me gusta el 5"
        });
    }
    next();
};
module.exports = authMiddleware;
