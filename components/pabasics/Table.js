const people = [
  { name: "Grouping of Candles", price: "₹399/-" },
  { name: "S/R & Supply Demand", price: "₹499/-" },
  { name: "Trendlines & Curves", price: "₹499/-" },
  { name: "Timeframe", price: "₹999/-" },
  { name: "Counter Trendlines Concept", price: "₹999/-" },
  { name: "Price Action", price: "Priceless" },
  { name: "What moves a Price(Psychology)", price: "Priceless" },
  { name: "Technical Analysis", price: "Priceless" },
  { name: "Pro Tradingview Tutorial", price: "Priceless" },
  // More people...
];

export default function Table() {
  return (
    <center className="my-20 bg-black">
      <div className="flex flex-col">
        <div className="">
          <div className="py-2 overflow-x-auto inline-block w-5/6 sm:w-3/5 sm:px-6">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Topic
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right mr-20 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 text-right py-4 whitespace-nowrap text-gray-700">
                        {person.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
