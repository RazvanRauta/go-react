import axios, { AxiosError, Method } from 'axios'
import { useEffect, useState } from 'react'

import { IErrorResponse } from '@/types'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const useData = <T>(
  url: string,
  method: Method,
  body?: any
): [boolean, string | null, T | null] => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    setLoading(true)
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: method,
          data: body,
          signal: controller.signal,
        })
        const data = response?.data
        if (!ignore) {
          setData(data)
        }
      } catch (err: any) {
        const error = err as Error | AxiosError<IErrorResponse>

        if (axios.isAxiosError(error)) {
          if (error.code === AxiosError.ERR_CANCELED) {
            console.info(`The request to "${url}" was canceled`)
            return
          }
          if (!ignore) {
            setError(error?.response?.data?.error?.message || error.message)
          }
        } else {
          if (!ignore) {
            setError(error.message)
          }
        }

        console.error(err)
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchData().then((r) => r)

    return () => {
      ignore = true
      controller.abort()
    }
  }, [url])

  return [loading, error, data]
}

export default useData
