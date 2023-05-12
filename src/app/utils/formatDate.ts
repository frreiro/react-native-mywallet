export const formatDate = (date: Date) => {
  const ISO = new Date(date).toISOString();
  return String(ISO).split('T')[0].split('-').reverse().slice(0, -1).join('/');
};
