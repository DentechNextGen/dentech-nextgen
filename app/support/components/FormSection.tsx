import { useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          target?: string
          region?: string
          css?: string
        }) => void
      }
    }
  }
}

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <EnvelopeIcon className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-gray-600">Email:</p>
            <a href="mailto:support@dentech.com" className="text-green-600 hover:text-green-700">
              support@dentech.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <PhoneIcon className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-gray-600">Support:</p>
            <a href="tel:+18665498702" className="text-green-600 hover:text-green-700">
              +1 (866)-549-8702
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <PhoneIcon className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-gray-600">General:</p>
            <a href="tel:+18002334998" className="text-green-600 hover:text-green-700">
              +1 (800)-233-4998
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <ClockIcon className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-gray-600">Hours:</p>
            <p className="text-gray-800">Monday - Friday: 8:30 - 5:00 EST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "5715587",
          formId: "11505929-7ac7-4a5f-8e07-8a7b81eb0d0c",
          target: "#hubspot-form-container",
          css: `
            .hs-form {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .hs-form input, .hs-form textarea, .hs-form select {
              width: 100% !important;
              padding: 0.75rem 1rem !important;
              border-radius: 0.5rem !important;
              border: 1px solid #e5e7eb !important;
              background-color: white !important;
            }
            .hs-form input:focus, .hs-form textarea:focus, .hs-form select:focus {
              outline: none !important;
              ring: 2px !important;
              ring-offset: 2px !important;
              ring-primary-600 !important;
              border-color: #2563eb !important;
            }
            .hs-form label {
              font-weight: 500 !important;
              color: #111827 !important;
              margin-bottom: 0.5rem !important;
            }
            .hs-form-required {
              color: #dc2626 !important;
            }
            .hs-error-msg {
              color: #dc2626 !important;
              margin-top: 0.25rem !important;
              font-size: 0.875rem !important;
            }
            .hs-button {
              background-color: #2563eb !important;
              color: white !important;
              padding: 0.75rem 1.5rem !important;
              border-radius: 0.5rem !important;
              font-weight: 600 !important;
              transition: background-color 0.2s !important;
              border: none !important;
              cursor: pointer !important;
            }
            .hs-button:hover {
              background-color: #1d4ed8 !important;
            }
            .hs-richtext {
              margin-bottom: 1rem !important;
            }
            .submitted-message {
              color: #059669 !important;
              font-weight: 500 !important;
              text-align: center !important;
              padding: 1rem !important;
            }
          `
        });
      }
    };

    return () => {
      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Support Form</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Need assistance with Dentech or have any questions? Fill out this form and our
          dedicated support team will get back to you promptly to ensure your practice runs smoothly.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div id="hubspot-form-container" className="min-h-[500px]" />
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default FormSection; 