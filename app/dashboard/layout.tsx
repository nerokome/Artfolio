
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar/>
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  )
}
