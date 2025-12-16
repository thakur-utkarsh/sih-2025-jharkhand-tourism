export const Header = () => {
    return (

        <header className="sticky top-0 z-50 w-full border-b border-border-color bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-[#3e3228]">
            <h1> Ram Ram JII</h1>
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex w-full max-w-[1280px] items-center justify-between px-4 py-3 md:px-10">
                        {/* Logo and Brand */}
                        <div className="flex items-center gap-4 text-text-main dark:text-white">
                            <div className="size-8 text-primary">
                                <span className="material-symbols-outlined text-3xl">forest</span>
                            </div>
                            <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                Jharkhand Tourism
                            </h2>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex flex-1 justify-end gap-8">
                            <div className="flex items-center gap-9">
                                <a
                                    className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-medium leading-normal"
                                    href="#"
                                >
                                    Destinations
                                </a>
                                <a
                                    className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-medium leading-normal"
                                    href="#"
                                >
                                    Plan Trip
                                </a>
                                <a
                                    className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-medium leading-normal"
                                    href="#"
                                >
                                    Marketplace
                                </a>
                                <a
                                    className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-medium leading-normal"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-2">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Sign Up</span>
                                </button>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-border-color text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Login</span>
                                </button>
                            </div>
                        </nav>

                        {/* Mobile Menu Icon */}
                        <button className="md:hidden text-text-main dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}