// const dev = process.env.NODE_ENV !== 'production'
// const baseUrl = 'http://139.196.191.228:19000'

// export const baseProxy = '/baseAddress'

// const replaceByDev = (str: string) => {
//   if (dev) return str.replace(baseUrl, baseProxy)
//   return str
// }

// 默认列表
export const apiDefaultAgentList = '/prompt/agent/list'
// export const apiDefaultAgentList = 'http://127.0.0.1:8000/prompt/agent/list'
// 随便聊聊问题列表
export const apiRandomHintList = 'http://127.0.0.1:8000/prompt/question/hint?hint_type=random'
