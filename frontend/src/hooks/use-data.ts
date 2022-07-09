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
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: method,
          data: body,
          cancelToken: source.token,
        })
        const data = response?.data
        if (!ignore) {
          setData(data)
        }
      } catch (err: any) {
        console.error(err)
        if (!ignore) {
          const error = err as Error | AxiosError<IErrorResponse>
          if (axios.isAxiosError(error)) {
            setError(error?.response?.data?.error?.message || error.message)
          } else {
            setError(error.message)
          }
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchData().then((r) => r)

    return () => {
      ignore = true
      source.cancel()
    }
  }, [url])

  return [loading, error, data]
}

export default useData
