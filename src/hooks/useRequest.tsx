import { useEffect, useState } from "react"

const toJson = (data: any) => data.json()

export const useRequest = (url: string, opts?: {}) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    fetch(url, { headers: { Accept: "application/json" } })
      .then(toJson)
      .then((data) => {
        setData(data)
      })
  }, [url])

  return { data, isLoading, error }
}
