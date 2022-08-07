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

export function getRegionName(region) {
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
    );
    const regionName = regionNames.of(region);
    return regionName;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
