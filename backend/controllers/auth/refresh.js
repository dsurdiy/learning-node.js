const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = process.env;

const refresh = async (req, res) => {
  const { refreshToken: token } = req.body;

  try {
    const { id } = jwt.verify(token, REFRESH_TOKEN_SECRET_KEY);
    const user = await User.findById(id);

    if (!user || user.refreshToken !== token) {
      throw new Error("Token expired");
    }

    const payload = {
      id: user._id,
    };

    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: "7d",
    });

    await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    throw RequestError(401, error.message);
  }
};

module.exports = refresh;
