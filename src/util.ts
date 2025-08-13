export function getInitials(name: string): string {
  const parts = name.trim().split(' ')
  const first = parts[0]?.[0] || ''
  const last = parts[1]?.[0] || ''
  return (first + last).toUpperCase()
}