function HeroImage({ imageUrl, monthLabel }) {
  return (
    <section className="relative min-w-0 w-full overflow-x-clip">
      <div className="polaroid-card mx-auto w-full max-w-md -rotate-1 rounded-sm bg-white p-2 shadow-2xl shadow-slate-400/35 sm:p-3 md:rotate-0 xl:-rotate-1">
        <div className="overflow-hidden rounded-sm">
          <img
            src={imageUrl}
            alt="Scenic monthly cover"
            className="polaroid-img h-44 w-full object-cover sm:h-56 md:h-72"
          />
        </div>
        <div className="pt-2 text-center sm:pt-3">
          <p className="font-handwritten text-xl text-slate-700 sm:text-2xl">Memory Wall</p>
          <p className="text-xs text-slate-500 sm:text-sm">{monthLabel}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroImage
