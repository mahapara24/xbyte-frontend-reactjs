const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Talk to us and get your project moving!
        </h1>
        <ul className="text-lg text-gray-600 space-y-2">
          <li className="flex items-center">
            <span className="inline-block bg-blue-100 text-blue-500 rounded-full p-2 mr-2">
              ✔
            </span>
            We will respond to you within 24 hours.
          </li>
          <li className="flex items-center">
            <span className="inline-block bg-blue-100 text-blue-500 rounded-full p-2 mr-2">
              ✔
            </span>
            You'll be talking to product and tech experts (no account managers).
          </li>
        </ul>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex top-0 items-center justify-center mb-40">
          <video
            src="https://videos.pexels.com/video-files/3205624/3205624-hd_1280_720_25fps.mp4"
            className="rounded-lg shadow-lg h-80"
            loop
            muted
          />
        </div>
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget Size
            </label>
            <select
              id="budget"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Select your budget</option>
              <option value="small">Less than $5000</option>
              <option value="medium">$5000 - $10000</option>
              <option value="large">More than $10000</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              rows={4}
            />
          </div>
          <div>
            <label
              htmlFor="how-did-you-hear"
              className="block text-sm font-medium text-gray-700"
            >
              How did you hear about us?
            </label>
            <input
              type="text"
              id="how-did-you-hear"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="nda"
                type="checkbox"
                className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="nda" className="font-medium text-gray-700">
                This project requires an NDA
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
