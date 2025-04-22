import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { clsx } from 'clsx';

interface RadixMultiSelectDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export default function RadixMultiSelectDropdown({ label, options, selected, onChange, placeholder = 'Select...' }: RadixMultiSelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filteredOptions = useMemo(
    () => options.filter(option => option.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };
  const clearAll = () => onChange([]);
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
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
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={4}
            className="z-50 mt-1 max-h-[220px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-300 min-w-[220px]"
          >
            <div className="sticky top-0 z-10 bg-white px-3 py-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-md border-0 pl-9 pr-3 py-1.5 text-sm leading-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  placeholder="Search..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="px-3 py-2">
              {selected.length > 0 && (
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md py-1.5 px-2 text-sm text-gray-900 hover:bg-gray-100 mb-2"
                  onClick={clearAll}
                >
                  Clear all
                </button>
              )}
            </div>
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2 text-gray-500 text-sm">No options found</div>
            )}
            {filteredOptions.map(option => (
              <DropdownMenu.Item
                key={option}
                className={clsx(
                  'relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 outline-none flex items-center gap-2',
                  selected.includes(option) ? 'bg-blue-50' : '',
                  'hover:bg-blue-600 hover:text-white'
                )}
                onSelect={() => toggleOption(option)}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  readOnly
                  className="form-checkbox rounded text-blue-600 border-gray-300 focus:ring-0 mr-2"
                  tabIndex={-1}
                />
                <span className="block truncate flex-1">{option}</span>
                {selected.includes(option) && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
