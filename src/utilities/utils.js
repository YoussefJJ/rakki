export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function capitalizeEachFirstLetter(string) {
  return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}

export function formatDate(year, month, day) {
    const date = new Date(
        year,
        month,
        day
      ).toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return date;
}

