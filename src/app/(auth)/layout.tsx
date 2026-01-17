export default function AuthLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#101628] to-[#161F38]">
            {children}
        </div>
    )
}