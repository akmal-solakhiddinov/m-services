import path from 'path';

const displayableImageTypes = [
  'jpeg',
  'jpg',
  'png',
  'gif',
  'bmp',
  'webp',
  'svg',
  'tiff',
  'tif',
  'ico',
];
const displayableVideoTypes = ['mp4', 'mov', 'wmv', 'flv', 'avi', 'mkv', 'webm'];
const displayableAudioTypes = ['mp3', 'wav', 'aac', 'ogg', 'flac'];

export const determineFileType = (fileName: string) => {
  const extension = fileName?.split('.').pop()?.toLowerCase();

  if (!extension) return 'FILE'; // if no extension at all

  if (displayableImageTypes.includes(extension)) {
    return 'IMAGE';
  }
  if (displayableVideoTypes.includes(extension)) {
    return 'VIDEO';
  }
  if (displayableAudioTypes.includes(extension)) {
    return 'AUDIO';
  }

  return 'FILE';
};

export const createFileName = (fileType: string, originalName = 'file-01'): string => {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10);
  const formattedTime = date.toTimeString().split(' ')[0].replace(/:/g, '');
  const extension = path.extname(originalName);

  return `${fileType}-${formattedDate}-${formattedTime}${extension}`;
};
