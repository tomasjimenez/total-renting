'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export default function ContactFormPopup() {
  const { isContactPopupOpen: isOpen, closeContactPopup: onClose } = useContactPopup();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar el formulario, por ejemplo, a una API.
    alert('Mensaje enviado con éxito!');
    onClose(); // Cerrar el popup después de enviar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <button
          type="button"
          className="btn btn-sm btn-circle absolute right-4 top-4"
          onClick={onClose}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Contactar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="label">
              <span className="label-text">Nombre y Apellidos</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              <span className="label-text">Correo Electrónico</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@ejemplo.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="label">
              <span className="label-text">Teléfono</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej: +34 123 456 789"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="label">
              <span className="label-text">Ubicación</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ciudad o provincia"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
} 