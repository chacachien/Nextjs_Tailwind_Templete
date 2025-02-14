export default function AuthLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        FV Store
                    </h2>
                </div>
                {children}
            </div>
        </div>
    )
}