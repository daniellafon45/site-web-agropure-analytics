export function isServiceNotConfiguredError(message: string): boolean {
  return /n'est pas configuré|not configured|service d'envoi/i.test(message);
}
