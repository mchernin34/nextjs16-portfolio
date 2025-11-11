import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Next Portfolio Studio',
  description: 'Next Portfolio Studio'
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
