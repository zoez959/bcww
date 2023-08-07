import defaultSettings from '@/settings'

const title = defaultSettings.title || '编程娃娃积分管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
