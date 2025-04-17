export default function About() {
  return (
    <section id="about-us" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">A Delicate Balance of Growth and Longevity</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Like the Edelweiss flower that thrives in the challenging Alpine environment, we help software companies flourish in competitive markets.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Our approach is rooted in patience and expertise. Just as the Edelweiss flower has adapted to survive and thrive in harsh mountain conditions, we provide the resources and guidance needed for software companies to achieve sustainable growth and long-term success.
                </p>
                <p className="mt-6">
                  We believe in building lasting partnerships with exceptional founders, providing them with the capital, operational expertise, and strategic guidance needed to scale their businesses effectively and sustainably.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <img
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Swiss Alps landscape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}