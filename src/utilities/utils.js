export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function capitalizeEachFirstLetter(string) {
  return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}

export function formatDate(year, month, day) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  if (!year) {
    delete options.year;
  }
  if (!month) {
    delete options.month;
  }
  if (!day) {
    delete options.day;
  }
  
  if (Object.keys(options).length === 0)
    return null;
  
  const date = new Date(
      year,
      month - 1,
      day
    ).toLocaleDateString("en-EN", options);
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

export const getAnimeCover = (anime) => {
  if (anime.bannerImage) {
    return anime.bannerImage;
  }
  if (anime.coverImage) {
    return anime.coverImage.extraLarge || anime.coverImage.large || anime.coverImage.medium; 
  } else {
    return null;
  }
}

export const getAnimeImage = (anime) => {
  if (anime.coverImage) {
    return anime.coverImage.extraLarge || anime.coverImage.large || anime.coverImage.medium; 
  } else {
    return null;
  }
}

export const getFirstNWords = (n, paragraph) => {
  const words = paragraph.split(' ');
  const firstNWords = words.slice(0, n);
  return firstNWords.join(' ');
} 

export const formatStatus = (status) => {
  switch (status) {
    case 'RELEASING':
      return 'Releasing';
    case 'FINISHED':
      return 'Finished';
    case 'NOT_YET_RELEASED':
      return 'Not yet released';
    case 'CANCELLED':
      return 'Cancelled';
    default:
      return 'Unknown';
  }
}

export const getFormat = (format) => {
  switch (format) {
    case 'TV':
      return 'TV';
    case 'OVA':
      return 'OVA';
    case 'MOVIE':
      return 'Movie';
    case 'SPECIAL':
      return 'Special';
    case 'ONA':
      return 'ONA';
    case 'MUSIC':
      return 'Music';
    case 'MANGA':
      return 'Manga';
    case 'NOVEL':
      return 'Novel';
    case 'ONE_SHOT':
      return 'One-shot';
    case 'TV_SHORT':
      return 'TV Short';
    default:
      return 'Unknown';
  }
}

export const removeTags = (str) => {
  return str.replace(/(<([^>]+)>)/ig, '')
}
