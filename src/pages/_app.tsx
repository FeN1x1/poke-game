import "../styles/globals.css"
import type { AppProps } from "next/app"
import { App } from "konsta/react"
import { QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <App theme="ios">
        <Component {...pageProps} />
      </App>
    </QueryClientProvider>
  )
}

export default MyApp
