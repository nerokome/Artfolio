import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className="bg-neutral-900">
      <div className="flex h-screen overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1">
          {/* Mobile: show Sidebar as top header */}
          <div className="md:hidden">
            <Sidebar />
          </div>

          {/* Desktop: show Header */}
          <div className="hidden md:block">
            <Header />
          </div>

          <main className="flex-1 overflow-y-auto p-6 bg-neutral-700">
            {children}
          </main>
        </div>
      </div>
    </body>
  )
}