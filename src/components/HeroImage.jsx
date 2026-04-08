function HeroImage({ imageUrl, monthLabel }) {
  return (
    <section className="relative">
      <div className="polaroid-card mx-auto max-w-md -rotate-1 rounded-sm bg-white p-3 shadow-2xl shadow-slate-400/35">
        <div className="overflow-hidden rounded-sm">
          <img
            src={imageUrl}
            alt="Scenic monthly cover"
            className="polaroid-img h-64 w-full object-cover md:h-72"
          />
        </div>
        <div className="pt-3 text-center">
          <p className="font-handwritten text-2xl text-slate-700">Memory Wall</p>
          <p className="text-sm text-slate-500">{monthLabel}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroImage
