import Button from "./Button"

interface LoginFormProps {
    className?: string
}

function LoginForm({className = ''} : LoginFormProps) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <form className="flex flex-col justify-center items-center min-w-64 gap-2">
                <div className="w-full">
                    <label className="block text-gray-700 mb-2 font-medium">
                    نام کاربری
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
                    placeholder="نام کاربری مثال: noobgamer1378"
                    />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 mb-2 font-medium">
                    رمز عبور
                    </label>
                    <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
                    placeholder="رمز عبور خود را وارد کنید.."
                    />
                </div>
                <Button variant="secondary" size="md" type="submit">ورود</Button>
            </form>
        </div>
    )
}
export default LoginForm