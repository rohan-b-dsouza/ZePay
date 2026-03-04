import mongoose from "mongoose"
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0 // paise
    }
});

const Account = mongoose.model('Account', accountSchema);
export default Account;


