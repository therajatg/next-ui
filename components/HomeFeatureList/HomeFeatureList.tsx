export function HomeFeatureList() {
  return (
    <div className="bg-neutral-100">
      <div className="mx-2 md:mx-4 lg:mx-24 flex flex-col gap-y-24 items-center justify-center">
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col items-center gap-y-6">
            <h2 className="font-black text-6xl text-center max-w-2xl">
              Every tool you need is right at your fingertips
            </h2>
            <p className="text-center text-neutral-600 font-medium text-xl max-w-2xl">
              Nextbase is built for scale. Whether you are building a small app
              or an app to serve millions of users, Nextbase has all the tools
              you need.
            </p>
            <div className="hidden lg:flex gap-x-8 bg-stone-200 rounded-lg py-1 px-2 font-medium">
              {/* {features.map(({ name, status }) => (
              <span className={`${status && "bg-white rounded-md px-1"}`}>
                {name}
              </span>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
