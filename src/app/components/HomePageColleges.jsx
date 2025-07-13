"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePageCard from "./HomePageCard";

const HomePageColleges = () => {
  const [search, setSearch] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/colleges?search=${search}`);
        setColleges(res.data);
      } catch (err) {
        console.error("Failed to fetch colleges", err);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [search]); 

  return (
    <div className="pb-24">
      <div className="flex justify-center mb-6">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search Colleges Here"
          className="input w-2/3 border-2 border-sky-700"
        />
      </div>

      {loading ? (
        <p>Loading......</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {colleges?.slice(0, 3).map((college) => (
            <HomePageCard key={college._id} college={college} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePageColleges;
