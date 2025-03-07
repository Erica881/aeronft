"use client";

import { useRouter } from 'next/navigation';

function SearchFlight() {
    const router = useRouter();

    const handleSearch = () => {
      // Redirect to the searchResult page
      router.push('/depature_flight_result');
    };

  return (
    <div className="justify-center w-4/5 h-fit bg-white my-6 p-4 rounded-lg">
        <div className="flex space-x-4">
            <label className="text-slate-950"><input type="radio" name="trip" defaultChecked /> Round Trip</label>
            <label className="text-slate-950"><input type="radio" name="trip" /> One-Way</label>
            <label className="text-slate-950"><input type="radio" name="trip" /> Multi-City</label>
        </div>
        <div className="flex items-center w-full justify-between">
            <select className="p-2 border rounded w-1/5">
              <option >Penang International Airport PEN</option>
            </select>
            <button className="border px-2 py-1 rounded bg-slate-500">⇆</button>
            <select className="p-2 border rounded w-1/5">
              <option >Tokyo Haneda Airport (HND)</option>
            </select>
            <input type="date" className="p-2 border rounded w-1/6" />
            <input type="date" className="p-2 border rounded w-1/6" />
            <select className="p-2 border rounded w-1/5">
              <option>1 Adult, Economy</option>
              <option>2 Adult, Economy</option>
            </select>
          </div>
          <button className="flex bg-blue-500 text-white px-4 py-2 mt-2 rounded justify-self-end" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchFlight;