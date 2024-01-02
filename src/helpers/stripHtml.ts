export const stripHtmlfromTags = (html: string): string => {
  let pureString = html.replace(/(<([^>]+)>)/gi, '')
  return pureString.substring(0, 140) + '...'
}
