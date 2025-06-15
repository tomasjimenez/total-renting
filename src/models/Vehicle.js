"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var mongoose_1 = require("mongoose");
var vehicleSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
            type: String,
            required: true
        }],
    features: {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        mileage: {
            type: Number,
            required: true
        },
        fuelType: {
            type: String,
            required: true
        },
        transmission: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});
exports.Vehicle = mongoose_1.default.models.Vehicle || mongoose_1.default.model('Vehicle', vehicleSchema);
