import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown, Search, X } from 'lucide-react';
import { clsx } from 'clsx';

interface DropdownProps {
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
  label: string;
}

export default function Dropdown({ options, selected, onChange, placeholder, label }: DropdownProps) {
  const [query, setQuery] = useState('');

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  const toggleOption = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <Listbox value={selected} onChange={onChange} multiple>
      {({ open }) => (
        <div className="relative">
          <Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <span className="block truncate">
                {selected.length === 0 ? (
                  <span className="text-gray-500">{placeholder}</span>
                ) : (
                  `${selected.length} selected`
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className="sticky top-0 z-10 bg-white px-3 py-2">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      className="w-full rounded-md border-0 pl-9 pr-3 py-1.5 text-sm leading-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      placeholder="Search..."
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="px-3 py-2">
                  {selected.length > 0 && (
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md py-1.5 px-2 text-sm text-gray-900 hover:bg-gray-100"
                      onClick={() => onChange([])}
                    >
                      Clear all
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  )}
                </div>

                {filteredOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      clsx(
                        'relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900',
                        active && 'bg-blue-600 text-white'
                      )
                    }
                    value={option}
                    onClick={() => toggleOption(option)}
                  >
                    {({ active }) => (
                      <>
                        <span className="block truncate">{option}</span>
                        {selected.includes(option) && (
                          <span
                            className={clsx(
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                              active ? 'text-white' : 'text-blue-600'
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}