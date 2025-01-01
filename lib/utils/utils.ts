export const domainToUrl = (domain: string, path: string = '') => {
  return `https://${domain}${path}`
}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/[^\d]/g, '')
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
} 