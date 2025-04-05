export const getInitials = (name: string): string => {
  if (!name || typeof name !== 'string') return '';
  
  const names = name.trim().split(/\s+/);
  
  const firstNameInitial = names[0]?.charAt(0)?.toUpperCase() || '';
  
  const lastNameInitial = names.length > 1 
    ? names[names.length - 1]?.charAt(0)?.toUpperCase() 
    : '';

  return `${firstNameInitial}${lastNameInitial}`;
};