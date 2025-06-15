import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
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
})

export const Vehicle = mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema) 