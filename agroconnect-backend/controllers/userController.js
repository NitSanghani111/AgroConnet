const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, userType, password, username, country, state, documentNo } = req.body;

        // Trim whitespace from inputs to avoid issues with username or password
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        // Check for existing username or email
        const existingUser = await User.findOne({ $or: [{ username: trimmedUsername }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already taken' });
        }

        // Handle file paths
        const proofDocument = req.files?.proofDocument?.[0]?.path || null;
        const profilePhoto = req.files?.profilePhoto?.[0]?.path || null;

    

        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            userType,
            password,  // Store the hashed password
            username: trimmedUsername,
            country,
            state,
            documentNo,
            proofDocument,
            profilePhoto,
        });

        await user.save();

        // Generate JWT token using user._id
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Trim whitespace from inputs
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        console.log("Received login request:", { username: trimmedUsername, password: trimmedPassword });

        // Find user by username
        const user = await User.findOne({ username: trimmedUsername });
        if (!user) {
            console.log("User not found:", trimmedUsername);
            return res.status(400).json({ message: 'User not found' });
        }

        // Log the password stored in the database (hashed)
        console.log("Stored hashed password:", user.password);

        // Log the plain password entered by the user
        console.log("Entered plain-text password:", trimmedPassword);

        // Check if the password matches the stored hashed password
        const isMatch = await bcrypt.compare(trimmedPassword, user.password);
        console.log("Password match result:", isMatch); // Log the result to see if it returns true or false

        if (!isMatch) {
            console.log("Invalid credentials for user:", trimmedUsername);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Send response
        res.status(200).json({
            message: 'Login successful',
            token,
            isRegistered: true // Flag to handle redirection in frontend
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { registerUser, loginUser };
