import { useQueryClient } from "react-query"

export const useGetFetchQuery = (data: [string, number | null]) => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData([data])
}
