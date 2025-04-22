import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExternalLink, X } from 'lucide-react';
import { CompanyData } from './PortfolioCard';

interface PortfolioModalProps {
  company: CompanyData;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ company, isOpen, onClose }: PortfolioModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header with close button */}
                <div className="bg-[#0f172a] p-6 relative">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-white">
                    {company.name}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-0.5 text-sm font-medium text-white">
                      {company.industry}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-0.5 text-sm font-medium text-white">
                      {company.region}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Logo */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-48 h-auto object-contain"
                      />
                    </div>

                    {/* Right Column - Company Info */}
                    <div className="space-y-6">
                      {/* Company Details */}
                      <div className="space-y-4">
                        {company.founded && (
                          <p className="text-sm text-gray-600">
                            <strong>Founded:</strong> {company.founded}
                          </p>
                        )}
                        {company.acquired && (
                          <p className="text-sm text-gray-600">
                            <strong>Acquired:</strong> {company.acquired}
                          </p>
                        )}
                        {company.headquarters && (
                          <p className="text-sm text-gray-600">
                            <strong>Headquarters:</strong> {company.headquarters}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <div className="prose prose-sm">
                        {company.descriptionFull.split('\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-600 mb-2">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* CTA Button */}
                      {company.website && (
                        <div className="mt-8">
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
