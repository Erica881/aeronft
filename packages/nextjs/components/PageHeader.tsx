
function PageHeader() {
    return (
        <header className="flex justify-between items-center w-full p-4 bg-blue-950">
            <div className="text-xl font-bold">AeroNFT</div>
            <div className="flex items-center">
                <nav className="mr-6">
                    <ul className="flex space-x-6">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <button className="bg-slate-950 px-6 h-12 rounded-full justify-self-end">Connect Wallet</button>
            </div>
        </header>
        
    );
}

export default PageHeader;