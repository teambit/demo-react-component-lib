/** Adds query params to avatar image, according to the type of the hosting service.
  - For Gravatar, adds size
  - For ImgIX, adds size, default background, and scaling method **/

export function addAvatarQueryParams(
  url: string,
  size: string | number,
  defaultAvatarBgColor: string
) {
  if (!url) return url;

  const isQuestionExisting = url.indexOf('?') > -1;
  const controlChar = isQuestionExisting ? '&' : '?';
  const gravatarParams: string[] = [`size=${size}`];
  const imgixParams = [
    `w=${size}`,
    `h=${size}`,
    `fill=fillmax`,
    `bg=${defaultAvatarBgColor}`,
  ];

  const e: string[] = [];

  const params: string[] = e.concat(gravatarParams, imgixParams);

  return `${url}${controlChar}${params.join('&')}`;
}
