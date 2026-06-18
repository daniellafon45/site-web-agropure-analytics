"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getCountryByIso,
  PHONE_COUNTRIES,
  type PhoneCountry,
} from "@/lib/phone-countries";
import { cn } from "@/lib/utils";

type PhoneInputProps = {
  countryIso: string;
  value: string;
  onCountryChange: (iso: string) => void;
  onNumberChange: (value: string) => void;
  placeholder?: string;
  countryLabel?: string;
  inputClassName?: string;
};

export function PhoneInput({
  countryIso,
  value,
  onCountryChange,
  onNumberChange,
  placeholder,
  countryLabel,
  inputClassName,
}: PhoneInputProps) {
  const selected = getCountryByIso(countryIso);

  return (
    <div className="mt-1 flex gap-2">
      <Select value={countryIso} onValueChange={onCountryChange}>
        <SelectTrigger
          aria-label={countryLabel}
          className="h-auto w-[7.5rem] shrink-0 rounded-lg border border-input bg-background px-2 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-ring"
        >
          <SelectValue>
            <span className="flex items-center gap-1.5">
              <span aria-hidden>{selected.flag}</span>
              <span>+{selected.dialCode}</span>
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-80 w-[min(100vw-2rem,20rem)]">
          {PHONE_COUNTRIES.map((country: PhoneCountry) => (
            <SelectItem key={country.iso2} value={country.iso2}>
              <span className="flex items-center gap-2">
                <span aria-hidden>{country.flag}</span>
                <span>{country.name}</span>
                <span className="text-muted-foreground">+{country.dialCode}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={value}
        onChange={(e) => onNumberChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          inputClassName,
        )}
      />
    </div>
  );
}
