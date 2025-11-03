import { useState } from "react";
import { CupIcon, KnifeIcon } from "@/assets/icons";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { dummyUser } from "@/data/loginData";
export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (email === dummyUser.email && password === dummyUser.password) {
            await login(email, password);
            setError('');
            navigate('/', { replace: true });
        } else {
            setError('Invalid email or password ❌');
        }
    };
    return (
        <div className="min-h-screen bg-linear-to-br from-primary-300/20 via-white to-secondary-300/20 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-linear-to-r from-primary-400 to-primary-500">
                            <KnifeIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="p-3 rounded-full bg-linear-to-r from-primary-300 to-primary-400">
                            <CupIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="p-3 rounded-full bg-linear-to-r from-secondary-300 to-primary-300">
                            <KnifeIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-dark-600 mb-2">Health Tracker</h1>
                    <p className="text-gray-500">Track your fitness journey</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-dark-600 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-dark-600 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                            Sign In
                        </button>
                    </form>


                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{" "}
                            <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-primary-500">1,250</div>
                        <div className="text-xs text-gray-500">Steps Today</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-secondary-300">8.5h</div>
                        <div className="text-xs text-gray-500">Sleep</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-primary-400">2,450</div>
                        <div className="text-xs text-gray-500">Calories</div>
                    </div>
                </div>
            </div>
        </div>
    );
}