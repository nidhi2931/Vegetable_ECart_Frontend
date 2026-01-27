import Navbar from "../components/Navbar";
import banner from "../assets/banner1.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative h-[calc(100vh-4rem)] overflow-hidden">

        {/* Background blur */}
        <img
          src={banner}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          alt="banner-top"
        />

        {/* Main hero image */}
        <img
          src={banner}
          className="absolute top-1/2 md:top-32 left-1/2
          -translate-x-1/2 -translate-y-1/2 md:translate-y-0
          z-10 w-[90%] sm:w-2/3 h-56 md:h-[70vh]
          object-cover rounded-xl shadow-2xl"
          alt="banner-main"
        />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 sm:pt-20 md:pt-1 text-center text-white z-30">
          <h1 className="mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Fresh Vegetables Delivered Daily
          </h1>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl drop-shadow">
            Farm fresh • Affordable • Fast delivery
          </p>
        </div>

      </div>
    </div>
  );
}
