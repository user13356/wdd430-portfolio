export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="text-center">
                <p>
                    © {new Date().getFullYear()} Corbin Van Scheltema | All Rights Reserved
                </p>
            </div>
        </footer>
    );
}