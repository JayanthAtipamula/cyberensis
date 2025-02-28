/**
 * Checks if a password contains symbols
 */
export function hasSymbols(password: string): boolean {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
}

/**
 * Checks if a password contains numbers
 */
export function hasNumbers(password: string): boolean {
  return /[0-9]+/.test(password);
}

/**
 * Checks if a password contains uppercase letters
 */
export function hasUpperCase(password: string): boolean {
  return /[A-Z]+/.test(password);
}

/**
 * Checks if a password contains lowercase letters
 */
export function hasLowerCase(password: string): boolean {
  return /[a-z]+/.test(password);
}

/**
 * Calculates the estimated time to crack a password
 */
export function calculateCrackTime(
  password: string,
  hasSymbols: boolean,
  hasNumbers: boolean,
  hasUpperCase: boolean,
  hasLowerCase: boolean
): string {
  if (password.length === 0) return '0 second';

  // Calculate possible character set size
  let charSetSize = 0;
  if (hasLowerCase) charSetSize += 26;
  if (hasUpperCase) charSetSize += 26;
  if (hasNumbers) charSetSize += 10;
  if (hasSymbols) charSetSize += 33;

  // If no character types are detected, assume at least lowercase
  if (charSetSize === 0) charSetSize = 26;

  // Calculate possible combinations
  const combinations = Math.pow(charSetSize, password.length);
  
  // Assume 10 billion guesses per second for a modern computer
  const guessesPerSecond = 10000000000;
  
  // Calculate time in seconds
  const seconds = combinations / guessesPerSecond;
  
  // Convert to human-readable format
  if (seconds < 1) return 'less than a second';
  if (seconds < 60) return `${Math.floor(seconds)} seconds`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.floor(seconds / 86400)} days`;
  if (seconds < 315360000) return `${Math.floor(seconds / 31536000)} years`;
  
  const billions = seconds / 31536000 / 1000000000;
  if (billions < 1000) return `${billions.toFixed(2)} billion years`;
  
  return 'practically forever';
}

/**
 * Generates a random password based on the provided options
 */
export function generatePassword(options: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}): string {
  let charset = '';
  let newPassword = '';
  
  if (options.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (options.includeNumbers) charset += '0123456789';
  if (options.includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  // Ensure at least one character set is selected
  if (charset === '') {
    charset = 'abcdefghijklmnopqrstuvwxyz';
  }
  
  // Generate password
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset[randomIndex];
  }
  
  return newPassword;
}

/**
 * Evaluates password strength and returns a color class
 */
export function getStrengthColor(
  length: number,
  hasSymbols: boolean,
  hasNumbers: boolean,
  hasUpperCase: boolean,
  hasLowerCase: boolean
): string {
  if (length === 0) return 'bg-gray-200';
  
  const criteriaCount = [hasSymbols, hasNumbers, hasUpperCase, hasLowerCase].filter(Boolean).length;
  
  if (length < 8 || criteriaCount < 2) return 'bg-red-500';
  if (length < 12 || criteriaCount < 3) return 'bg-yellow-500';
  if (length < 16 || criteriaCount < 4) return 'bg-green-500';
  
  return 'bg-green-600';
}

/**
 * Gets a text description of password strength
 */
export function getStrengthText(
  length: number,
  hasSymbols: boolean,
  hasNumbers: boolean,
  hasUpperCase: boolean,
  hasLowerCase: boolean
): string {
  if (length === 0) return 'No Password';
  
  const criteriaCount = [hasSymbols, hasNumbers, hasUpperCase, hasLowerCase].filter(Boolean).length;
  
  if (length < 8 || criteriaCount < 2) return 'Very Weak';
  if (length < 12 || criteriaCount < 3) return 'Weak';
  if (length < 16 || criteriaCount < 4) return 'Strong';
  
  return 'Very Strong';
} 